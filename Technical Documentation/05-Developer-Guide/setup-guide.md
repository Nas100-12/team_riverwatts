# RiverWatts Developer Guide

## Development Environment Setup

### Prerequisites

#### Required Software
- **Node.js**: 18+ LTS (recommended: 20.x)
- **npm**: 9+ or **yarn**: 1.22+
- **Git**: Latest version
- **VS Code**: Recommended IDE

#### Recommended VS Code Extensions
```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-eslint",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense"
  ]
}
```

### Project Setup

#### 1. Clone Repository
```bash
git clone https://github.com/riverwatts/cloud-dashboard.git
cd cloud-dashboard/riverwatts-dashboard
```

#### 2. Install Dependencies
```bash
# Using npm
npm install

# Using yarn
yarn install
```

#### 3. Environment Configuration
```bash
# Copy environment template
cp .env.example .env.local

# Configure environment variables
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

#### 4. Start Development Server
```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:3000` to see the application.

## Development Workflow

### 1. Code Structure

#### Component Organization
```
src/app/components/
├── ui/                 # Base UI components
│   ├── button.tsx     # Reusable button component
│   ├── card.tsx       # Card component
│   ├── input.tsx      # Form input component
│   └── data-table.tsx # Advanced data table
├── home/              # Landing page components
├── icons/             # Custom icon components
└── layout/            # Layout components
```

#### Page Organization
```
src/app/
├── admin/             # Admin dashboard pages
│   ├── dashboard/     # Main admin dashboard
│   ├── users/         # User management
│   ├── analytics/     # System analytics
│   └── devices/       # Device management
├── customer/          # Customer portal pages
│   ├── energy/        # Energy management
│   ├── battery/       # Battery monitoring
│   └── reports/       # Customer reports
└── (public)/          # Public pages (landing, about, etc.)
```

### 2. Coding Standards

#### TypeScript Guidelines
```typescript
// Use interfaces for object types
interface UserProps {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'customer';
}

// Use proper typing for components
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({ variant = 'primary', size = 'md', children, onClick }: ButtonProps) {
  return (
    <button 
      className={getButtonClasses(variant, size)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
```

#### Component Guidelines
```typescript
// Use functional components with hooks
export function EnergyChart({ data }: { data: ChartData[] }) {
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    // Effect logic here
  }, [data]);
  
  if (isLoading) {
    return <LoadingSpinner />;
  }
  
  return (
    <div className="chart-container">
      {/* Chart implementation */}
    </div>
  );
}

// Use proper error boundaries
export function SafeComponent({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      {children}
    </ErrorBoundary>
  );
}
```

### 3. Styling Guidelines

#### Tailwind CSS Best Practices
```typescript
// Use consistent spacing scale
const spacing = {
  xs: 'p-2',    // 8px
  sm: 'p-3',    // 12px
  md: 'p-4',    // 16px
  lg: 'p-6',    // 24px
  xl: 'p-8'     // 32px
};

// Use design system colors
const colors = {
  primary: 'bg-blue-600 text-white',
  secondary: 'bg-slate-100 text-slate-900',
  success: 'bg-green-600 text-white',
  warning: 'bg-yellow-600 text-white',
  error: 'bg-red-600 text-white'
};

// Create reusable class combinations
const cardStyles = 'rounded-xl border border-slate-200 bg-white/90 backdrop-blur-sm shadow-sm p-6';
```

#### CSS Custom Properties
```css
/* globals.css */
:root {
  --color-primary: #2563eb;
  --color-secondary: #64748b;
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
}
```

## Component Development

### 1. Creating New Components

#### Base Component Template
```typescript
// src/app/components/ui/new-component.tsx
import { cn } from '@/app/lib/utils';
import { forwardRef } from 'react';

interface NewComponentProps {
  variant?: 'default' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
}

export const NewComponent = forwardRef<HTMLDivElement, NewComponentProps>(
  ({ variant = 'default', size = 'md', className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'base-styles',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

NewComponent.displayName = 'NewComponent';
```

#### Component with State
```typescript
export function InteractiveComponent() {
  const [state, setState] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleAction = useCallback(async () => {
    setIsLoading(true);
    try {
      // Async operation
      const result = await performAction();
      setState(result);
    } catch (error) {
      console.error('Action failed:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);
  
  return (
    <div>
      <button onClick={handleAction} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Perform Action'}
      </button>
      {state && <DisplayState data={state} />}
    </div>
  );
}
```

### 2. Chart Components

#### Creating Chart Components
```typescript
// src/app/components/charts/energy-chart.tsx
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface EnergyChartProps {
  data: Array<{
    time: string;
    energy: number;
    target?: number;
  }>;
  height?: number;
}

export function EnergyChart({ data, height = 300 }: EnergyChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis 
          dataKey="time" 
          stroke="#64748b"
          fontSize={12}
        />
        <YAxis 
          stroke="#64748b"
          fontSize={12}
        />
        <Tooltip 
          contentStyle={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}
        />
        <Line 
          type="monotone" 
          dataKey="energy" 
          stroke="#3b82f6" 
          strokeWidth={2}
          dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
          activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2 }}
        />
        {data[0]?.target && (
          <Line 
            type="monotone" 
            dataKey="target" 
            stroke="#ef4444" 
            strokeWidth={2}
            strokeDasharray="5 5"
          />
        )}
      </LineChart>
    </ResponsiveContainer>
  );
}
```

## Testing Guidelines

### 1. Unit Testing Setup

#### Jest Configuration
```javascript
// jest.config.js
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
```

#### Component Testing
```typescript
// __tests__/components/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '@/app/components/ui/button';

describe('Button Component', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
  
  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  
  it('applies correct variant classes', () => {
    render(<Button variant="outline">Outline Button</Button>);
    const button = screen.getByText('Outline Button');
    expect(button).toHaveClass('border');
  });
});
```

### 2. Integration Testing

#### Page Testing
```typescript
// __tests__/pages/dashboard.test.tsx
import { render, screen } from '@testing-library/react';
import { AuthProvider } from '@/app/context/AuthContext';
import Dashboard from '@/app/admin/dashboard/page';

const renderWithAuth = (component: React.ReactElement) => {
  return render(
    <AuthProvider>
      {component}
    </AuthProvider>
  );
};

describe('Dashboard Page', () => {
  it('displays system overview', () => {
    renderWithAuth(<Dashboard />);
    expect(screen.getByText('System Overview')).toBeInTheDocument();
  });
  
  it('shows energy metrics', () => {
    renderWithAuth(<Dashboard />);
    expect(screen.getByText('Current Output')).toBeInTheDocument();
  });
});
```

## Performance Optimization

### 1. Code Splitting

#### Dynamic Imports
```typescript
// Lazy load heavy components
const HeavyChart = lazy(() => import('./components/HeavyChart'));
const AdminPanel = lazy(() => import('./admin/AdminPanel'));

// Use with Suspense
function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/charts" element={<HeavyChart />} />
      </Routes>
    </Suspense>
  );
}
```

#### Route-based Splitting
```typescript
// next.config.ts
const nextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react', 'recharts']
  }
};
```

### 2. Memoization

#### Component Memoization
```typescript
// Memoize expensive components
const ExpensiveChart = memo(({ data }: { data: ChartData[] }) => {
  const processedData = useMemo(() => {
    return data.map(item => ({
      ...item,
      formatted: formatValue(item.value)
    }));
  }, [data]);
  
  return <Chart data={processedData} />;
});

