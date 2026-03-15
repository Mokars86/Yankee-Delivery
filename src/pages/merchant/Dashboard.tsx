import { DollarSign, ShoppingBag, PackageCheck, Clock, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const metrics = [
    { title: "Today's Revenue", value: '$452.80', icon: DollarSign, color: 'text-green-600', bg: 'bg-green-100', trend: '+12.5%' },
    { title: "Today's Orders", value: '34', icon: ShoppingBag, color: 'text-blue-600', bg: 'bg-blue-100', trend: '+5.2%' },
    { title: "Pending Orders", value: '7', icon: Clock, color: 'text-orange-600', bg: 'bg-orange-100', urgent: true },
    { title: "Completed", value: '27', icon: PackageCheck, color: 'text-purple-600', bg: 'bg-purple-100' },
  ];

  return (
    <div className="p-4 animate-fade-in flex flex-col gap-6 w-full max-w-[600px] mx-auto pb-20">
      <header className="flex justify-between items-end mb-2">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-muted text-sm mt-1">Welcome back, Burger King!</p>
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
          <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=150&q=80" alt="Store logo" className="w-full h-full object-cover" />
        </div>
      </header>

      <section className="grid grid-cols-2 gap-4">
        {metrics.map((m, idx) => (
          <div key={idx} className="bg-white p-4 rounded-2xl shadow-sm flex flex-col relative overflow-hidden" style={{ backgroundColor: 'var(--surface-color)' }}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 ${m.bg} ${m.color}`}>
              <m.icon size={20} />
            </div>
            {m.trend && (
              <div className="absolute top-4 right-4 text-[10px] font-bold text-green-600 flex items-center gap-0.5 bg-green-50 px-1.5 py-0.5 rounded">
                <TrendingUp size={10} /> {m.trend}
              </div>
            )}
            {m.urgent && (
              <div className="absolute top-4 right-4 w-2.5 h-2.5 bg-red-500 rounded-full animate-ping"></div>
            )}
            <p className="text-muted text-xs font-medium mb-1">{m.title}</p>
            <h2 className="text-2xl font-bold">{m.value}</h2>
          </div>
        ))}
      </section>

      <section>
        <div className="flex justify-between items-center mb-4 mt-2">
          <h2 className="font-bold text-lg">Action Needed</h2>
          <span className="text-primary text-sm font-bold cursor-pointer" onClick={() => navigate('/merchant/orders')}>View details</span>
        </div>
        <div className="bg-orange-50 rounded-2xl p-4 border border-orange-100 flex items-center justify-between" style={{ backgroundColor: 'var(--primary-light)', opacity: 0.9 }}>
           <div className="flex items-center gap-3 text-white">
             <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm">
               <Clock size={24} />
             </div>
             <div>
               <h3 className="font-bold text-lg">7 Pending Orders</h3>
               <p className="text-sm font-medium opacity-90">Waiting for your acceptance</p>
             </div>
           </div>
           <button 
             onClick={() => navigate('/merchant/orders')}
             className="bg-white text-[var(--primary)] font-bold px-4 py-2 rounded-xl shadow-sm hover:scale-105 transition-transform"
           >
             Go
           </button>
        </div>
      </section>

    </div>
  );
};
export default Dashboard;
