import { NavLink } from 'react-router-dom';
import { Home, Search, Receipt, Heart, User } from 'lucide-react';

const CustomerBottomNav = () => {
  const navItems = [
    { name: 'Home', path: '/customer/home', icon: Home },
    { name: 'Search', path: '/customer/search', icon: Search },
    { name: 'Orders', path: '/customer/orders', icon: Receipt },
    { name: 'Favorites', path: '/customer/favorites', icon: Heart },
    { name: 'Profile', path: '/customer/profile', icon: User },
  ];

  return (
    <div 
      className="fixed bottom-0 bg-white border-t border-gray-100 flex justify-around items-center h-16 w-full max-w-[600px] z-50 transform translate-x-[-50%] left-1/2"
      style={{ boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.05)' }}
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink 
            key={item.name} 
            to={item.path}
            className={({ isActive }) => 
              `flex flex-col items-center justify-center w-full h-full gap-1 transition-colors ${isActive ? 'text-[var(--primary)]' : 'text-[var(--text-muted)]'}`
            }
          >
             {({ isActive }) => (
               <>
                 <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                 <span className={`text-[10px] ${isActive ? 'font-bold' : 'font-medium'}`}>{item.name}</span>
               </>
             )}
          </NavLink>
        );
      })}
    </div>
  );
};

export default CustomerBottomNav;
