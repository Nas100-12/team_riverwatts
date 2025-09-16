# RiverWatts Cloud Dashboard

A modern web application for monitoring and managing hydrokinetic power generation systems across Liberia.

## Overview

RiverWatts provides real-time monitoring, analytics, and control capabilities for renewable energy infrastructure, specifically focusing on hydrokinetic turbines that generate clean energy from flowing water.

## Features

- **Real-time System Monitoring** - Live dashboard with system health metrics
- **Geographic Visualization** - Interactive maps showing turbine locations
- **Performance Analytics** - Energy generation charts and efficiency tracking
- **Alert Management** - Automated notifications for system issues
- **User Management** - Role-based access for administrators and customers
- **Responsive Design** - Works on desktop, tablet, and mobile devices

## Technology Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Maps**: Google Maps API
- **Charts**: Recharts
- **UI Components**: Radix UI, Lucide Icons

## Project Structure

```
Cloud Dashboard/
└── riverwatts-dashboard/     # Main Next.js application
    ├── src/
    │   └── app/
    │       ├── admin/        # Admin dashboard pages
    │       ├── customer/     # Customer portal pages
    │       ├── components/   # Reusable UI components
    │       └── lib/          # Utility functions
    ├── public/              # Static assets
    └── package.json         # Dependencies
```

## Getting Started

1. **Navigate to project directory**
   ```bash
   cd riverwatts-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env.local file with:
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open application**
   - Navigate to `http://localhost:3000`
   - Login credentials:
     - Admin: `admin` / `admin123`
     - Customer: `customer` / `customer123`

## Key Pages

- **Homepage** - Public landing page with company information
- **Admin Dashboard** - System overview, analytics, and management tools
- **Customer Portal** - Energy monitoring and usage analytics
- **Geographic View** - Interactive map of turbine locations
- **Reports** - Detailed performance and maintenance reports

## Development

- **Framework**: Next.js with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS for responsive design
- **State Management**: React Context API
- **Authentication**: Custom auth system with role-based access

## Deployment

The application is optimized for deployment on modern hosting platforms like Vercel, Netlify, or AWS.

## License

© 2024 RiverWatts Energy Systems. All rights reserved.