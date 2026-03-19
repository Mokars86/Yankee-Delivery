import { Outlet, NavLink } from 'react-router-dom';
import { LayoutDashboard, Compass, Receipt, User } from 'lucide-react';

const navItems = [
  { name: 'Home',    path: '/rider/dashboard', icon: LayoutDashboard },
  { name: 'Deliver', path: '/rider/request',   icon: Compass },
  { name: 'History', path: '/rider/history',   icon: Receipt },
  { name: 'Profile', path: '/rider/profile',   icon: User },
];

const RiderLayout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100%', width: '100%' }}>
      <main className="page bg-gray-50 flex-1 relative z-10 w-full overflow-hidden">
        <Outlet />
      </main>

      <nav className="bottom-nav" role="navigation" aria-label="Rider navigation">
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
    </div>
  );
};

export default RiderLayout;
