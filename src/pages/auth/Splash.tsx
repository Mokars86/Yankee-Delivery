import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Package } from 'lucide-react';

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/welcome', { replace: true });
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-[var(--primary)] text-white animate-fade-in" style={{ height: '100vh', backgroundColor: 'var(--primary)', color: 'white' }}>
      <div className="flex flex-col items-center animate-pulse" style={{ animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}>
        <Package size={80} strokeWidth={1.5} />
        <h1 className="mt-4 text-4xl font-bold tracking-tight">Yankee Delivery</h1>
        <p className="mt-2 text-lg opacity-90 font-medium">Fast. Reliable. Everywhere.</p>
      </div>

      <div className="absolute bottom-16 flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" style={{ animation: 'spin 1s linear infinite', borderTopColor: 'transparent', borderRadius: '50%', borderWidth: '4px' }}></div>
      </div>
      
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
export default Splash;
