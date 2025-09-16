'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home,
  Zap,
  BarChart3,
  Users,
  FileText,
  Settings,
  LogOut,
  Battery,
  User,
  MapPin,
  Wrench,
  AlertTriangle,
  TrendingUp,
  Database,
  Shield,
  Globe,
  Activity,
  Calendar,
  HelpCircle,
  MessageSquare,
  Leaf,
  CreditCard
} from 'lucide-react';
import { useAuth } from '@/app/context/AuthContext';

interface SidebarProps {}

export default function Sidebar({}: SidebarProps) {
  const pathname = usePathname();
  const { userRole } = useAuth();

  // Function to check if a nav item should be marked as active
  const isActive = (href: string) => {
    // Special case for home page - only active when pathname is exactly '/'
    if (href === '/') {
      return pathname === '/';
    }
    
    // Special handling for customer dashboard - should ONLY be active for /customer, not subpages
    if (href === '/customer') {
      return pathname === '/customer' || pathname === '/customer/';
    }
    
    // Special handling for admin dashboard - should ONLY be active for /admin/dashboard, not subpages
    if (href === '/admin/dashboard') {
      return pathname === '/admin/dashboard' || pathname === '/admin/dashboard/';
    }
    
    // For exact matches - this handles all other routes correctly
    if (pathname === href) {
      return true;
    }
    
    // For other routes, check if the current path starts with the href + '/'
    // This ensures that /admin/analytics/subpage matches /admin/analytics but not /
    if (href !== '/' && pathname.startsWith(href + '/')) {
      return true;
    }
    
    return false;
  };

  const adminNavItems = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: Home },
    { name: 'Device Management', href: '/admin/devices', icon: Zap },
    { name: 'Geographic View', href: '/admin/map', icon: MapPin },
    { name: 'Maintenance', href: '/admin/maintenance', icon: Wrench },
    { name: 'Alerts & Monitoring', href: '/admin/alerts', icon: AlertTriangle },
    { name: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
    { name: 'Performance Metrics', href: '/admin/performance', icon: TrendingUp },
    { name: 'Data Management', href: '/admin/data', icon: Database },
    { name: 'User Management', href: '/admin/users', icon: Users },
    { name: 'System Security', href: '/admin/security', icon: Shield },
    { name: 'Reports', href: '/admin/reports', icon: FileText },
    { name: 'System Settings', href: '/admin/settings', icon: Settings },
  ];

  const customerNavItems = [
    { name: 'Dashboard', href: '/customer', icon: Home },
    { name: 'Energy Production', href: '/customer/energy', icon: Zap },
    { name: 'Battery Status', href: '/customer/battery', icon: Battery },
    { name: 'System Status', href: '/customer/status', icon: Activity },
    { name: 'Environmental Impact', href: '/customer/impact', icon: Leaf },
    { name: 'Usage Analytics', href: '/customer/analytics', icon: BarChart3 },
    { name: 'Recharge', href: '/customer/recharge', icon: CreditCard },
    { name: 'Service Requests', href: '/customer/service', icon: Calendar },
    { name: 'Reports', href: '/customer/reports', icon: FileText },
    { name: 'Help & Support', href: '/customer/help', icon: HelpCircle },
    { name: 'Settings', href: '/customer/settings', icon: Settings },
  ];

  const currentNavItems = userRole === 'admin' ? adminNavItems : customerNavItems;

  return (
    <div className="w-64 fixed left-0 top-0 bottom-0 glass-card border-r border-white/20 flex flex-col backdrop-blur-xl">
      {/* Logo */}
      <div className="p-3 border-b border-white/10">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-800 to-blue-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">RiverWatts</span>
        </Link>
      </div>
      {/* Navigation */}
      <nav className="flex-1 px-4 py-3 overflow-y-auto" style={{
        scrollbarWidth: 'thin',
        scrollbarColor: '#cbd5e1 transparent'
      }}>
        <style jsx>{`
          nav::-webkit-scrollbar {
            width: 6px;
          }
          nav::-webkit-scrollbar-track {
            background: transparent;
          }
          nav::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, #cbd5e1, #94a3b8);
            border-radius: 3px;
          }
          nav::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(to bottom, #94a3b8, #64748b);
          }
        `}</style>
        <div className="mb-2">
          <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 mb-1">
            {userRole === 'admin' ? 'Admin Panel' : 'Dashboard'}
          </h3>
          <hr className="border-slate-200/50 mx-4" />
        </div>
        <ul className="space-y-2">
          {currentNavItems.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center px-4 py-4 rounded-xl font-medium transition-all duration-300 group ${
                    active
                      ? 'bg-gradient-to-r from-blue-600/15 to-blue-800/15 text-blue-800 shadow-sm border border-blue-600/20'
                      : 'text-slate-700 hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-blue-800/10 hover:text-blue-800 hover:shadow-sm'
                  }`}
                  >
                  <div className={`p-2 rounded-lg mr-3 transition-all duration-300 ${
                    active 
                      ? 'bg-gradient-to-br from-blue-800 to-blue-600 text-white shadow-md' 
                      : 'bg-slate-100 text-slate-600 group-hover:bg-gradient-to-br group-hover:from-blue-800 group-hover:to-blue-600 group-hover:text-white'
                  }`}>
                    <item.icon className="h-4 w-4" />
                  </div>
                  {item.name}
                  {active && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}