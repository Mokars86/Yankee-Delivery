import { NavLink } from 'react-router-dom';
import { Home, Search, Receipt, Heart, User } from 'lucide-react';
import './BottomNav.css';

const navItems = [
  { name: 'Home',     path: '/customer/home',      icon: Home    },
  { name: 'Search',   path: '/customer/search',    icon: Search  },
  { name: 'Orders',   path: '/customer/orders',    icon: Receipt },
  { name: 'Saved',    path: '/customer/favorites', icon: Heart   },
  { name: 'Profile',  path: '/customer/profile',   icon: User    },
];

const CustomerBottomNav = () => (
  <nav className="bottom-nav" role="navigation" aria-label="Customer navigation">
    {navItems.map(({ name, path, icon: Icon }) => (
      <NavLink
        key={name}
        to={path}
        className={({ isActive }) => `bottom-nav-link${isActive ? ' active' : ''}`}
        aria-label={name}
      >
        {({ isActive }) => (
          <>
            <div className={`nav-icon-wrap${isActive ? ' active' : ''}`}>
              <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
            </div>
            <span>{name}</span>
          </>
        )}
      </NavLink>
    ))}
  </nav>
);

export default CustomerBottomNav;
