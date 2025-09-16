'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/app/components/ui/navigation-menu";
import { Button } from "@/app/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent, 
  DropdownMenuItem,
  DropdownMenuSeparator
} from "@/app/components/ui/dropdown-menu";
import { 
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/app/components/ui/sheet";
import { Menu, LogOut, Settings, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useAuth } from '@/app/context/AuthContext';

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const { isAuthenticated, userRole, logout } = useAuth();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const publicNavItems = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Login', href: '/login' },
  ];

  const adminNavItems = [
    { name: 'Dashboard', href: '/admin/dashboard' },
    { name: 'Analytics', href: '/admin/analytics' },
    { name: 'Users', href: '/admin/users' },
    { name: 'Reports', href: '/admin/reports' },
  ];

  const customerNavItems = [
    { name: 'Dashboard', href: '/customer' },
    { name: 'Energy', href: '/customer/energy' },
    { name: 'Reports', href: '/customer/reports' },
    { name: 'Settings', href: '/customer/settings' },
  ];

  const currentNavItems = isAuthenticated 
    ? (userRole === 'admin' ? adminNavItems : customerNavItems)
    : publicNavItems;

  // Function to check if a nav item should be marked as active
  const isActive = (href: string) => {
    // Special case for home page - only active when pathname is exactly '/'
    if (href === '/') {
      return pathname === '/';
    }
    
    // For exact matches
    if (pathname === href) {
      return true;
    }
    
    // For dashboard routes, we want to keep the main dashboard link active
    if (href === '/admin/dashboard' && pathname.startsWith('/admin/')) {
      return true;
    }
    if (href === '/customer' && pathname.startsWith('/customer/')) {
      return true;
    }
    
    // For other routes, check if the current path starts with the href + '/'
    // This ensures that /features/subpage matches /features but not /
    if (pathname === href || pathname.startsWith(href + '/')) {
      return true;
    }
    
    return false;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'glass-card border-b border-white/20 shadow-2xl py-3' 
        : 'bg-white/98 backdrop-blur-xl border-b border-slate-200/50 py-5 shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="relative w-14 h-14 rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-blue-700 flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white relative z-10" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-2xl bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 bg-clip-text text-transparent leading-none">RiverWatts</span>
              <span className="text-xs text-slate-500 font-medium tracking-wider uppercase">Energy Systems</span>
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
            <NavigationMenu>
              <NavigationMenuList>
                {currentNavItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className={`${navigationMenuTriggerStyle()} font-semibold transition-all duration-300 relative overflow-hidden ${
                          isActive(item.href)
                            ? 'text-blue-800 bg-gradient-to-r from-blue-100/80 to-blue-50/80 shadow-lg border border-blue-200/50 rounded-xl' 
                            : 'text-slate-700 hover:text-blue-800 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-blue-100/40 hover:shadow-md hover:rounded-xl'
                        }`}>
                        <span className="relative z-10">{item.name}</span>
                        {isActive(item.href) && (
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-blue-50/30 rounded-xl" />
                        )}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Auth Section - Right aligned */}
          <div className="hidden md:flex items-center">
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="ml-2 hover:bg-gradient-to-r hover:from-[#0a8ac6]/10 hover:to-[#014174]/10 focus-ring flex items-center gap-3 px-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#014174] to-[#0a8ac6] flex items-center justify-center shadow-lg">
                      <User className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-slate-900">
                        {userRole === 'admin' ? 'Admin User' : 'Customer User'}
                      </p>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span className="text-xs text-slate-500">Online</span>
                      </div>
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-64 glass-card border-white/20">
                  <div className="px-3 py-2 border-b border-slate-200/50">
                    <div className="text-sm font-semibold text-slate-900">
                      {userRole === 'admin' ? 'System Administrator' : 'Customer Account'}
                    </div>
                    <div className="text-xs text-slate-600 mt-1">Manage your dashboard</div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/profile" className="flex items-center w-full">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/settings" className="flex items-center w-full">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600" onSelect={logout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : null}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="focus-ring hover:bg-gradient-to-r hover:from-[#0a8ac6]/10 hover:to-[#014174]/10">
                  <Menu className="h-6 w-6 text-[#014174]" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] sm:w-[400px] glass-card border-l border-white/20">
                <div className="flex flex-col h-full">
                  <div className="flex items-center space-x-3 py-6 border-b border-slate-200/50">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#014174] to-[#0a8ac6] flex items-center justify-center shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-bold text-2xl bg-gradient-to-r from-[#014174] to-[#0a8ac6] bg-clip-text text-transparent">RiverWatts</span>
                  </div>
                  
                  <div className="flex-1 py-6">
                    <nav className="flex flex-col space-y-2">
                      {currentNavItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`px-4 py-4 rounded-xl font-medium transition-all duration-300 ${
                            isActive(item.href)
                              ? 'bg-gradient-to-r from-[#0a8ac6]/10 to-[#014174]/10 text-[#014174] shadow-sm border border-[#0a8ac6]/20'
                              : 'text-slate-700 hover:bg-gradient-to-r hover:from-[#0a8ac6]/5 hover:to-[#014174]/5 hover:text-[#014174]'
                          }`}>
                          {item.name}
                        </Link>
                      ))}
                    </nav>
                  </div>
                  
                  {isAuthenticated ? (
                    <div className="pt-6 border-t border-slate-200/50">
                      <div className="px-4 py-4 bg-gradient-to-r from-slate-50 to-blue-50/30 rounded-xl mb-4 border border-slate-200/50">
                        <div className="text-sm font-semibold text-slate-900">
                          {userRole === 'admin' ? 'Admin Account' : 'Customer Account'}
                        </div>
                        <div className="text-xs text-slate-600 mt-1">Signed in successfully</div>
                      </div>
                      <div className="space-y-2">
                        <Link
                          href="/profile"
                          className="flex items-center w-full px-4 py-4 rounded-xl text-slate-700 hover:bg-gradient-to-r hover:from-slate-50 hover:to-blue-50/30 transition-all duration-300">
                          <User className="mr-3 h-5 w-5" />
                          Profile
                        </Link>
                        <Link
                          href="/settings"
                          className="flex items-center w-full px-4 py-4 rounded-xl text-slate-700 hover:bg-gradient-to-r hover:from-slate-50 hover:to-blue-50/30 transition-all duration-300">
                          <Settings className="mr-3 h-5 w-5" />
                          Settings
                        </Link>
                        <button 
                          className="flex items-center w-full px-4 py-4 rounded-xl text-red-600 hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100/50 transition-all duration-300"
                          onClick={() => {
                            logout();
                            window.location.href = '/';
                          }}
                        >
                          <LogOut className="mr-3 h-5 w-5" />
                          Logout
                        </button>
                      </div>
                    </div>
                  ) : null}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}