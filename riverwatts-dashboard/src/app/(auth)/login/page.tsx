'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Alert, AlertDescription } from "@/app/components/ui/alert";
import { useAuth } from '@/app/context/AuthContext';
import { Eye, EyeOff, ArrowLeft, AlertCircle, Zap, Battery, Cpu } from 'lucide-react';
import Link from 'next/link';

const DEMO_CREDENTIALS = {
  'admin': { password: 'admin123', role: 'admin' as const, redirect: '/admin/dashboard' },
  'customer': { password: 'customer123', role: 'customer' as const, redirect: '/customer' }
};

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({ username: '', password: '', general: '' });
  const { login } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const savedUsername = localStorage.getItem('rememberedUsername');
    const shouldRemember = localStorage.getItem('rememberMe') === 'true';
    
    if (savedUsername && shouldRemember) {
      setUsername(savedUsername);
      setRememberMe(true);
    }
  }, []);

  const sanitizeInput = (input: string) => {
    return input.trim().replace(/[<>"'&]/g, '');
  };

  const validateForm = () => {
    const newErrors = { username: '', password: '', general: '' };
    const cleanUsername = sanitizeInput(username);
    
    if (!cleanUsername) {
      newErrors.username = 'Username is required';
    } else if (cleanUsername.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    } else if (!/^[a-zA-Z0-9_]+$/.test(cleanUsername)) {
      newErrors.username = 'Username can only contain letters, numbers, and underscores';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return !newErrors.username && !newErrors.password;
  };

  const handleRememberMe = (username: string) => {
    if (rememberMe) {
      localStorage.setItem('rememberedUsername', username);
      localStorage.setItem('rememberMe', 'true');
    } else {
      localStorage.removeItem('rememberedUsername');
      localStorage.removeItem('rememberMe');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    setErrors({ username: '', password: '', general: '' });
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const cleanUsername = sanitizeInput(username);
      const user = DEMO_CREDENTIALS[cleanUsername as keyof typeof DEMO_CREDENTIALS];
      
      if (user && user.password === password) {
        handleRememberMe(cleanUsername);
        login(user.role);
        await router.push(user.redirect);
      } else {
        setErrors({ username: '', password: '', general: 'Invalid username or password' });
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrors({ username: '', password: '', general: 'An error occurred during login. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // Removed min-h-screen and relative classes to avoid conflicts with global styles
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      {/* Back to Homepage Button */}
      <div className="absolute top-4 left-4 z-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-3 py-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-lg text-slate-700 hover:bg-white transition-all duration-200 group shadow-sm">
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Homepage</span>
        </Link>
      </div>
      {/* Floating Electrical Components */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Lightning bolts */}
        <div className="absolute top-16 left-8 animate-pulse" style={{animationDelay: '0s', animationDuration: '2s'}}>
          <Zap className="h-6 w-6 text-yellow-400/50 drop-shadow-lg animate-spin" style={{animationDuration: '8s'}} />
        </div>
        <div className="absolute top-32 right-12 animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}>
          <Zap className="h-5 w-5 text-blue-400/60 drop-shadow-md" />
        </div>
        <div className="absolute bottom-40 left-20 animate-pulse" style={{animationDelay: '2.5s', animationDuration: '1.8s'}}>
          <Zap className="h-7 w-7 text-purple-400/45 drop-shadow-lg animate-ping" style={{animationDuration: '4s'}} />
        </div>
        <div className="absolute top-72 left-1/4 animate-bounce" style={{animationDelay: '0.8s', animationDuration: '2.5s'}}>
          <Zap className="h-4 w-4 text-cyan-400/55" />
        </div>
        <div className="absolute bottom-60 right-1/4 animate-pulse" style={{animationDelay: '3s', animationDuration: '2.2s'}}>
          <Zap className="h-6 w-6 text-green-400/50 animate-spin" style={{animationDuration: '12s'}} />
        </div>
        
        {/* Batteries */}
        <div className="absolute top-48 right-16 animate-bounce" style={{animationDelay: '1.2s', animationDuration: '3.5s'}}>
          <Battery className="h-8 w-8 text-green-400/45 drop-shadow-lg" />
        </div>
        <div className="absolute bottom-28 left-12 animate-pulse" style={{animationDelay: '2s', animationDuration: '2.8s'}}>
          <Battery className="h-6 w-6 text-blue-400/50 animate-ping" style={{animationDuration: '5s'}} />
        </div>
        <div className="absolute top-80 right-1/3 animate-bounce" style={{animationDelay: '0.3s', animationDuration: '4s'}}>
          <Battery className="h-7 w-7 text-emerald-400/40 drop-shadow-md" />
        </div>
        <div className="absolute bottom-16 right-8 animate-pulse" style={{animationDelay: '1.8s', animationDuration: '2.3s'}}>
          <Battery className="h-5 w-5 text-teal-400/55" />
        </div>
        <div className="absolute top-24 left-1/3 animate-bounce" style={{animationDelay: '2.7s', animationDuration: '3.2s'}}>
          <Battery className="h-6 w-6 text-lime-400/45 animate-spin" style={{animationDuration: '15s'}} />
        </div>
        
        {/* CPUs/Processors */}
        <div className="absolute bottom-44 left-8 animate-pulse" style={{animationDelay: '1.5s', animationDuration: '2.5s'}}>
          <Cpu className="h-7 w-7 text-purple-400/50 drop-shadow-lg animate-spin" style={{animationDuration: '10s'}} />
        </div>
        <div className="absolute top-56 right-20 animate-bounce" style={{animationDelay: '0.7s', animationDuration: '3.8s'}}>
          <Cpu className="h-6 w-6 text-indigo-400/45 drop-shadow-md" />
        </div>
        <div className="absolute bottom-52 right-12 animate-pulse" style={{animationDelay: '2.3s', animationDuration: '2.1s'}}>
          <Cpu className="h-8 w-8 text-violet-400/40 animate-ping" style={{animationDuration: '6s'}} />
        </div>
        <div className="absolute top-40 left-16 animate-bounce" style={{animationDelay: '3.2s', animationDuration: '2.9s'}}>
          <Cpu className="h-5 w-5 text-blue-500/50" />
        </div>
        <div className="absolute bottom-36 left-1/3 animate-pulse" style={{animationDelay: '0.9s', animationDuration: '2.6s'}}>
          <Cpu className="h-6 w-6 text-pink-400/45 drop-shadow-lg animate-spin" style={{animationDuration: '14s'}} />
        </div>
        
        {/* Additional scattered elements */}
        <div className="absolute top-64 left-6 animate-bounce" style={{animationDelay: '1.7s', animationDuration: '3.3s'}}>
          <Zap className="h-4 w-4 text-orange-400/50" />
        </div>
        <div className="absolute bottom-24 left-1/4 animate-pulse" style={{animationDelay: '2.9s', animationDuration: '1.9s'}}>
          <Battery className="h-5 w-5 text-cyan-500/45 animate-ping" style={{animationDuration: '7s'}} />
        </div>
        <div className="absolute top-88 right-6 animate-bounce" style={{animationDelay: '0.4s', animationDuration: '3.6s'}}>
          <Cpu className="h-6 w-6 text-rose-400/40 drop-shadow-md" />
        </div>
        <div className="absolute bottom-64 right-1/3 animate-pulse" style={{animationDelay: '1.3s', animationDuration: '2.4s'}}>
          <Zap className="h-5 w-5 text-amber-400/55 animate-spin" style={{animationDuration: '9s'}} />
        </div>
        <div className="absolute top-20 right-1/4 animate-bounce" style={{animationDelay: '2.1s', animationDuration: '3.1s'}}>
          <Battery className="h-7 w-7 text-sky-400/45 drop-shadow-lg" />
        </div>
      </div>
      {/* Main Content */}
      <div className="flex items-center justify-center p-4" style={{ minHeight: '100vh' }}>
        <div className="w-full max-w-sm mx-auto relative z-10">
          <Card className="bg-white/90 backdrop-blur-sm border border-slate-200 shadow-xl rounded-2xl">
            <CardHeader className="text-center pb-4 pt-6 px-6">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg">
                  <Zap className="h-6 w-6 text-white" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-slate-800 mb-1">RiverWatts</CardTitle>
              <p className="text-slate-600 text-sm">Clean Energy Dashboard</p>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                {errors.general && (
                  <Alert variant="destructive" className="py-2">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription className="text-sm">{errors.general}</AlertDescription>
                  </Alert>
                )}
                
                <div className="space-y-1">
                  <Label htmlFor="username" className="text-sm font-medium text-slate-700">Username</Label>
                  <Input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className={`h-10 border rounded-lg transition-colors ${errors.username ? 'border-red-300 focus:border-red-500' : 'border-slate-300 focus:border-blue-500'}`}
                    placeholder="Enter username"
                    aria-describedby={errors.username ? 'username-error' : undefined}
                    aria-invalid={!!errors.username}
                    autoComplete="username"
                  />
                  {errors.username && <p id="username-error" className="text-xs text-red-600" role="alert">{errors.username}</p>}
                </div>
                
                <div className="space-y-1">
                  <Label htmlFor="password" className="text-sm font-medium text-slate-700">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={`h-10 pr-10 border rounded-lg transition-colors ${errors.password ? 'border-red-300 focus:border-red-500' : 'border-slate-300 focus:border-blue-500'}`}
                      placeholder="Enter password"
                      aria-describedby={errors.password ? 'password-error' : undefined}
                      aria-invalid={!!errors.password}
                      autoComplete="current-password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-500 hover:text-slate-700"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  {errors.password && <p id="password-error" className="text-xs text-red-600" role="alert">{errors.password}</p>}
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-slate-600">Remember me</span>
                  </label>
                  <Link href="/contact" className="text-blue-600 hover:text-blue-700 hover:underline">
                    Forgot password?
                  </Link>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full h-10 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-lg transition-all duration-200" 
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Signing in...
                    </div>
                  ) : (
                    'Sign In'
                  )}
                </Button>
              </form>
              
              <div className="text-center mt-4">
                <p className="text-sm text-slate-600">
                  Need an account?{' '}
                  <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium hover:underline">
                    Contact us
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}