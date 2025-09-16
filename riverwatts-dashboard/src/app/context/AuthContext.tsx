'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type UserRole = 'admin' | 'customer' | null;

interface AuthContextType {
  isAuthenticated: boolean;
  userRole: UserRole;
  login: (role: UserRole) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<UserRole>(null);

  // Check for existing auth state on initial load
  useEffect(() => {
    const storedAuth = localStorage.getItem('riverwatts_auth');
    if (storedAuth) {
      const { authenticated, role } = JSON.parse(storedAuth);
      setIsAuthenticated(authenticated);
      setUserRole(role);
    }
  }, []);

  const login = (role: UserRole): boolean => {
    if (role) {
      setIsAuthenticated(true);
      setUserRole(role);
      localStorage.setItem(
        'riverwatts_auth',
        JSON.stringify({
          authenticated: true,
          role: role,
        })
      );
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
    localStorage.removeItem('riverwatts_auth');
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        userRole,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}