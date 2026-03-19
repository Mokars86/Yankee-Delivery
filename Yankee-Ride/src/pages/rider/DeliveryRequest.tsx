import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, ArrowLeft, Clock, Navigation, CircleDollarSign, CheckCircle2 } from 'lucide-react';

const DeliveryRequest = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(30);
  const [status, setStatus] = useState<'incoming' | 'accepted' | 'declined'>('incoming');

  // Countdown timer for incoming request
  useEffect(() => {
    if (status !== 'incoming') return;
    if (timeLeft <= 0) {
      setTimeout(() => setStatus('declined'), 0);
      setTimeout(() => navigate('/rider/dashboard'), 2000);
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, status, navigate]);

  const handleAccept = () => {
    setStatus('accepted');
    // Simulate routing to active delivery screen after 1.5s
    // setTimeout(() => navigate('/rider/active-delivery'), 1500); 
  };

  const handleDecline = () => {
    setStatus('declined');
    setTimeout(() => navigate('/rider/dashboard'), 1500);
  };

  if (status === 'accepted') {
    return (
      <div className="h-screen bg-primary flex flex-col items-center justify-center text-white px-6 animate-fade-in relative z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-20%] w-[60%] h-[40%] bg-white/10 rounded-full blur-[80px]" />
        
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 shadow-2xl relative z-10 animate-bounce">
          <CheckCircle2 className="w-12 h-12 text-primary" />
        </div>
        <h1 className="text-3xl font-extrabold mb-2 text-center drop-shadow-md">Order Accepted!</h1>
        <p className="text-center text-white/90 text-lg font-medium">Navigating to pickup...</p>
        
        <button 
           onClick={() => navigate('/rider/dashboard')}
           className="mt-12 bg-white/20 hover:bg-white/30 text-white border border-white/50 py-3 px-8 rounded-full font-bold transition-all backdrop-blur-md"
        >
          Return to Dashboard
        </button>
      </div>
    );
  }

  if (status === 'declined') {
     return (
       <div className="h-screen bg-gray-900 flex flex-col items-center justify-center text-white px-6 animate-fade-in relative overflow-hidden">
         <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mb-6 border border-gray-700">
           <span className="text-3xl font-bold text-gray-400">×</span>
         </div>
         <h1 className="text-3xl font-extrabold mb-2 text-center text-gray-300">Order Declined</h1>
         <p className="text-center text-gray-500 font-medium tracking-wide">Returning to dashboard...</p>
       </div>
     );
  }

  // Incoming Request View
  return (
    <div className="h-screen flex flex-col bg-gray-900 text-white animate-fade-in relative overflow-hidden">
      
      {/* Map Background Simulation */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen scale-110">
        <div className="w-full h-full bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v11/static/-0.1276,51.5072,13,0/600x800?access_token=pk.eyJ1IjoiZGVsZWdpZSIsImEiOiJjbGo4azlkZjYwcHI0M2xseWNzcWltd3FiIn0.KxZtZzjD_7s_tVw5-7H7_Q')] bg-cover bg-center filter grayscale contrast-150" />
      </div>
      
      {/* Radar Ping Animation */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-32 h-32">
        <div className="absolute inset-0 border-4 border-primary rounded-full opacity-0 animate-ping" style={{ animationDuration: '2s' }}></div>
        <div className="absolute inset-0 border-4 border-primary rounded-full opacity-0 animate-ping" style={{ animationDuration: '2s', animationDelay: '0.5s' }}></div>
        <div className="absolute inset-4 bg-primary/20 backdrop-blur-sm rounded-full flex justify-center items-center shadow-[0_0_30px_rgba(245,166,35,0.5)]">
           <MapPin className="text-primary w-8 h-8 fill-primary stroke-white" />
        </div>
      </div>

      {/* Header */}
      <div className="relative z-10 flex justify-between items-center p-6 pt-safe">
        <button onClick={handleDecline} className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10 active:scale-95 transition-transform">
          <ArrowLeft size={20} className="text-white relative right-px" />
        </button>
        <div className="flex flex-col items-center flex-1">
          <h2 className="uppercase tracking-widest text-[10px] text-gray-400 font-bold mb-0.5">Delivery Request</h2>
          <div className="bg-primary/20 backdrop-blur-md text-primary-light font-black text-lg px-4 py-1.5 rounded-full border border-primary/30 flex items-center gap-2">
            <Clock size={16} className="animate-pulse" />
            00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
          </div>
        </div>
        <div className="w-10" /> {/* Spacer */}
      </div>

      <div className="flex-1" />

      {/* Bottom Information Card */}
      <div className="relative z-10 bg-white text-gray-900 rounded-t-[2.5rem] p-6 pt-8 pb-safe shadow-[0_-10px_40px_rgba(0,0,0,0.2)]">
        
        {/* Payout Head */}
        <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-6">
          <div>
            <p className="text-gray-500 font-bold text-xs uppercase tracking-wider mb-1">Estimated Payout</p>
            <div className="flex items-baseline gap-1">
              <span className="text-5xl font-black tracking-tighter text-gray-900">$8.50</span>
            </div>
          </div>
          <div className="bg-primary/10 w-16 h-16 rounded-[1.25rem] flex items-center justify-center border border-primary/20 shadow-sm">
             <CircleDollarSign size={32} className="text-primary" />
          </div>
        </div>

        {/* Route Details */}
        <div className="relative mb-8">
           {/* Connecting Line */}
           <div className="absolute left-4 top-5 bottom-6 w-0.5 bg-gray-200" />

           {/* Pickup */}
           <div className="flex items-start gap-4 mb-6 relative">
             <div className="bg-gray-900 w-8 h-8 rounded-full flex items-center justify-center z-10 border-[3px] border-white shadow-sm flex-shrink-0">
                <span className="w-2.5 h-2.5 bg-white rounded-full block" />
             </div>
             <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Pickup • 1.2 mi away</p>
                <h3 className="font-extrabold text-lg text-gray-900 leading-tight">Burger King (Times Square)</h3>
                <p className="text-sm text-gray-500">120 W 42nd St</p>
             </div>
           </div>

           {/* Drop-off */}
           <div className="flex items-start gap-4 relative">
             <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center z-10 border-[3px] border-white shadow-sm flex-shrink-0">
                <MapPin size={14} className="text-white fill-white" />
             </div>
             <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Drop-off • 2.5 mi from pickup</p>
                <h3 className="font-extrabold text-lg text-gray-900 leading-tight">Empire State Building</h3>
                <p className="text-sm text-gray-500">Apt 4B</p>
             </div>
           </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button 
            onClick={handleDecline} 
            className="w-16 h-16 rounded-[1.25rem] bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500 active:scale-95 transition-transform flex-shrink-0 hover:bg-gray-100"
          >
            <span className="text-3xl leading-none font-medium mb-1">×</span>
          </button>
          
          <button 
            onClick={handleAccept} 
            className="flex-1 bg-primary text-white rounded-[1.25rem] flex items-center justify-center font-bold text-xl tracking-wide shadow-[0_4px_16px_rgba(245,166,35,0.4)] hover:bg-primary-dark transition-all active:scale-95 gap-3"
          >
            ACCEPT ORDER
            <Navigation className="w-5 h-5 fill-white rotate-45" />
          </button>
        </div>

      </div>

    </div>
  );
};

export default DeliveryRequest;
