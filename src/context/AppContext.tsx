import React, { createContext, useContext, useState, ReactNode } from 'react';

export type UserRole = 'customer' | 'merchant' | null;

interface AppState {
  role: UserRole;
  setRole: (role: UserRole) => void;
  cart: any[];
  setCart: (cart: any[]) => void;
}

const AppContext = createContext<AppState | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<UserRole>(null);
  const [cart, setCart] = useState<any[]>([]);

  return (
    <AppContext.Provider value={{ role, setRole, cart, setCart }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
