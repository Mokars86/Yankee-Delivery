import { User, LogOut, Settings, History, Heart, HelpCircle, ChevronRight } from 'lucide-react';
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
        <h1 className="text-2xl font-bold">Profile</h1>
        <button 
          onClick={handleLogout}
          className="text-red-500 font-bold flex items-center gap-1 text-sm bg-red-50 px-3 py-1.5 rounded-lg"
        >
          <LogOut size={16} /> Logout
        </button>
      </header>

      <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm mb-6" style={{ backgroundColor: 'var(--surface-color)' }}>
        <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-[var(--primary)] text-2xl font-bold">
          JD
        </div>
        <div>
          <h2 className="text-xl font-bold">John Doe</h2>
          <p className="text-muted text-sm">+1 234 567 8900</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden" style={{ backgroundColor: 'var(--surface-color)' }}>
        {[
          { icon: User, label: 'Personal Details' },
          { icon: History, label: 'Order History', action: () => navigate('/customer/orders') },
          { icon: Heart, label: 'Favorites', action: () => navigate('/customer/favorites') },
          { icon: Settings, label: 'Settings' },
          { icon: HelpCircle, label: 'Help & Support' },
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
        onClick={() => { setRole('merchant'); navigate('/merchant/dashboard'); }}
        className="mt-6 w-full py-4 rounded-xl border-2 border-dashed border-[var(--primary)] text-[var(--primary)] font-bold bg-orange-50/50 hover:bg-orange-50 transition-colors"
      >
        Switch to Merchant Mode
      </button>
    </div>
  );
};

export default Profile;
