import { createContext, useContext, useState, type ReactNode } from 'react';

export type UserRole = 'customer' | 'merchant' | null;

interface AppState {
  role: UserRole;
  setRole: (role: UserRole) => void;
  cart: CartItem[];
  setCart: (cart: CartItem[]) => void;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

const AppContext = createContext<AppState | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<UserRole>(null);
  const [cart, setCart] = useState<CartItem[]>([]);

  return (
    <AppContext.Provider value={{ role, setRole, cart, setCart }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
};
