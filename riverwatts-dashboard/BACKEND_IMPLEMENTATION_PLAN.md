# Comprehensive Backend Implementation Plan for RiverWatts Cloud Dashboard

## Executive Summary

This plan outlines the complete backend architecture for the RiverWatts hydrokinetic energy monitoring system. The backend will support real-time data processing, user management, device monitoring, analytics, and customer portal functionality.

## 1. System Architecture Overview

### 1.1 High-Level Architecture
```
┌─────────────────┐    ┌───────────────────────┐    ┌────────────────────────────┐
│   Frontend      │    │   Backend API         │    │   Data Layer               │
│   (Next.js)     │◄──►│   (FastAPI, Uvicorn)  │◄──►│   PostgreSQL • Redis •     │
└─────────────────┘    └───────────────────────┘    │   InfluxDB (time-series)   │
         │                       │                   └────────────────────────────┘
         ▼                       ▼                               ▲
┌─────────────────┐    ┌───────────────────────┐                 │
│   Client Apps   │    │   Services & Workers  │◄────── Redis ◄──┘
│   (Mobile/Web)  │    │   (Celery, Schedulers)│
└─────────────────┘    └───────────────────────┘

Observability: Prometheus + Grafana | Structured Logging (structlog) | OpenAPI
```

### 1.2 Technology Stack
- **Runtime**: Python 3.11+ with FastAPI
- **Framework**: FastAPI with Uvicorn ASGI server
- **Database**: PostgreSQL 15+ (primary), InfluxDB (time-series data)
- **ORM**: SQLAlchemy with Alembic for migrations
- **Authentication**: JWT with refresh tokens, Argon2 for password hashing
- **Real-time**: WebSocket (FastAPI WebSockets) for live updates
- **Message Queue**: Redis with Celery for job processing and caching
- **File Storage**: AWS S3 or MinIO for documents/reports
- **Monitoring**: Prometheus + Grafana
- **Logging**: Python logging with structlog for structured logging
- **Testing**: Pytest with httpx for API testing
- **Validation**: Pydantic for data validation and serialization

## 2. Database Design

### 2.1 Core Tables

#### Users Table
```sql
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    role user_role NOT NULL DEFAULT 'customer',
    is_active BOOLEAN DEFAULT true,
    email_verified BOOLEAN DEFAULT false,
    last_login TIMESTAMP,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    created_by UUID REFERENCES users(id),
    metadata JSONB DEFAULT '{}'
);

CREATE TYPE user_role AS ENUM ('admin', 'customer', 'technician', 'viewer');
```

#### Sites Table
```sql
CREATE TABLE sites (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(200) NOT NULL,
    region VARCHAR(100) NOT NULL,
    river_name VARCHAR(100) NOT NULL,
    latitude DECIMAL(10, 8) NOT NULL,
    longitude DECIMAL(11, 8) NOT NULL,
    elevation DECIMAL(8, 2),
    water_depth DECIMAL(8, 2),
    flow_rate DECIMAL(10, 2),
    capacity_kw DECIMAL(10, 2) NOT NULL,
    installation_date DATE,
    status site_status DEFAULT 'active',
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    metadata JSONB DEFAULT '{}'
);

CREATE TYPE site_status AS ENUM ('active', 'maintenance', 'offline', 'decommissioned');
```

#### Devices/Turbines Table
```sql
CREATE TABLE devices (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    site_id UUID NOT NULL REFERENCES sites(id) ON DELETE CASCADE,
    device_name VARCHAR(200) NOT NULL,
    device_type device_type NOT NULL,
    serial_number VARCHAR(100) UNIQUE NOT NULL,
    model VARCHAR(100) NOT NULL,
    manufacturer VARCHAR(100) NOT NULL,
    capacity_kw DECIMAL(10, 2) NOT NULL,
    installation_date DATE NOT NULL,
    last_maintenance DATE,
    next_maintenance DATE,
    status device_status DEFAULT 'active',
    firmware_version VARCHAR(50),
    hardware_version VARCHAR(50),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    metadata JSONB DEFAULT '{}'
);

CREATE TYPE device_type AS ENUM ('turbine', 'sensor', 'controller', 'battery');
CREATE TYPE device_status AS ENUM ('active', 'maintenance', 'offline', 'error', 'warning');
```

