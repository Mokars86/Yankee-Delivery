import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Receipt, Package, LineChart, User } from 'lucide-react';
import './BottomNav.css';

const navItems = [
  { name: 'Dashboard', path: '/merchant/dashboard',  icon: LayoutDashboard },
  { name: 'Orders',    path: '/merchant/orders',     icon: Receipt         },
  { name: 'Products',  path: '/merchant/products',   icon: Package         },
  { name: 'Analytics', path: '/merchant/analytics',  icon: LineChart       },
  { name: 'Profile',   path: '/merchant/profile',    icon: User            },
];

const MerchantBottomNav = () => (
  <nav className="bottom-nav" role="navigation" aria-label="Merchant navigation">
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

export default MerchantBottomNav;
