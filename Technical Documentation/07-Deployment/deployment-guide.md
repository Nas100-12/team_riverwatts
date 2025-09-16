# Deployment Guide

## Deployment Overview

### Supported Platforms
- **Vercel** (Recommended)
- **Netlify**
- **AWS Amplify**
- **Docker/Self-hosted**

### Prerequisites
- Node.js 18+ LTS
- Git repository access
- Environment variables configured
- Domain name (optional)

## Vercel Deployment (Recommended)

### 1. Quick Deploy

#### Using Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
cd riverwatts-dashboard
vercel

# Deploy to production
vercel --prod
```

#### Using Git Integration
1. Connect GitHub repository to Vercel
2. Import project: `https://vercel.com/new`
3. Configure build settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`

### 2. Environment Configuration

#### Production Environment Variables
```bash
# Set via Vercel CLI
vercel env add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY production
vercel env add NEXT_PUBLIC_APP_URL production
vercel env add DATABASE_URL production
vercel env add JWT_SECRET production

# Or via Vercel Dashboard
# Project Settings > Environment Variables
```

#### Environment Variables List
```env
# Public variables (accessible in browser)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
NEXT_PUBLIC_APP_URL=https://riverwatts.com
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id

# Private variables (server-side only)
DATABASE_URL=postgresql://user:pass@host:port/db
JWT_SECRET=your_jwt_secret_key
EMAIL_API_KEY=your_email_service_key
WEBHOOK_SECRET=your_webhook_secret
```

### 3. Custom Domain Setup

#### Add Custom Domain
```bash
# Via CLI
vercel domains add riverwatts.com

# Configure DNS
# Add CNAME record: www -> cname.vercel-dns.com
# Add A record: @ -> 76.76.19.61
```

#### SSL Configuration
- Automatic SSL certificates via Let's Encrypt
- Custom SSL certificates supported
- HTTPS redirect enabled by default

## Netlify Deployment

### 1. Build Configuration

#### netlify.toml
```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[context.production.environment]
  NODE_ENV = "production"

[context.deploy-preview.environment]
  NODE_ENV = "development"
```

### 2. Deploy Process
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy from project directory
netlify deploy

# Deploy to production
netlify deploy --prod
```

## AWS Amplify Deployment

### 1. Amplify Configuration

#### amplify.yml
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
      - .next/cache/**/*
```

### 2. Environment Setup
```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Configure Amplify
amplify configure

# Initialize project
amplify init

# Add hosting
amplify add hosting

# Deploy
amplify publish
```

## Docker Deployment

### 1. Dockerfile

#### Multi-stage Dockerfile
```dockerfile
# Build stage
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine AS runner

WORKDIR /app

# Create non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy built application
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT 3000
ENV NODE_ENV production

CMD ["node", "server.js"]
```

#### Docker Compose
```yaml
# docker-compose.yml
version: '3.8'

services:
  riverwatts-app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=${GOOGLE_MAPS_API_KEY}
      - DATABASE_URL=${DATABASE_URL}
    restart: unless-stopped
    
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/nginx/ssl
    depends_on:
      - riverwatts-app
    restart: unless-stopped
```

### 2. Build and Deploy
```bash
# Build Docker image
docker build -t riverwatts-dashboard .

# Run container
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key \
  riverwatts-dashboard

# Using Docker Compose
docker-compose up -d
```

## Self-Hosted Deployment

### 1. Server Setup

#### System Requirements
- **OS**: Ubuntu 20.04+ / CentOS 8+ / Debian 11+
- **RAM**: 2GB minimum, 4GB recommended
- **Storage**: 20GB minimum
- **CPU**: 2 cores minimum

#### Install Dependencies
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 for process management
sudo npm install -g pm2

# Install Nginx
sudo apt install nginx -y
```

### 2. Application Setup

#### Deploy Application
```bash
# Clone repository
git clone https://github.com/riverwatts/cloud-dashboard.git
cd cloud-dashboard/riverwatts-dashboard

# Install dependencies
npm ci --only=production

# Build application
npm run build

# Start with PM2
pm2 start npm --name "riverwatts" -- start
pm2 save
pm2 startup
```

#### Nginx Configuration
```nginx
# /etc/nginx/sites-available/riverwatts
server {
    listen 80;
    server_name riverwatts.com www.riverwatts.com;
    
    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name riverwatts.com www.riverwatts.com;
    
    # SSL Configuration
    ssl_certificate /etc/letsencrypt/live/riverwatts.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/riverwatts.com/privkey.pem;
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
    
    # Static files caching
    location /_next/static/ {
        proxy_pass http://localhost:3000;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
}
```

#### Enable Site
```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/riverwatts /etc/nginx/sites-enabled/

# Test configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

### 3. SSL Certificate Setup

#### Using Let's Encrypt
```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Obtain SSL certificate
sudo certbot --nginx -d riverwatts.com -d www.riverwatts.com