#### Device Readings (Time Series Data)
```sql
CREATE TABLE device_readings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    device_id UUID NOT NULL REFERENCES devices(id) ON DELETE CASCADE,
    timestamp TIMESTAMP NOT NULL,
    power_output_kw DECIMAL(10, 3),
    voltage_v DECIMAL(8, 2),
    current_a DECIMAL(8, 2),
    frequency_hz DECIMAL(6, 2),
    efficiency_percent DECIMAL(5, 2),
    temperature_c DECIMAL(6, 2),
    vibration_level DECIMAL(8, 3),
    water_flow_rate DECIMAL(10, 2),
    battery_level_percent DECIMAL(5, 2),
    created_at TIMESTAMP DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_device_readings_device_timestamp ON device_readings(device_id, timestamp DESC);
CREATE INDEX idx_device_readings_timestamp ON device_readings(timestamp DESC);
```

#### Alerts Table
```sql
CREATE TABLE alerts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    device_id UUID REFERENCES devices(id) ON DELETE CASCADE,
    site_id UUID REFERENCES sites(id) ON DELETE CASCADE,
    alert_type alert_type NOT NULL,
    severity alert_severity NOT NULL,
    title VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,
    status alert_status DEFAULT 'active',
    acknowledged_by UUID REFERENCES users(id),
    acknowledged_at TIMESTAMP,
    resolved_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    metadata JSONB DEFAULT '{}'
);

CREATE TYPE alert_type AS ENUM ('performance', 'maintenance', 'security', 'environmental', 'system');
CREATE TYPE alert_severity AS ENUM ('low', 'medium', 'high', 'critical');
CREATE TYPE alert_status AS ENUM ('active', 'acknowledged', 'resolved', 'dismissed');
```

#### Maintenance Tasks Table
```sql
CREATE TABLE maintenance_tasks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    device_id UUID NOT NULL REFERENCES devices(id) ON DELETE CASCADE,
    site_id UUID NOT NULL REFERENCES sites(id) ON DELETE CASCADE,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    task_type maintenance_type NOT NULL,
    priority task_priority NOT NULL,
    status task_status DEFAULT 'pending',
    assigned_to UUID REFERENCES users(id),
    scheduled_date DATE,
    completed_date DATE,
    estimated_duration_hours INTEGER,
    actual_duration_hours INTEGER,
    created_by UUID NOT NULL REFERENCES users(id),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    metadata JSONB DEFAULT '{}'
);

CREATE TYPE maintenance_type AS ENUM ('preventive', 'corrective', 'predictive', 'emergency');
CREATE TYPE task_priority AS ENUM ('low', 'medium', 'high', 'urgent');
CREATE TYPE task_status AS ENUM ('pending', 'in_progress', 'completed', 'cancelled');
```

### 2.2 Additional Tables

#### Customer Subscriptions
```sql
CREATE TABLE customer_subscriptions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    site_id UUID NOT NULL REFERENCES sites(id) ON DELETE CASCADE,
    subscription_type subscription_type NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE,
    monthly_quota_kwh DECIMAL(10, 2),
    current_usage_kwh DECIMAL(10, 2) DEFAULT 0,
    status subscription_status DEFAULT 'active',
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TYPE subscription_type AS ENUM ('basic', 'premium', 'enterprise');
CREATE TYPE subscription_status AS ENUM ('active', 'suspended', 'cancelled', 'expired');
```

#### Energy Transactions
```sql
CREATE TABLE energy_transactions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    device_id UUID NOT NULL REFERENCES devices(id) ON DELETE CASCADE,
    transaction_type transaction_type NOT NULL,
    amount_kwh DECIMAL(10, 3) NOT NULL,
    price_per_kwh DECIMAL(8, 4),
    total_amount DECIMAL(10, 2),
    transaction_date TIMESTAMP NOT NULL,
    status transaction_status DEFAULT 'completed',
    created_at TIMESTAMP DEFAULT NOW(),
    metadata JSONB DEFAULT '{}'
);

CREATE TYPE transaction_type AS ENUM ('generation', 'consumption', 'recharge', 'transfer');
CREATE TYPE transaction_status AS ENUM ('pending', 'completed', 'failed', 'cancelled');
```

## 3. API Architecture

