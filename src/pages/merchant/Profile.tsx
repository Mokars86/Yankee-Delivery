import { User, LogOut, Settings, ChartBar, Store, HelpCircle, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

const Profile = () => {
  const navigate = useNavigate();
  const { setRole } = useAppContext();

  const handleLogout = () => {
    setRole(null);
    navigate('/welcome');
  };

  return (
    <div className="bg-[var(--bg-color)] min-h-screen pb-24 animate-fade-in w-full max-w-[600px] mx-auto p-4 flex flex-col pt-6">
      <header className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Store Profile</h1>
        <button 
          onClick={handleLogout}
          className="text-red-500 font-bold flex items-center gap-1 text-sm bg-red-50 px-3 py-1.5 rounded-lg"
        >
          <LogOut size={16} /> Logout
        </button>
      </header>

      <div className="flex items-center gap-4 bg-[var(--primary)] text-white p-4 rounded-2xl shadow-sm mb-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-10 rounded-full transform translate-x-8 -translate-y-8"></div>
        <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=150&q=80" alt="Logo" className="w-16 h-16 rounded-full object-cover border-2 border-white" />
        <div>
          <h2 className="text-xl font-bold">Burger King</h2>
          <p className="text-white/80 text-sm">Fast Food • Open until 11 PM</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden" style={{ backgroundColor: 'var(--surface-color)' }}>
        {[
          { icon: Store, label: 'Store Information' },
          { icon: User, label: 'Account Settings' },
          { icon: ChartBar, label: 'Business Insights', action: () => navigate('/merchant/analytics') },
          { icon: Settings, label: 'App Settings' },
          { icon: HelpCircle, label: 'Merchant Support' },
        ].map((item, idx) => (
          <div 
            key={idx} 
            onClick={item.action}
            className="flex items-center justify-between p-4 border-b border-gray-100 last:border-0 cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-muted">
                <item.icon size={16} />
              </div>
              <span className="font-semibold text-sm">{item.label}</span>
            </div>
            <ChevronRight size={16} className="text-muted" />
          </div>
        ))}
      </div>

      <button 
        onClick={() => { setRole('customer'); navigate('/customer/home'); }}
        className="mt-6 w-full py-4 rounded-xl border-2 border-dashed border-blue-500 text-blue-500 font-bold bg-blue-50/50 hover:bg-blue-50 transition-colors"
      >
        Switch to Customer Mode
      </button>
    </div>
  );
};

export default Profile;
