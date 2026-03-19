import { useState } from 'react';
import { MapPin, Navigation, Bike, Plus, CircleDollarSign, ArrowUpRight, Clock, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [isOnline, setIsOnline] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 pb-safe animate-fade-in relative overflow-x-hidden">
      
      {/* Background Header gradient */}
      <div className={`absolute top-0 left-0 right-0 h-64 transition-colors duration-500 ease-in-out z-0 
        ${isOnline ? 'bg-gradient-to-b from-primary/20 to-transparent' : 'bg-gradient-to-b from-gray-300/40 to-transparent'}`} 
      />

      <div className="relative z-10">
        
        {/* Header section */}
        <div className="flex justify-between items-center p-6 pt-safe">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-full p-0.5 shadow-md relative">
              <img 
                src="https://ui-avatars.com/api/?name=Alex+Rider&background=random" 
                alt="Profile" 
                className="w-full h-full rounded-full object-cover"
              />
              {/* Status Dot on Avatar */}
              <div className={`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-white 
                ${isOnline ? 'bg-primary' : 'bg-gray-400'}`} 
              />
            </div>
            <div>
              <p className="text-gray-500 text-xs font-medium tracking-wide uppercase">Welcome back</p>
              <h1 className="text-xl font-extrabold text-gray-900 tracking-tight">Alex Rider</h1>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 border border-white">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="font-bold text-gray-800 text-sm">4.9</span>
          </div>
        </div>

        {/* Go Online / Offline Toggle Card */}
        <div className="px-5 mb-6">
          <div className={`relative overflow-hidden rounded-[2rem] p-6 shadow-lg transition-all duration-300
            ${isOnline ? 'bg-white border-2 border-primary/20 shadow-primary/10' : 'bg-white border text-gray-600'}`}>
            
            {/* Animated background glow when online */}
            {isOnline && (
              <div className="absolute -inset-4 bg-primary/10 blur-[40px] rounded-[3rem] animate-pulse" style={{ animationDuration: '3s' }} />
            )}

            <div className="relative z-10 flex flex-col items-center">
               <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors duration-300 shadow-sm
                  ${isOnline ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-500'}">
                 <Bike className="w-8 h-8" />
               </div>
               
               <h2 className={`text-2xl font-extrabold mb-1 transition-colors ${isOnline ? 'text-gray-900' : 'text-gray-500'}`}>
                 {isOnline ? "You're Online!" : "You're Offline"}
               </h2>
               
               <p className={`text-sm mb-6 text-center transition-colors ${isOnline ? 'text-gray-600' : 'text-gray-400'}`}>
                 {isOnline ? "Waiting for delivery requests in your area..." : "Go online to start receiving delivery requests."}
               </p>
               
               <button 
                  onClick={() => setIsOnline(!isOnline)}
                  className={`w-full py-4 px-6 rounded-[1.25rem] font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 active:scale-95 shadow-md
                    ${isOnline 
                      ? 'bg-red-50 text-red-600 border border-red-100 hover:bg-red-100' 
                      : 'bg-primary text-white hover:bg-primary-dark shadow-primary/30'}`}
               >
                 <Navigation size={22} className={isOnline ? '' : 'fill-white'} />
                 {isOnline ? 'GO OFFLINE' : 'GO ONLINE'}
               </button>
            </div>
          </div>
        </div>

        {/* Demo trigger: Simulate Request (Only for preview!) */}
        {isOnline && (
            <div className="px-5 mb-8 animate-fade-in">
              <button 
                onClick={() => navigate('/rider/request')}
                className="w-full bg-accent/10 border-2 border-accent/20 text-accent py-3 rounded-xl font-bold flex justify-center items-center gap-2 active:scale-95 transition-transform"
              >
                <Plus size={20} /> [Demo] Simulate Incoming Order
              </button>
            </div>
        )}

        {/* Today's Summary */}
        <div className="px-5 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-extrabold text-gray-900 text-xl tracking-tight">Today's Summary</h3>
            <span className="text-primary font-bold text-sm underline cursor-pointer">View full</span>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
             
             {/* Earnings Card */}
             <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[1.5rem] p-5 text-white shadow-lg relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform">
                 <CircleDollarSign size={80} />
               </div>
               <div className="relative z-10 flex flex-col h-full justify-between">
                 <span className="text-gray-400 text-sm font-medium flex items-center gap-1.5 mb-2">
                   Earnings <ArrowUpRight size={14} className="text-primary-light" />
                 </span>
                 <div>
                   <span className="text-3xl font-black tracking-tight">$84.50</span>
                 </div>
               </div>
             </div>

             {/* Deliveries Card */}
             <div className="bg-white rounded-[1.5rem] p-5 border border-gray-100 shadow-md relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-5 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform">
                 <MapPin size={80} />
               </div>
               <div className="relative z-10 flex flex-col h-full justify-between">
                 <span className="text-gray-500 text-sm font-medium flex items-center gap-1.5 mb-2">
                   Deliveries <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                 </span>
                 <div className="flex items-end gap-2">
                   <span className="text-3xl font-black text-gray-900 tracking-tight">12</span>
                   <span className="text-gray-400 text-sm font-medium mb-1">trips</span>
                 </div>
               </div>
             </div>

             {/* Online Time */}
             <div className="col-span-2 bg-white rounded-[1.5rem] p-4 border border-gray-100 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-bold text-sm">Online Time</h4>
                    <p className="text-gray-500 text-xs">Today</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-extrabold text-gray-900 text-lg">4h 20m</span>
                </div>
             </div>

          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Dashboard;