### 3.1 API Structure
```
/api/v1/
├── auth/                    # Authentication endpoints
│   ├── login
│   ├── logout
│   ├── register
│   ├── refresh
│   └── forgot-password
├── users/                   # User management
│   ├── GET /               # List users (admin only)
│   ├── POST /              # Create user (admin only)
│   ├── GET /:id            # Get user details
│   ├── PUT /:id            # Update user
│   └── DELETE /:id         # Delete user (admin only)
├── sites/                  # Site management
│   ├── GET /               # List sites
│   ├── POST /              # Create site (admin only)
│   ├── GET /:id            # Get site details
│   ├── PUT /:id            # Update site (admin only)
│   └── DELETE /:id         # Delete site (admin only)
├── devices/                # Device management
│   ├── GET /               # List devices
│   ├── POST /              # Create device (admin only)
│   ├── GET /:id            # Get device details
│   ├── PUT /:id            # Update device (admin only)
│   ├── DELETE /:id         # Delete device (admin only)
│   └── GET /:id/readings   # Get device readings
├── readings/               # Time series data
│   ├── GET /               # Get readings with filters
│   ├── POST /              # Create reading (device only)
│   └── GET /aggregated     # Get aggregated data
├── alerts/                 # Alert management
│   ├── GET /               # List alerts
│   ├── POST /              # Create alert (system only)
│   ├── PUT /:id/acknowledge # Acknowledge alert
│   └── PUT /:id/resolve    # Resolve alert
├── maintenance/            # Maintenance management
│   ├── GET /               # List maintenance tasks
│   ├── POST /              # Create task (admin only)
│   ├── PUT /:id            # Update task
│   └── GET /calendar       # Get maintenance calendar
├── analytics/              # Analytics and reporting
│   ├── GET /performance    # Performance analytics
│   ├── GET /efficiency     # Efficiency metrics
│   ├── GET /reports        # Generate reports
│   └── GET /export         # Export data
└── customer/               # Customer-specific endpoints
    ├── GET /dashboard      # Customer dashboard data
    ├── GET /energy-usage   # Personal energy usage
    ├── GET /billing        # Billing information
    └── POST /recharge      # Energy recharge
```

### 3.2 Authentication & Authorization

#### JWT Implementation
```python
from pydantic import BaseModel
from typing import List, Literal
from datetime import datetime

class JWTPayload(BaseModel):
    user_id: str
    email: str
    role: Literal['admin', 'customer', 'technician', 'viewer']
    permissions: List[str]
    iat: int
    exp: int

class RefreshTokenPayload(BaseModel):
    user_id: str
    token_id: str
    iat: int
    exp: int
```

#### Middleware Stack
```python
from fastapi import HTTPException, Depends, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded

# Rate limiting
limiter = Limiter(key_func=get_remote_address)

# Authentication dependency
security = HTTPBearer()

async def get_current_user(credentials: HTTPAuthorizationCredentials = Depends(security)):
    # Verify JWT token
    # Return user object
    pass

# Authorization dependency
def require_role(required_roles: List[str]):
    def role_checker(current_user = Depends(get_current_user)):
        if current_user.role not in required_roles:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Insufficient permissions"
            )
        return current_user
    return role_checker
```

## 4. Real-Time Data Processing

### 4.1 WebSocket Implementation
```python
from fastapi import WebSocket, WebSocketDisconnect
from typing import Dict, List
import json
import asyncio

class ConnectionManager:
    def __init__(self):
        self.active_connections: Dict[str, List[WebSocket]] = {}

    async def connect(self, websocket: WebSocket, room_id: str):
        await websocket.accept()
        if room_id not in self.active_connections:
            self.active_connections[room_id] = []
        self.active_connections[room_id].append(websocket)

    def disconnect(self, websocket: WebSocket, room_id: str):
        if room_id in self.active_connections:
            self.active_connections[room_id].remove(websocket)

    async def send_personal_message(self, message: str, websocket: WebSocket):
        await websocket.send_text(message)

    async def broadcast_to_room(self, message: str, room_id: str):
        if room_id in self.active_connections:
            for connection in self.active_connections[room_id]:
                try:
                    await connection.send_text(message)
                except:
                    # Remove disconnected clients
                    self.active_connections[room_id].remove(connection)

manager = ConnectionManager()

@app.websocket("/ws/{room_id}")
async def websocket_endpoint(websocket: WebSocket, room_id: str):
    await manager.connect(websocket, room_id)
    try:
        while True:
            data = await websocket.receive_text()
            # Handle incoming messages
            message_data = json.loads(data)
            if message_data.get("type") == "device_reading":
                await manager.broadcast_to_room(data, f"device-{message_data['device_id']}")
    except WebSocketDisconnect:
        manager.disconnect(websocket, room_id)
```

### 4.2 Data Ingestion Pipeline
```python
from sqlalchemy.orm import Session
from celery import Celery
from pydantic import BaseModel
from typing import List
import asyncio

# Celery configuration
celery_app = Celery('riverwatts', broker='redis://localhost:6379')

class RawDeviceReading(BaseModel):
    device_id: str
    timestamp: datetime
    power_output_kw: float
    voltage_v: float
    current_a: float
    # ... other fields

class DataIngestionService:
    def __init__(self, db: Session):
        self.db = db
    
    async def process_device_reading(self, reading: RawDeviceReading) -> None:
        # 1. Validate data format
        validated_reading = self._validate_reading(reading)
        
        # 2. Transform to standard format
        standard_reading = self._transform_reading(validated_reading)
        
        # 3. Store in time-series database
        await self._store_reading(standard_reading)
        
        # 4. Check for anomalies
        await self._check_anomalies(standard_reading)
        
        # 5. Generate alerts if needed
        await self._generate_alerts_if_needed(standard_reading)
        
        # 6. Update real-time dashboard
        await self._broadcast_to_websockets(standard_reading)
        
        # 7. Trigger analytics calculations
        self._trigger_analytics.delay(standard_reading.device_id)
    
    async def batch_process_readings(self, readings: List[RawDeviceReading]) -> None:
        # Process multiple readings efficiently using asyncio
        tasks = [self.process_device_reading(reading) for reading in readings]
        await asyncio.gather(*tasks)

@celery_app.task
def trigger_analytics(device_id: str):
    # Background task for analytics calculations
    pass
```

