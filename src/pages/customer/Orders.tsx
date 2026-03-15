import { ArrowLeft, MapPin, Navigation, PackageCheck, CookingPot, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const stages = [
  { id: 1, name: 'Order received', time: '12:30 PM', icon: PackageCheck, status: 'completed' },
  { id: 2, name: 'Preparing', time: '12:35 PM', icon: CookingPot, status: 'completed' },
  { id: 3, name: 'Rider picking up', time: '12:45 PM', icon: MapPin, status: 'active' },
  { id: 4, name: 'On the way', time: '--:--', icon: Navigation, status: 'pending' },
  { id: 5, name: 'Delivered', time: '--:--', icon: CheckCircle2, status: 'pending' },
];

const Orders = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[var(--surface-color)] min-h-screen pb-24 animate-fade-in w-full max-w-[600px] mx-auto flex flex-col">
      <header className="absolute top-0 w-full p-4 flex items-center gap-4 z-20">
        <button onClick={() => navigate(-1)} className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center">
          <ArrowLeft size={20} />
        </button>
      </header>

      {/* Map Placeholder */}
      <div className="h-72 w-full bg-gray-200 relative overflow-hidden flex-shrink-0">
        <img 
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80" 
          alt="Map tracking" 
          className="w-full h-full object-cover opacity-80"
        />
        {/* Mock pins */}
        <div className="absolute top-1/2 left-1/3 bottom-10 animate-bounce">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-[var(--primary)]">
            <span className="text-xl">🛵</span>
          </div>
        </div>
        <div className="absolute top-1/3 right-1/4">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center shadow-lg text-white">
            <MapPin size={16} />
          </div>
        </div>
        
        {/* Estimated time pill */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg font-bold flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
          15 mins away
        </div>
      </div>

      <div className="flex-1 p-6 relative z-10 bg-white -mt-4 rounded-t-3xl shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-xl font-bold">Order #84J92Z</h2>
            <p className="text-muted text-sm mt-1">Burger King • $11.98</p>
          </div>
          <button className="bg-orange-50 text-[var(--primary)] text-sm font-bold px-3 py-1.5 rounded-lg">Help</button>
        </div>

        <div className="flex bg-gray-50 rounded-xl p-4 items-center gap-4 mb-8 border border-gray-100">
          <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80" alt="Rider" className="w-12 h-12 rounded-full object-cover shadow-sm" />
          <div className="flex-1">
            <h3 className="font-bold">Michael K.</h3>
            <p className="text-xs text-muted flex items-center gap-1 mt-0.5">
              <span className="text-yellow-500 font-bold">★ 4.9</span> • 2,410 Deliveries
            </p>
          </div>
          <div className="w-10 h-10 rounded-full bg-[var(--primary)] text-white flex items-center justify-center shadow-md">
            <Navigation size={18} />
          </div>
        </div>

        <h3 className="font-bold text-lg mb-4">Track Order</h3>
        <div className="flex flex-col gap-0 relative pl-4">
          {/* Vertical line connecting steps */}
          <div className="absolute left-[31px] top-6 bottom-8 w-0.5 bg-gray-100 z-0"></div>
          
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            const isLast = idx === stages.length - 1;
            
            return (
              <div key={stage.id} className="flex gap-4 items-start relative z-10 mb-6">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm transition-colors
                  ${stage.status === 'completed' ? 'bg-[var(--primary)] text-white' : 
                    stage.status === 'active' ? 'bg-orange-100 border-2 border-[var(--primary)] text-[var(--primary)]' : 
                    'bg-gray-100 text-gray-400'}`}
                >
                  <Icon size={14} strokeWidth={stage.status === 'active' ? 3 : 2} />
                </div>
                <div className="flex-1 pt-1 flex justify-between">
                  <div>
                    <h4 className={`text-sm font-bold ${stage.status === 'pending' ? 'text-gray-400' : 'text-black'}`}>{stage.name}</h4>
                    {stage.status === 'active' && <p className="text-xs text-[var(--primary)] font-semibold mt-1">Driver is currently at the restaurant</p>}
                  </div>
                  <span className={`text-xs font-medium ${stage.status === 'pending' ? 'text-gray-300' : 'text-gray-500'}`}>{stage.time}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Orders;
