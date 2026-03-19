import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bike } from 'lucide-react';

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading/auth check, then navigate to rider dashboard
    const timer = setTimeout(() => {
      navigate('/login');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 animate-fade-in relative z-10 w-full overflow-hidden" style={{ background: 'linear-gradient(160deg, #1E7A28 0%, #2E9E3A 55%, #3DB84A 100%)' }}>
      
      {/* Background decoration */}
      <div className="absolute top-[-10%] left-[-20%] w-[60%] h-[40%] bg-white/10 rounded-full blur-[80px]" />
      <div className="absolute bottom-[-10%] right-[-20%] w-[60%] h-[40%] bg-accent/20 rounded-full blur-[80px]" />

      <div className="relative z-10 flex flex-col items-center">
        {/* App Logo/Icon */}
        <div className="mb-8 relative animate-bounce" style={{ animationDuration: '2s' }}>
          <div className="w-24 h-24 bg-white rounded-[1.75rem] shadow-xl flex items-center justify-center relative z-10 
            before:absolute before:inset-0 before:bg-white before:rounded-[1.75rem] before:shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
            <Bike className="w-12 h-12 text-primary relative z-10" />
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-2 bg-black/20 rounded-[100%] blur-[4px]"></div>
        </div>

        {/* App Name */}
        <h1 className="text-4xl font-extrabold text-white tracking-tight mb-2 text-center drop-shadow-md">
          Yankee <span className="text-white/90">Ride</span>
        </h1>
        
        <p className="text-accent font-medium text-lg text-center tracking-wide drop-shadow-sm">
          Deliver with Speed
        </p>
      </div>

      <div className="absolute bottom-12 left-0 right-0 flex justify-center pb-safe">
         <div className="w-8 h-8 border-3 border-white/20 border-t-white rounded-full animate-spin shadow-sm" />
      </div>

    </div>
  );
};

export default Splash;
