import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Users, Store, Bike, FileText, CreditCard, Bell, Menu, Search, LogOut 
} from 'lucide-react';

const navItems = [
  { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
  { name: 'Users',     path: '/admin/users',     icon: Users },
  { name: 'Merchants', path: '/admin/merchants', icon: Store },
  { name: 'Riders',    path: '/admin/riders',    icon: Bike },
  { name: 'Orders',    path: '/admin/orders',    icon: FileText },
  { name: 'Payments',  path: '/admin/payments',  icon: CreditCard },
];

const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any storage clearing here
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-slate-50 w-full overflow-hidden">
      
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white border-r border-slate-100 flex flex-col hidden md:flex shrink-0">
         <div className="p-6 flex items-center gap-3">
           <img src="/logo.png" alt="Yankee Admin" className="w-8 h-8 rounded-full" />
           <span className="font-extrabold text-xl tracking-tight text-slate-900">Yankee Admin</span>
         </div>

         <nav className="flex-1 px-4 space-y-2 mt-4">
           {navItems.map((item) => (
             <NavLink 
               key={item.name} 
               to={item.path}
               className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
             >
               <item.icon size={20} />
               {item.name}
             </NavLink>
           ))}
         </nav>

         <div className="p-4 mx-4 mt-auto mb-2 bg-[var(--primary-bg)] rounded-2xl">
           <p className="text-xs font-bold text-[var(--primary-dark)] uppercase">System Status</p>
           <div className="flex items-center gap-2 mt-2">
             <span className="w-2 h-2 bg-[var(--primary)] rounded-full animate-pulse"></span>
             <span className="text-sm font-semibold text-slate-700">All systems operational</span>
           </div>
         </div>

         <div className="px-4 pb-6">
           <button 
             onClick={handleLogout}
             className="w-full flex items-center justify-center gap-2 py-3 bg-red-50 text-red-600 font-bold rounded-xl hover:bg-red-100 transition-colors active:scale-95"
           >
             <LogOut size={18} />
             Sign Out
           </button>
         </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col w-full h-full relative overflow-hidden">
         {/* Top Header */}
         <header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-100 flex items-center justify-between px-6 shrink-0 relative z-20">
            <div className="flex items-center gap-4">
              <button className="p-2 -ml-2 text-slate-400 hover:text-slate-600 md:hidden">
                <Menu size={24} />
              </button>
              
              <div className="hidden sm:flex items-center bg-slate-50 px-3 py-2 rounded-lg border border-slate-200">
                <Search size={18} className="text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search orders, users..." 
                  className="bg-transparent border-none focus:outline-none text-sm ml-2 w-64"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="relative text-slate-400 hover:text-slate-600 transition-colors">
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              <div className="flex items-center gap-2 pl-4 border-l border-slate-200">
                 <div className="w-8 h-8 bg-[var(--primary)] text-white rounded-full flex items-center justify-center font-bold text-sm">
                   A
                 </div>
                 <div className="hidden sm:block">
                   <p className="text-sm font-bold text-slate-800 leading-tight">Admin User</p>
                   <p className="text-xs text-slate-500">Superadmin</p>
                 </div>
              </div>
            </div>
         </header>

         {/* Scrollable Main View */}
         <main className="flex-1 overflow-y-auto p-6 relative z-10">
            <Outlet />
         </main>
      </div>
    </div>
  );
};

export default AdminLayout;
