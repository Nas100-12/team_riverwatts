# Technical Implementation Guide

## Project Structure

```
riverwatts-dashboard/
├── src/
│   └── app/
│       ├── components/          # Reusable UI components
│       │   ├── ui/             # Base UI components
│       │   ├── home/           # Landing page components
│       │   └── icons/          # Custom icon components
│       ├── admin/              # Admin dashboard pages
│       ├── customer/           # Customer portal pages
│       ├── context/            # React context providers
│       ├── lib/                # Utility functions
│       ├── globals.css         # Global styles
│       └── layout.tsx          # Root layout
├── public/                     # Static assets
├── package.json               # Dependencies
└── tailwind.config.js         # Tailwind configuration
```

## Core Technologies Implementation

### 1. Next.js Configuration

#### next.config.ts
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react', 'recharts']
  },
  images: {
    domains: ['images.unsplash.com']
  }
};

export default nextConfig;
```

#### Key Features Used
- **App Router**: Modern routing system
- **Server Components**: Performance optimization
- **Static Generation**: Fast page loads
- **Image Optimization**: Automatic image processing

### 2. TypeScript Implementation

#### Type Definitions
```typescript
// User types
interface User {
  id: string;
  username: string;
  role: 'admin' | 'customer';
  email?: string;
}

// Chart data types
interface ChartDataPoint {
  time: string;
  value: number;
  [key: string]: any;
}

// Component props
interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}
```

### 3. Tailwind CSS Design System

#### tailwind.config.js
```javascript
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af'
        }
      },
      animation: {
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.3s ease-in'
      }
    }
  }
};
```

## Component Architecture

### 1. Base UI Components

#### Button Component
```typescript
// src/app/components/ui/button.tsx
interface ButtonProps {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({ variant = 'default', size = 'md', ...props }: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium';
  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-slate-300 bg-transparent hover:bg-slate-50',
    ghost: 'bg-transparent hover:bg-slate-100'
  };
  
  return (
    <button 
      className={cn(baseClasses, variants[variant], sizeClasses[size])}
      {...props}
    />
  );
}
```

#### Card Component
```typescript
// src/app/components/ui/card.tsx
export function Card({ children, className, ...props }: CardProps) {
  return (
    <div 
      className={cn(
        'rounded-xl border border-slate-200 bg-white/90 backdrop-blur-sm shadow-sm',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
```

### 2. Layout Components

#### Navigation System
```typescript
// src/app/components/Navigation.tsx
export function Navigation() {
  const { user, logout } = useAuth();
  
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <NavigationLinks />
          <UserMenu user={user} onLogout={logout} />
        </div>
      </div>
    </nav>
  );
}
```

#### Sidebar Implementation
```typescript
// src/app/components/Sidebar.tsx
export function Sidebar() {
  const pathname = usePathname();
  
  return (
    <aside className="fixed left-0 top-16 h-full w-64 bg-white/95 border-r">
      <nav className="p-4">
        {menuItems.map((item) => (
          <SidebarItem 
            key={item.href}
            {...item}
            isActive={pathname === item.href}
          />
        ))}
      </nav>
    </aside>
  );
}
```

## State Management

### 1. Authentication Context

```typescript
// src/app/context/AuthContext.tsx
interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const login = async (username: string, password: string) => {
    // Authentication logic
    if (username === 'admin' && password === 'admin123') {
      setUser({ id: '1', username: 'admin', role: 'admin' });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
```

### 2. Data Management

#### Chart Data Handling
```typescript
// Chart data processing
const processChartData = (rawData: any[]) => {
  return rawData.map(item => ({
    time: formatTime(item.timestamp),
    value: parseFloat(item.value),
    formatted: formatValue(item.value)
  }));
};

// Real-time data simulation
const useRealTimeData = (interval: number = 5000) => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setData(prev => [...prev, generateDataPoint()]);
    }, interval);
    
    return () => clearInterval(timer);
  }, [interval]);
  
  return data;
};
```

## Chart Implementation

### 1. Recharts Integration

```typescript
// Energy chart component
export function EnergyChart({ data }: { data: ChartDataPoint[] }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="time" stroke="#64748b" />
        <YAxis stroke="#64748b" />
        <Tooltip 
          contentStyle={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            border: '1px solid #e2e8f0',
            borderRadius: '8px'
          }}
        />
        <Line 
          type="monotone" 
          dataKey="value" 
          stroke="#3b82f6" 
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
```

### 2. Interactive Features

```typescript
// Chart with hover interactions
const [activePoint, setActivePoint] = useState(null);

const handleChartHover = (data: any) => {
  setActivePoint(data?.activePayload?.[0]?.payload);
};

return (
  <LineChart onMouseMove={handleChartHover}>
    {/* Chart configuration */}
  </LineChart>
);
```

## Data Export Implementation

### 1. CSV Export

```typescript
// src/app/components/ui/data-table.tsx
const exportToCSV = (data: any[], filename: string) => {
  const headers = Object.keys(data[0]).join(',');
  const rows = data.map(row => Object.values(row).join(','));
  const csvContent = [headers, ...rows].join('\n');
  
  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${filename}.csv`;
  link.click();
  URL.revokeObjectURL(url);
};
```

### 2. Excel Export

```typescript
const exportToExcel = (data: any[], filename: string) => {
  const csvContent = convertToCSV(data);
  const blob = new Blob([csvContent], { 
    type: 'application/vnd.ms-excel' 
  });
  downloadFile(blob, `${filename}.xls`);
};
```

## Google Maps Integration

### 1. Map Component

```typescript
// src/app/components/GoogleMap.tsx
export function GoogleMap({ sites, selectedSite, onSiteSelect }: MapProps) {
  useEffect(() => {
    const initMap = () => {
      const map = new google.maps.Map(mapElement, {
        zoom: 7,
        center: { lat: 6.4281, lng: -9.4295 },
        mapTypeId: 'roadmap'
      });

      sites.forEach(site => {
        const marker = new google.maps.Marker({
          position: site.coordinates,
          map: map,
          title: site.name,
          icon: getMarkerIcon(site.status)
        });

        marker.addListener('click', () => onSiteSelect(site.id));
      });
    };

    if (window.google) {
      initMap();
    } else {
      loadGoogleMapsScript(initMap);
    }
  }, [sites, selectedSite]);

  return <div id="map" className="w-full h-full" />;
}
```

## Performance Optimization

### 1. Code Splitting

```typescript
// Lazy loading components
const AdminDashboard = lazy(() => import('./admin/dashboard/page'));
const CustomerPortal = lazy(() => import('./customer/page'));

// Route-based splitting
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      {children}
    </Suspense>
  );
}
```

### 2. Image Optimization

```typescript
// Next.js Image component
import Image from 'next/image';

export function HeroImage() {
  return (
    <Image
      src="/hero-image.jpg"
      alt="Hydrokinetic turbines"
      width={800}
      height={600}
      priority
      className="rounded-lg"
    />
  );
}
```

## Error Handling

### 1. Error Boundaries

```typescript
// Error boundary component
export class ErrorBoundary extends Component {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}
```

### 2. API Error Handling

```typescript
// Async error handling
const fetchData = async () => {
  try {
    setLoading(true);
    const response = await fetch('/api/data');
    if (!response.ok) throw new Error('Failed to fetch');
    const data = await response.json();
    setData(data);
  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
};
```