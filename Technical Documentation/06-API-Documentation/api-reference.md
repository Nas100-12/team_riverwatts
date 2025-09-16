# API Documentation

## Overview

The RiverWatts API provides endpoints for managing hydrokinetic energy systems, user authentication, and data analytics. This documentation covers both current simulated endpoints and future real API implementations.

## Authentication

### Authentication Flow
```typescript
// Current implementation (simulated)
const authenticate = async (username: string, password: string) => {
  // Simulated authentication
  const users = {
    'admin': { password: 'admin123', role: 'admin' },
    'customer': { password: 'customer123', role: 'customer' }
  };
  
  const user = users[username];
  if (user && user.password === password) {
    return { success: true, user: { username, role: user.role } };
  }
  return { success: false, error: 'Invalid credentials' };
};
```

### Future JWT Implementation
```typescript
// POST /api/auth/login
interface LoginRequest {
  username: string;
  password: string;
}

interface LoginResponse {
  success: boolean;
  token?: string;
  user?: {
    id: string;
    username: string;
    role: 'admin' | 'customer';
    email: string;
  };
  error?: string;
}
```

## Data Endpoints

### Energy Data

#### Get Energy Metrics
```typescript
// GET /api/energy/metrics
interface EnergyMetrics {
  currentOutput: number;      // Current power output in kW
  dailyGeneration: number;    // Today's generation in kWh
  weeklyGeneration: number;   // This week's generation in kWh
  monthlyGeneration: number;  // This month's generation in kWh
  efficiency: number;         // System efficiency percentage
  batteryLevel: number;       // Battery charge percentage
}

// Example response
{
  "currentOutput": 2.4,
  "dailyGeneration": 18.7,
  "weeklyGeneration": 127.3,
  "monthlyGeneration": 542.1,
  "efficiency": 94.2,
  "batteryLevel": 87
}
```

#### Get Historical Data
```typescript
// GET /api/energy/history?period=24h&interval=1h
interface HistoricalDataPoint {
  timestamp: string;
  generation: number;
  consumption: number;
  batteryLevel: number;
  efficiency: number;
}

// Query parameters
interface HistoryQuery {
  period: '24h' | '7d' | '30d' | '1y';
  interval: '15m' | '1h' | '1d' | '1w';
  startDate?: string;
  endDate?: string;
}
```

### System Status

#### Get System Health
```typescript
// GET /api/system/health
interface SystemHealth {
  status: 'operational' | 'warning' | 'critical' | 'maintenance';
  uptime: number;           // Uptime in seconds
  lastUpdate: string;       // ISO timestamp
  components: {
    turbines: ComponentStatus;
    battery: ComponentStatus;
    inverter: ComponentStatus;
    grid: ComponentStatus;
  };
}

interface ComponentStatus {
  status: 'online' | 'offline' | 'warning';
  health: number;           // Health percentage
  lastMaintenance: string;  // ISO timestamp
  nextMaintenance: string;  // ISO timestamp
}
```

#### Get Device Status
```typescript
// GET /api/devices
interface Device {
  id: string;
  name: string;
  type: 'turbine' | 'battery' | 'inverter' | 'sensor';
  status: 'operational' | 'warning' | 'offline' | 'maintenance';
  location: {
    lat: number;
    lng: number;
    site: string;
  };
  metrics: {
    output?: number;        // For turbines (kW)
    efficiency?: number;    // Percentage
    temperature?: number;   // Celsius
    vibration?: number;     // g-force
    voltage?: number;       // Volts
    current?: number;       // Amperes
  };
  alerts: Alert[];
}
```

### User Management

#### Get Users (Admin Only)
```typescript
// GET /api/users
interface User {
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'customer';
  status: 'active' | 'inactive' | 'suspended';
  createdAt: string;
  lastLogin: string;
  profile: {
    firstName: string;
    lastName: string;
    phone?: string;
    address?: string;
  };
}
```

#### Create User (Admin Only)
```typescript
// POST /api/users
interface CreateUserRequest {
  username: string;
  email: string;
  password: string;
  role: 'admin' | 'customer';
  profile: {
    firstName: string;
    lastName: string;
    phone?: string;
    address?: string;
  };
}
```

### Analytics

#### Get Performance Analytics
```typescript
// GET /api/analytics/performance
interface PerformanceAnalytics {
  period: string;
  totalGeneration: number;
  averageEfficiency: number;
  peakOutput: number;
  downtimeHours: number;
  trends: {
    generation: TrendData[];
    efficiency: TrendData[];
    uptime: TrendData[];
  };
}

interface TrendData {
  date: string;
  value: number;
}
```

#### Get Environmental Impact
```typescript
// GET /api/analytics/environmental
interface EnvironmentalImpact {
  carbonSaved: number;        // Tons of CO2
  treesEquivalent: number;    // Number of trees
  carsOffRoad: number;        // Equivalent cars off road
  cleanEnergyPercent: number; // Percentage of clean energy
  period: string;
}
```

## Real-time Data (WebSocket)

### Connection
```typescript
// WebSocket connection for real-time updates
const ws = new WebSocket('wss://api.riverwatts.com/ws');

ws.onopen = () => {
  // Subscribe to real-time updates
  ws.send(JSON.stringify({
    type: 'subscribe',
    channels: ['energy', 'system', 'alerts']
  }));
};

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  handleRealTimeUpdate(data);
};
```