## 5. Microservices Architecture

### 5.1 Service Breakdown

#### Authentication Service
- User registration/login
- JWT token management
- Password reset functionality
- Role-based access control

#### Device Management Service
- Device CRUD operations
- Device status monitoring
- Configuration management
- Firmware update tracking

#### Data Processing Service
- Real-time data ingestion
- Data validation and transformation
- Anomaly detection
- Data aggregation

#### Analytics Service
- Performance calculations
- Efficiency metrics
- Trend analysis
- Report generation

#### Notification Service
- Alert generation
- Email notifications
- SMS notifications
- Push notifications

#### Maintenance Service
- Task scheduling
- Workflow management
- Resource allocation
- Progress tracking

### 5.2 Service Communication
```python
import redis
import json
from typing import Callable, Dict, Any
from abc import ABC, abstractmethod

class DomainEvent(ABC):
    @abstractmethod
    def to_dict(self) -> Dict[str, Any]:
        pass

class EventBus:
    def __init__(self, redis_client: redis.Redis):
        self.redis = redis_client
        self.subscribers: Dict[str, List[Callable]] = {}
    
    async def publish(self, event: DomainEvent) -> None:
        event_data = {
            'type': event.__class__.__name__,
            'data': event.to_dict(),
            'timestamp': datetime.utcnow().isoformat()
        }
        await self.redis.publish('domain-events', json.dumps(event_data))
    
    async def subscribe(self, event_type: str, handler: Callable) -> None:
        if event_type not in self.subscribers:
            self.subscribers[event_type] = []
        self.subscribers[event_type].append(handler)
    
    async def _handle_message(self, message: Dict[str, Any]) -> None:
        event_type = message.get('type')
        if event_type in self.subscribers:
            for handler in self.subscribers[event_type]:
                try:
                    await handler(message['data'])
                except Exception as e:
                    # Log error and continue
                    logger.error(f"Error handling event {event_type}: {e}")
```

## 6. Security Implementation

### 6.1 Security Measures
- **Input Validation**: Pydantic schema validation
- **SQL Injection Prevention**: SQLAlchemy ORM with parameterized queries
- **XSS Protection**: Input sanitization and HTML escaping
- **CSRF Protection**: CSRF tokens and SameSite cookies
- **Rate Limiting**: SlowAPI for per-IP and per-user limits
- **CORS Configuration**: FastAPI CORS middleware with strict policies
- **Security Headers**: Secure headers via FastAPI security middleware
- **Environment Variables**: Pydantic Settings for secure configuration management

### 6.2 Data Encryption
```python
from argon2 import PasswordHasher
from cryptography.fernet import Fernet
import os

# Password hashing with Argon2
ph = PasswordHasher()

def hash_password(password: str) -> str:
    return ph.hash(password)

def verify_password(password: str, hashed: str) -> bool:
    try:
        ph.verify(hashed, password)
        return True
    except:
        return False

# Sensitive data encryption
def encrypt_sensitive_data(data: str) -> str:
    key = os.getenv('ENCRYPTION_KEY').encode()
    f = Fernet(key)
    encrypted_data = f.encrypt(data.encode())
    return encrypted_data.decode()

def decrypt_sensitive_data(encrypted_data: str) -> str:
    key = os.getenv('ENCRYPTION_KEY').encode()
    f = Fernet(key)
    decrypted_data = f.decrypt(encrypted_data.encode())
    return decrypted_data.decode()
```

## 7. Performance Optimization

### 7.1 Database Optimization
- **Connection Pooling**: SQLAlchemy connection pooling for PostgreSQL
- **Query Optimization**: Proper indexing strategy and query optimization
- **Read Replicas**: For read-heavy operations
- **Caching**: Redis for frequently accessed data
- **Time-Series Optimization**: InfluxDB for metrics
- **Async Database Operations**: AsyncPG for high-performance async operations