# Auto-renewal
sudo crontab -e
# Add: 0 12 * * * /usr/bin/certbot renew --quiet
```

## CI/CD Pipeline

### 1. GitHub Actions

#### .github/workflows/deploy.yml
```yaml
name: Deploy to Production

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run tests
        run: npm test
        
      - name: Build application
        run: npm run build
        
  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

### 2. Automated Testing

#### Pre-deployment Tests
```bash
# Run all tests before deployment
npm run test:unit
npm run test:integration
npm run test:e2e
npm run lint
npm run type-check
npm run build
```

#### Health Check Script
```bash
#!/bin/bash
# health-check.sh

URL="https://riverwatts.com"
EXPECTED_STATUS=200

echo "Checking application health..."

# Check main page
STATUS=$(curl -s -o /dev/null -w "%{http_code}" $URL)
if [ $STATUS -eq $EXPECTED_STATUS ]; then
    echo "✅ Main page is healthy (Status: $STATUS)"
else
    echo "❌ Main page failed (Status: $STATUS)"
    exit 1
fi

# Check API endpoints
API_STATUS=$(curl -s -o /dev/null -w "%{http_code}" $URL/api/health)
if [ $API_STATUS -eq $EXPECTED_STATUS ]; then
    echo "✅ API is healthy (Status: $API_STATUS)"
else
    echo "❌ API failed (Status: $API_STATUS)"
    exit 1
fi

echo "🎉 All health checks passed!"
```

## Monitoring and Logging

### 1. Application Monitoring

#### Vercel Analytics
```typescript
// Enable Vercel Analytics
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

#### Custom Monitoring
```typescript
// Performance monitoring
const trackPerformance = (name: string, duration: number) => {
  // Send to analytics service
  if (typeof window !== 'undefined') {
    gtag('event', 'timing_complete', {
      name: name,
      value: Math.round(duration)
    });
  }
};

// Error tracking
const trackError = (error: Error, context?: string) => {
  console.error('Application Error:', error);
  
  // Send to error tracking service
  if (typeof window !== 'undefined') {
    gtag('event', 'exception', {
      description: error.message,
      fatal: false,
      context: context
    });
  }
};
```

### 2. Log Management

#### Structured Logging
```typescript
// Logger utility
export const logger = {
  info: (message: string, meta?: any) => {
    console.log(JSON.stringify({
      level: 'info',
      message,
      meta,
      timestamp: new Date().toISOString()
    }));
  },
  
  error: (message: string, error?: Error, meta?: any) => {
    console.error(JSON.stringify({
      level: 'error',
      message,
      error: error?.message,
      stack: error?.stack,
      meta,
      timestamp: new Date().toISOString()
    }));
  }
};
```

## Backup and Recovery

### 1. Backup Strategy

#### Automated Backups
```bash
#!/bin/bash
# backup.sh

BACKUP_DIR="/backups/riverwatts"
DATE=$(date +%Y%m%d_%H%M%S)

# Create backup directory
mkdir -p $BACKUP_DIR/$DATE

# Backup application files
tar -czf $BACKUP_DIR/$DATE/app.tar.gz /var/www/riverwatts

# Backup database (when implemented)
# pg_dump riverwatts > $BACKUP_DIR/$DATE/database.sql

# Backup environment files
cp /var/www/riverwatts/.env.local $BACKUP_DIR/$DATE/

# Clean old backups (keep last 30 days)
find $BACKUP_DIR -type d -mtime +30 -exec rm -rf {} \;

echo "Backup completed: $BACKUP_DIR/$DATE"
```

### 2. Disaster Recovery

#### Recovery Procedures
```bash
# 1. Stop application
pm2 stop riverwatts

# 2. Restore from backup
cd /var/www
rm -rf riverwatts
tar -xzf /backups/riverwatts/latest/app.tar.gz

# 3. Restore environment
cp /backups/riverwatts/latest/.env.local /var/www/riverwatts/

# 4. Install dependencies and rebuild
cd riverwatts
npm ci
npm run build

# 5. Restart application
pm2 start riverwatts
pm2 save
```

## Security Considerations

### 1. Production Security

#### Security Headers
```typescript
// next.config.ts
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ]
      }
    ];
  }
};
```

#### Environment Security
```bash
# Secure environment file permissions
chmod 600 .env.local
chown www-data:www-data .env.local

# Firewall configuration
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
```

### 2. Access Control

#### Server Access
- Use SSH keys instead of passwords
- Disable root login
- Use fail2ban for intrusion prevention
- Regular security updates

#### Application Access
- Strong password policies
- Rate limiting on authentication
- Session timeout configuration
- Audit logging for admin actions