### Real-time Messages
```typescript
// Energy update message
interface EnergyUpdate {
  type: 'energy_update';
  timestamp: string;
  data: {
    currentOutput: number;
    batteryLevel: number;
    gridStatus: string;
  };
}

// System alert message
interface SystemAlert {
  type: 'system_alert';
  timestamp: string;
  alert: {
    id: string;
    severity: 'info' | 'warning' | 'critical';
    message: string;
    deviceId?: string;
    location?: string;
  };
}
```

## Error Handling

### Error Response Format
```typescript
interface APIError {
  success: false;
  error: {
    code: string;
    message: string;
    details?: any;
  };
  timestamp: string;
}

// Common error codes
const ErrorCodes = {
  UNAUTHORIZED: 'UNAUTHORIZED',
  FORBIDDEN: 'FORBIDDEN',
  NOT_FOUND: 'NOT_FOUND',
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  INTERNAL_ERROR: 'INTERNAL_ERROR',
  RATE_LIMIT: 'RATE_LIMIT'
};
```

### HTTP Status Codes
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `422` - Validation Error
- `429` - Rate Limited
- `500` - Internal Server Error

## Rate Limiting

### Rate Limit Headers
```
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1640995200
```

### Rate Limits by Endpoint
- Authentication: 5 requests per minute
- Data queries: 100 requests per minute
- Real-time subscriptions: 10 connections per user
- File exports: 10 requests per hour

## Data Export API

### Export Energy Data
```typescript
// POST /api/export/energy
interface ExportRequest {
  format: 'csv' | 'excel' | 'pdf';
  period: {
    start: string;    // ISO timestamp
    end: string;      // ISO timestamp
  };
  filters?: {
    devices?: string[];
    metrics?: string[];
  };
  email?: string;     // Email address for delivery
}

interface ExportResponse {
  success: boolean;
  exportId: string;
  downloadUrl?: string;  // Immediate download
  estimatedTime?: number; // Seconds for async exports
}
```

### Get Export Status
```typescript
// GET /api/export/{exportId}/status
interface ExportStatus {
  id: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  progress: number;      // Percentage
  downloadUrl?: string;  // Available when completed
  expiresAt: string;     // ISO timestamp
  error?: string;        // Error message if failed
}
```

## Webhook API

### Webhook Configuration
```typescript
// POST /api/webhooks
interface WebhookConfig {
  url: string;
  events: string[];      // ['alert.created', 'system.offline', etc.]
  secret: string;        // For signature verification
  active: boolean;
}
```

### Webhook Payload
```typescript
interface WebhookPayload {
  id: string;
  event: string;
  timestamp: string;
  data: any;
  signature: string;     // HMAC signature
}
```

## SDK Examples

### JavaScript/TypeScript SDK
```typescript
// RiverWatts API Client
class RiverWattsAPI {
  private baseURL: string;
  private token: string | null = null;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async login(username: string, password: string) {
    const response = await fetch(`${this.baseURL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    
    const data = await response.json();
    if (data.success) {
      this.token = data.token;
    }
    return data;
  }

  async getEnergyMetrics() {
    return this.request('/energy/metrics');
  }

  async getDevices() {
    return this.request('/devices');
  }

  private async request(endpoint: string, options: RequestInit = {}) {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      ...options,
      headers: {
        'Authorization': `Bearer ${this.token}`,
        'Content-Type': 'application/json',
        ...options.headers
      }
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    return response.json();
  }
}

// Usage
const api = new RiverWattsAPI('https://api.riverwatts.com');
await api.login('username', 'password');
const metrics = await api.getEnergyMetrics();
```

### React Hook
```typescript
// Custom hook for API integration
function useEnergyData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await api.getEnergyMetrics();
        setData(response);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30000); // Update every 30s
    return () => clearInterval(interval);
  }, []);

  return { data, loading, error };
}
```

## Testing API Endpoints

### Mock Data for Development
```typescript
// Mock API responses for development
export const mockAPI = {
  '/energy/metrics': {
    currentOutput: 2.4,
    dailyGeneration: 18.7,
    weeklyGeneration: 127.3,
    monthlyGeneration: 542.1,
    efficiency: 94.2,
    batteryLevel: 87
  },
  
  '/devices': [
    {
      id: 'T-001',
      name: 'Turbine Alpha-1',
      type: 'turbine',
      status: 'operational',
      location: { lat: 6.3156, lng: -10.8074, site: 'Alpha' },
      metrics: { output: 2.4, efficiency: 94, temperature: 18.5 }
    }
  ]
};
```

### API Testing with Jest
```typescript
// __tests__/api/energy.test.ts
describe('Energy API', () => {
  it('should return energy metrics', async () => {
    const response = await request(app)
      .get('/api/energy/metrics')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    expect(response.body).toHaveProperty('currentOutput');
    expect(response.body).toHaveProperty('dailyGeneration');
    expect(typeof response.body.currentOutput).toBe('number');
  });

  it('should handle unauthorized requests', async () => {
    await request(app)
      .get('/api/energy/metrics')
      .expect(401);
  });
});
```