### 7.2 API Performance
```python
from functools import wraps
import redis
import json
from typing import Any, Callable

redis_client = redis.Redis(host='localhost', port=6379, db=0)

def cache_response(ttl: int = 300):
    def decorator(func: Callable) -> Callable:
        @wraps(func)
        async def wrapper(*args, **kwargs):
            # Generate cache key from request parameters
            cache_key = f"cache:{func.__name__}:{hash(str(args) + str(kwargs))}"
            
            # Try to get from cache
            cached = redis_client.get(cache_key)
            if cached:
                return json.loads(cached)
            
            # Execute function and cache result
            result = await func(*args, **kwargs)
            redis_client.setex(cache_key, ttl, json.dumps(result, default=str))
            
            return result
        return wrapper
    return decorator

# Usage example
@cache_response(ttl=600)  # Cache for 10 minutes
async def get_device_readings(device_id: str, limit: int = 100):
    # Database query logic here
    pass
```

## 8. Monitoring & Logging

### 8.1 Application Monitoring
```python
from prometheus_client import Counter, Histogram, Gauge, start_http_server
import time
from functools import wraps

# Prometheus metrics
http_request_duration = Histogram(
    'http_request_duration_seconds',
    'Duration of HTTP requests in seconds',
    ['method', 'route', 'status_code']
)

http_requests_total = Counter(
    'http_requests_total',
    'Total number of HTTP requests',
    ['method', 'route', 'status_code']
)

active_connections = Gauge(
    'websocket_active_connections',
    'Number of active WebSocket connections'
)

# Middleware for metrics collection
def track_metrics(func):
    @wraps(func)
    async def wrapper(*args, **kwargs):
        start_time = time.time()
        try:
            result = await func(*args, **kwargs)
            status_code = 200
            return result
        except Exception as e:
            status_code = 500
            raise
        finally:
            duration = time.time() - start_time
            http_request_duration.labels(
                method='GET',  # This would be dynamic
                route=func.__name__,
                status_code=status_code
            ).observe(duration)
            http_requests_total.labels(
                method='GET',
                route=func.__name__,
                status_code=status_code
            ).inc()
    return wrapper
```

### 8.2 Structured Logging
```python
import structlog
import logging
from pythonjsonlogger import jsonlogger

# Configure structured logging
structlog.configure(
    processors=[
        structlog.stdlib.filter_by_level,
        structlog.stdlib.add_logger_name,
        structlog.stdlib.add_log_level,
        structlog.stdlib.PositionalArgumentsFormatter(),
        structlog.processors.TimeStamper(fmt="iso"),
        structlog.processors.StackInfoRenderer(),
        structlog.processors.format_exc_info,
        structlog.processors.UnicodeDecoder(),
        structlog.processors.JSONRenderer()
    ],
    context_class=dict,
    logger_factory=structlog.stdlib.LoggerFactory(),
    wrapper_class=structlog.stdlib.BoundLogger,
    cache_logger_on_first_use=True,
)

# File handler for structured logs
file_handler = logging.FileHandler('app.log')
file_handler.setFormatter(jsonlogger.JsonFormatter())

# Console handler
console_handler = logging.StreamHandler()
console_handler.setFormatter(logging.Formatter(
    '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
))

# Configure root logger
logger = logging.getLogger()
logger.addHandler(file_handler)
logger.addHandler(console_handler)
logger.setLevel(logging.INFO)

# Usage
log = structlog.get_logger()
log.info("User login", user_id="123", email="user@example.com")
```

## 9. Testing Strategy

### 9.1 Test Structure
```
tests/
├── unit/                   # Unit tests
│   ├── services/
│   ├── models/
│   └── utils/
├── integration/            # Integration tests
│   ├── api/
│   ├── database/
│   └── external-services/
├── e2e/                   # End-to-end tests
│   ├── user-flows/
│   └── admin-flows/
└── fixtures/              # Test data
    ├── users.json
    ├── devices.json
    └── readings.json
```

### 9.2 Test Implementation
```python
import pytest
from httpx import AsyncClient
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from app.main import app
from app.database import get_db, Base

# Test database setup
SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def override_get_db():
    try:
        db = TestingSessionLocal()
        yield db
    finally:
        db.close()

app.dependency_overrides[get_db] = override_get_db

@pytest.fixture
def client():
    Base.metadata.create_all(bind=engine)
    with TestClient(app) as c:
        yield c
    Base.metadata.drop_all(bind=engine)

@pytest.fixture
def admin_token():
    # Create admin user and return JWT token
    pass

@pytest.fixture
def customer_token():
    # Create customer user and return JWT token
    pass

class TestDeviceAPI:
    def test_get_devices_admin_success(self, client, admin_token):
        response = client.get(
            "/api/v1/devices",
            headers={"Authorization": f"Bearer {admin_token}"}
        )
        assert response.status_code == 200
        assert "devices" in response.json()
        assert isinstance(response.json()["devices"], list)
    
    def test_get_devices_customer_forbidden(self, client, customer_token):
        response = client.get(
            "/api/v1/devices",
            headers={"Authorization": f"Bearer {customer_token}"}
        )
        assert response.status_code == 403
        assert "Insufficient permissions" in response.json()["detail"]
```

