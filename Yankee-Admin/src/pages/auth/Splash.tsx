import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Splash = () => {
  const navigate = useNavigate();
  const [glow, setGlow] = useState(false);

  useEffect(() => {
    // Initial entrance glow
    const enterTimer = setTimeout(() => {
      setGlow(true);
    }, 400);

    // Redirect to login after 2.5s
    const redirectTimer = setTimeout(() => {
      navigate('/login');
    }, 2500);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white relative overflow-hidden">
      
      {/* Premium Gradient Background Elements */}
      <div className="absolute top-0 right-[-10%] w-[40rem] h-[40rem] bg-gradient-to-br from-[var(--primary)] to-transparent opacity-10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[30rem] h-[30rem] bg-gradient-to-tr from-[var(--accent)] to-transparent opacity-10 rounded-full blur-[80px] pointer-events-none" />

      {/* Main Logo Container */}
      <div 
        className={`flex flex-col items-center justify-center transition-all duration-1000 transform
          ${glow ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}
        `}
      >
        <div className="relative mb-6 group">
          <div className={`absolute inset-0 bg-[var(--primary-light)] rounded-3xl blur-2xl transition-opacity duration-1000 ${glow ? 'opacity-30' : 'opacity-0'}`}></div>
          <div className="relative w-32 h-32 bg-white rounded-3xl p-4 shadow-xl border border-slate-100 flex items-center justify-center transform transition-transform duration-500 group-hover:scale-105">
             <img 
               src="/logo.png" 
               alt="Yankee Admin Logo" 
               className="w-full h-full object-contain drop-shadow-sm"
             />
          </div>
        </div>

        <h1 className="text-3xl font-black text-slate-800 tracking-tight mt-2 text-center">
          Yankee<span className="text-[var(--primary)]">Admin</span>
        </h1>
        <p className="text-slate-500 font-medium mt-2 tracking-wide text-sm opacity-80 uppercase">
          Command Center
        </p>

        {/* Loading Indicator */}
        <div className="mt-12 flex space-x-2">
          <div className="w-2.5 h-2.5 bg-[var(--primary)] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-2.5 h-2.5 bg-[var(--primary)] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-2.5 h-2.5 bg-[var(--primary)] rounded-full animate-bounce"></div>
        </div>
      </div>
      
    </div>
  );
};

export default Splash;
