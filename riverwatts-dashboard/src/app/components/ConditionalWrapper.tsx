'use client';

import { usePathname } from 'next/navigation';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';

export default function ConditionalWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Check if we're in a dashboard route or login page
  const isDashboardRoute = pathname.startsWith('/admin') || pathname.startsWith('/customer');
  const isLoginPage = pathname === '/login' || pathname.startsWith('/login');
  const isHomePage = pathname === '/';
  
  return (
    <>
      {!isDashboardRoute && !isLoginPage && <Navigation />}
      <div className={!isDashboardRoute && !isLoginPage && !isHomePage ? 'pt-32' : ''}>
        {children}
      </div>
      {!isDashboardRoute && !isLoginPage && <Footer />}
    </>
  );
}