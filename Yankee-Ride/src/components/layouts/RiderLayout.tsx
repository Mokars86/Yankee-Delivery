import { Outlet, NavLink } from 'react-router-dom';
import { LayoutDashboard, Compass, Receipt, User } from 'lucide-react';

const RiderLayout = () => {
  return (
    <div className="flex flex-col min-h-screen relative w-full overflow-hidden">
      <main className="page bg-gray-50 flex-1 relative z-10">
        <Outlet />
      </main>

      <nav className="bottom-nav">
        <NavLink 
          to="/rider/dashboard" 
          className={({ isActive }) => `bottom-nav-item ${isActive ? 'text-primary' : 'text-gray-400'}`}
        >
          {({ isActive }) => (
            <>
              <LayoutDashboard size={24} className={isActive ? 'text-primary drop-shadow-sm' : ''} strokeWidth={isActive ? 2.5 : 2} />
              <span className={`text-[10px] uppercase font-bold tracking-wider mt-1 ${isActive ? 'text-primary' : ''}`}>Home</span>
            </>
          )}
        </NavLink>
        
        <NavLink 
          to="/rider/request" 
          className={({ isActive }) => `bottom-nav-item ${isActive ? 'text-primary' : 'text-gray-400'}`}
        >
          {({ isActive }) => (
            <>
              <Compass size={24} className={isActive ? 'text-primary drop-shadow-sm' : ''} strokeWidth={isActive ? 2.5 : 2} />
              <span className={`text-[10px] uppercase font-bold tracking-wider mt-1 ${isActive ? 'text-primary' : ''}`}>Deliver</span>
            </>
          )}
        </NavLink>

        <NavLink 
          to="/rider/history" 
          className={({ isActive }) => `bottom-nav-item ${isActive ? 'text-primary' : 'text-gray-400'}`}
        >
          {({ isActive }) => (
             <>
               <Receipt size={24} className={isActive ? 'text-primary drop-shadow-sm' : ''} strokeWidth={isActive ? 2.5 : 2} />
               <span className={`text-[10px] uppercase font-bold tracking-wider mt-1 ${isActive ? 'text-primary' : ''}`}>History</span>
             </>
          )}
        </NavLink>

        <NavLink 
          to="/rider/profile" 
          className={({ isActive }) => `bottom-nav-item ${isActive ? 'text-primary' : 'text-gray-400'}`}
        >
          {({ isActive }) => (
             <>
               <User size={24} className={isActive ? 'text-primary drop-shadow-sm' : ''} strokeWidth={isActive ? 2.5 : 2} />
               <span className={`text-[10px] uppercase font-bold tracking-wider mt-1 ${isActive ? 'text-primary' : ''}`}>Profile</span>
             </>
          )}
        </NavLink>
      </nav>
    </div>
  );
};

export default RiderLayout;