## 10. Deployment & DevOps

### 10.1 Containerization
```dockerfile
# Dockerfile for Python FastAPI application
FROM python:3.11-slim

WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    gcc \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements and install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Create non-root user
RUN useradd --create-home --shell /bin/bash app
USER app

EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

### 10.2 Docker Compose
```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "8000:8000"
    environment:
      - PYTHONPATH=/app
      - DATABASE_URL=postgresql://user:pass@db:5432/riverwatts
      - REDIS_URL=redis://redis:6379
      - INFLUXDB_URL=http://influxdb:8086
    depends_on:
      - db
      - redis
      - influxdb
    volumes:
      - ./logs:/app/logs
  
  celery:
    build: .
    command: celery -A app.celery worker --loglevel=info
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/riverwatts
      - REDIS_URL=redis://redis:6379
    depends_on:
      - db
      - redis
  
  db:
    image: postgres:15
    environment:
      - POSTGRES_DB=riverwatts
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=pass
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"
  
  redis:
    image: redis:7-alpine
    volumes:
      - redis_data:/data
    ports:
      - "6379:6379"
  
  influxdb:
    image: influxdb:2.7
    environment:
      - INFLUXDB_DB=riverwatts_metrics
      - INFLUXDB_ADMIN_USER=admin
      - INFLUXDB_ADMIN_PASSWORD=password
    volumes:
      - influxdb_data:/var/lib/influxdb2
    ports:
      - "8086:8086"

volumes:
  postgres_data:
  redis_data:
  influxdb_data:
```

### 10.3 CI/CD Pipeline
```yaml
# GitHub Actions workflow
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:15
        env:
          POSTGRES_PASSWORD: postgres
          POSTGRES_DB: test_riverwatts
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          - 5432:5432
      
      redis:
        image: redis:7
        options: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          - 6379:6379

    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-python@v4
        with:
          python-version: '3.11'
      - name: Install dependencies
        run: |
          python -m pip install --upgrade pip
          pip install -r requirements.txt
          pip install -r requirements-dev.txt
      - name: Run tests
        run: |
          pytest tests/ -v --cov=app --cov-report=xml
      - name: Run linting
        run: |
          flake8 app/
          black --check app/
          isort --check-only app/
  
  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Build Docker image
        run: docker build -t riverwatts-api .
      - name: Push to registry
        run: docker push ${{ secrets.DOCKER_REGISTRY }}/riverwatts-api
  
  deploy:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - name: Deploy to production
        run: |
          # Deployment commands
```

## 11. Environment Configuration

### 11.1 Environment Variables
```bash
# Database Configuration
DATABASE_URL=postgresql://user:password@localhost:5432/riverwatts
REDIS_URL=redis://localhost:6379
INFLUXDB_URL=http://localhost:8086
INFLUXDB_TOKEN=your_influxdb_token

# Authentication
JWT_SECRET=your_jwt_secret_key
JWT_REFRESH_SECRET=your_refresh_secret_key
JWT_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d
ENCRYPTION_KEY=your_fernet_encryption_key

# External Services
GOOGLE_MAPS_API_KEY=your_google_maps_key
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password

# Application Settings
PYTHONPATH=/app
ENVIRONMENT=development
PORT=8000
FRONTEND_URL=http://localhost:3000
CORS_ORIGIN=http://localhost:3000

# Monitoring
PROMETHEUS_PORT=9090
GRAFANA_PORT=3001

# File Storage
AWS_ACCESS_KEY_ID=your_aws_key
AWS_SECRET_ACCESS_KEY=your_aws_secret
AWS_REGION=us-east-1
AWS_S3_BUCKET=riverwatts-documents

# Celery Configuration
CELERY_BROKER_URL=redis://localhost:6379/0
CELERY_RESULT_BACKEND=redis://localhost:6379/0
```

### 11.2 Python Dependencies (requirements.txt)
```txt
# FastAPI and ASGI server
fastapi==0.104.1
uvicorn[standard]==0.24.0

# Database
sqlalchemy==2.0.23
alembic==1.12.1
asyncpg==0.29.0
psycopg2-binary==2.9.9

# Authentication & Security
python-jose[cryptography]==3.3.0
passlib[argon2]==1.7.4
argon2-cffi==23.1.0
cryptography==41.0.7