// Memoize callback functions
const MemoizedComponent = () => {
  const [count, setCount] = useState(0);
  
  const handleIncrement = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);
  
  return <Button onClick={handleIncrement}>Count: {count}</Button>;
};
```

## Debugging

### 1. Development Tools

#### React Developer Tools
```typescript
// Add display names for better debugging
const MyComponent = () => {
  return <div>Content</div>;
};
MyComponent.displayName = 'MyComponent';

// Use React DevTools Profiler
import { Profiler } from 'react';

function onRenderCallback(id: string, phase: string, actualDuration: number) {
  console.log('Component render:', { id, phase, actualDuration });
}

<Profiler id="App" onRender={onRenderCallback}>
  <App />
</Profiler>
```

#### Console Debugging
```typescript
// Structured logging
const logger = {
  info: (message: string, data?: any) => {
    console.log(`[INFO] ${message}`, data);
  },
  error: (message: string, error?: Error) => {
    console.error(`[ERROR] ${message}`, error);
  },
  debug: (message: string, data?: any) => {
    if (process.env.NODE_ENV === 'development') {
      console.debug(`[DEBUG] ${message}`, data);
    }
  }
};
```

### 2. Error Handling

#### Error Boundaries
```typescript
// Global error boundary
class GlobalErrorBoundary extends Component {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }
  
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Global error:', error, errorInfo);
    // Send to error reporting service
  }
  
  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} />;
    }
    return this.props.children;
  }
}
```

## Build and Deployment

### 1. Build Process

#### Production Build
```bash
# Build for production
npm run build

# Analyze bundle size
npm run analyze

# Test production build locally
npm run start
```

#### Build Optimization
```typescript
// next.config.ts
const nextConfig = {
  output: 'standalone',
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  
  webpack: (config: any) => {
    config.optimization.splitChunks = {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    };
    return config;
  }
};
```

### 2. Deployment

#### Vercel Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

#### Environment Variables
```bash
# Set production environment variables
vercel env add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
vercel env add DATABASE_URL
vercel env add JWT_SECRET
```

## Contributing Guidelines

### 1. Git Workflow

#### Branch Naming
```bash
# Feature branches
git checkout -b feature/user-management
git checkout -b feature/energy-charts

# Bug fixes
git checkout -b fix/chart-rendering
git checkout -b fix/authentication-issue

# Hotfixes
git checkout -b hotfix/security-patch
```

#### Commit Messages
```bash
# Use conventional commits
git commit -m "feat: add user management dashboard"
git commit -m "fix: resolve chart rendering issue"
git commit -m "docs: update API documentation"
git commit -m "style: improve button component styling"
```

### 2. Code Review Process

#### Pull Request Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing completed

## Screenshots
[Add screenshots if applicable]

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
```