# Validation
pydantic==2.5.0
pydantic-settings==2.1.0

# Redis & Caching
redis==5.0.1
celery==5.3.4

# Time-series database
influxdb-client==1.38.0

# Monitoring & Logging
prometheus-client==0.19.0
structlog==23.2.0
python-json-logger==2.0.7

# HTTP client
httpx==0.25.2

# Rate limiting
slowapi==0.1.9

# File handling
python-multipart==0.0.6
aiofiles==23.2.1

# Development
pytest==7.4.3
pytest-asyncio==0.21.1
pytest-cov==4.1.0
httpx==0.25.2
black==23.11.0
flake8==6.1.0
isort==5.12.0
```

## 12. Implementation Timeline

### Phase 1: Foundation (Weeks 1-2)
- [ ] Set up project structure and dependencies
- [ ] Configure database schema and migrations
- [ ] Implement basic authentication system
- [ ] Set up development environment with Docker
- [ ] Create basic API endpoints for users and sites

### Phase 2: Core Features (Weeks 3-4)
- [ ] Implement device management APIs
- [ ] Set up real-time data ingestion
- [ ] Create WebSocket server for live updates
- [ ] Implement alert system
- [ ] Add basic analytics endpoints

### Phase 3: Advanced Features (Weeks 5-6)
- [ ] Implement maintenance management system
- [ ] Add customer portal APIs
- [ ] Create reporting and export functionality
- [ ] Implement caching and performance optimization
- [ ] Add comprehensive logging and monitoring

### Phase 4: Testing & Deployment (Weeks 7-8)
- [ ] Write comprehensive test suite
- [ ] Set up CI/CD pipeline
- [ ] Configure production environment
- [ ] Performance testing and optimization
- [ ] Security audit and hardening

## 13. Risk Mitigation

### 13.1 Technical Risks
- **Database Performance**: Implement proper indexing and query optimization
- **Real-time Data Loss**: Use message queues with persistence
- **Security Vulnerabilities**: Regular security audits and dependency updates
- **Scalability Issues**: Design for horizontal scaling from the start

### 13.2 Operational Risks
- **Data Backup**: Automated daily backups with point-in-time recovery
- **Monitoring**: Comprehensive alerting for system health
- **Documentation**: Detailed API documentation and deployment guides
- **Team Knowledge**: Code reviews and knowledge sharing sessions

## 14. API Endpoints Reference

### 14.1 Authentication Endpoints
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/v1/auth/login` | User login | No |
| POST | `/api/v1/auth/logout` | User logout | Yes |
| POST | `/api/v1/auth/register` | User registration | No |
| POST | `/api/v1/auth/refresh` | Refresh JWT token | Yes |
| POST | `/api/v1/auth/forgot-password` | Password reset request | No |

### 14.2 User Management Endpoints
| Method | Endpoint | Description | Auth Required | Role Required |
|--------|----------|-------------|---------------|---------------|
| GET | `/api/v1/users` | List all users | Yes | Admin |
| POST | `/api/v1/users` | Create new user | Yes | Admin |
| GET | `/api/v1/users/:id` | Get user details | Yes | Self/Admin |
| PUT | `/api/v1/users/:id` | Update user | Yes | Self/Admin |
| DELETE | `/api/v1/users/:id` | Delete user | Yes | Admin |

### 14.3 Device Management Endpoints
| Method | Endpoint | Description | Auth Required | Role Required |
|--------|----------|-------------|---------------|---------------|
| GET | `/api/v1/devices` | List all devices | Yes | All |
| POST | `/api/v1/devices` | Create new device | Yes | Admin |
| GET | `/api/v1/devices/:id` | Get device details | Yes | All |
| PUT | `/api/v1/devices/:id` | Update device | Yes | Admin |
| DELETE | `/api/v1/devices/:id` | Delete device | Yes | Admin |
| GET | `/api/v1/devices/:id/readings` | Get device readings | Yes | All |

### 14.4 Analytics Endpoints
| Method | Endpoint | Description | Auth Required | Role Required |
|--------|----------|-------------|---------------|---------------|
| GET | `/api/v1/analytics/performance` | Performance analytics | Yes | Admin |
| GET | `/api/v1/analytics/efficiency` | Efficiency metrics | Yes | Admin |
| GET | `/api/v1/analytics/reports` | Generate reports | Yes | Admin |
| GET | `/api/v1/analytics/export` | Export data | Yes | Admin |

## 15. Data Models

### 15.1 User Model
```python
from pydantic import BaseModel, EmailStr
from typing import Optional, Dict, Any, Literal
from datetime import datetime
from uuid import UUID

class UserBase(BaseModel):
    email: EmailStr
    first_name: str
    last_name: str
    role: Literal['admin', 'customer', 'technician', 'viewer']
    is_active: bool = True
    email_verified: bool = False

class UserCreate(UserBase):
    password: str

class UserUpdate(BaseModel):
    email: Optional[EmailStr] = None
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    is_active: Optional[bool] = None

class User(UserBase):
    id: UUID
    last_login: Optional[datetime] = None
    created_at: datetime
    updated_at: datetime
    created_by: Optional[UUID] = None
    metadata: Dict[str, Any] = {}

    class Config:
        from_attributes = True
```

### 15.2 Device Model
```python
from pydantic import BaseModel
from typing import Optional, Dict, Any, Literal
from datetime import datetime, date
from uuid import UUID
from decimal import Decimal

class DeviceBase(BaseModel):
    device_name: str
    device_type: Literal['turbine', 'sensor', 'controller', 'battery']
    serial_number: str
    model: str
    manufacturer: str
    capacity_kw: Decimal
    installation_date: date
    firmware_version: Optional[str] = None
    hardware_version: Optional[str] = None

class DeviceCreate(DeviceBase):
    site_id: UUID

class DeviceUpdate(BaseModel):
    device_name: Optional[str] = None
    status: Optional[Literal['active', 'maintenance', 'offline', 'error', 'warning']] = None
    firmware_version: Optional[str] = None
    hardware_version: Optional[str] = None

class Device(DeviceBase):
    id: UUID
    site_id: UUID
    last_maintenance: Optional[date] = None
    next_maintenance: Optional[date] = None
    status: Literal['active', 'maintenance', 'offline', 'error', 'warning'] = 'active'
    created_at: datetime
    updated_at: datetime
    metadata: Dict[str, Any] = {}

    class Config:
        from_attributes = True
```

### 15.3 Device Reading Model
```python
from pydantic import BaseModel
from typing import Optional
from datetime import datetime
from uuid import UUID
from decimal import Decimal

class DeviceReadingBase(BaseModel):
    device_id: UUID
    timestamp: datetime
    power_output_kw: Optional[Decimal] = None
    voltage_v: Optional[Decimal] = None
    current_a: Optional[Decimal] = None
    frequency_hz: Optional[Decimal] = None
    efficiency_percent: Optional[Decimal] = None
    temperature_c: Optional[Decimal] = None
    vibration_level: Optional[Decimal] = None
    water_flow_rate: Optional[Decimal] = None
    battery_level_percent: Optional[Decimal] = None

class DeviceReadingCreate(DeviceReadingBase):
    pass

class DeviceReading(DeviceReadingBase):
    id: UUID
    created_at: datetime

    class Config:
        from_attributes = True
```

## 16. Error Handling

### 16.1 Error Response Format
```python
from pydantic import BaseModel
from typing import Optional, Any
from datetime import datetime

class ErrorResponse(BaseModel):
    error: 'ErrorDetail'

class ErrorDetail(BaseModel):
    code: str
    message: str
    details: Optional[Any] = None
    timestamp: datetime
    request_id: str
```

### 16.2 Common Error Codes
- `AUTH_REQUIRED`: Authentication required
- `AUTH_INVALID`: Invalid authentication credentials
- `AUTH_EXPIRED`: Authentication token expired
- `PERMISSION_DENIED`: Insufficient permissions
- `VALIDATION_ERROR`: Request validation failed
- `RESOURCE_NOT_FOUND`: Requested resource not found
- `RESOURCE_CONFLICT`: Resource conflict (e.g., duplicate email)
- `RATE_LIMIT_EXCEEDED`: Rate limit exceeded
- `INTERNAL_ERROR`: Internal server error

## 17. Conclusion

This comprehensive backend implementation plan provides a solid foundation for building a robust, scalable backend system that will support the RiverWatts hydrokinetic energy monitoring platform. Each component is designed to work together seamlessly while maintaining flexibility for future enhancements.

The plan covers all essential aspects of backend development including database design, API architecture, security, performance optimization, testing, deployment, and monitoring. The implementation timeline provides a clear roadmap for development over 8 weeks, broken into manageable phases.

Key success factors for this implementation:
1. **Modular Architecture**: Microservices design allows for independent scaling and maintenance
2. **Security First**: Comprehensive security measures protect sensitive energy data
3. **Real-time Capabilities**: WebSocket implementation ensures live data updates
4. **Performance Optimization**: Caching and database optimization for high throughput
5. **Comprehensive Testing**: Full test coverage ensures reliability
6. **Monitoring & Observability**: Full visibility into system health and performance

This backend will seamlessly integrate with the existing Next.js frontend to provide a complete hydrokinetic energy monitoring solution.
