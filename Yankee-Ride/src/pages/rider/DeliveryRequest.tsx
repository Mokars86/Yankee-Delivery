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
      <div className="animate-fade-in" style={{
        height: '100svh',
        background: 'linear-gradient(160deg, #1E7A28 0%, #2E9E3A 55%, #3DB84A 100%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        color: '#fff', padding: '1.5rem', position: 'relative', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: '-10%', left: '-20%', width: '60%', height: '40%', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(80px)' }} />
        
        <div className="animate-bounce" style={{
          width: '6rem', height: '6rem', background: '#fff', borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem',
          boxShadow: '0 12px 40px rgba(0,0,0,0.25)', position: 'relative', zIndex: 10
        }}>
          <CheckCircle2 size={48} color="var(--primary)" />
        </div>
        <h1 style={{ fontSize: '1.875rem', fontWeight: 800, marginBottom: '0.5rem', textAlign: 'center', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>Order Accepted!</h1>
        <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.9)', fontSize: '1.125rem', fontWeight: 500 }}>Navigating to pickup...</p>
        
        <button 
           onClick={() => navigate('/rider/dashboard')}
           style={{
             marginTop: '3rem', background: 'rgba(255,255,255,0.2)', color: '#fff',
             border: '1px solid rgba(255,255,255,0.5)', padding: '0.75rem 2rem', borderRadius: 'var(--radius-full)',
             fontWeight: 700, backdropFilter: 'blur(12px)'
           }}
        >
          Return to Dashboard
        </button>
      </div>
    );
  }

  if (status === 'declined') {
     return (
       <div className="animate-fade-in" style={{
         height: '100svh', background: '#111827', display: 'flex', flexDirection: 'column',
         alignItems: 'center', justifyContent: 'center', color: '#fff', padding: '1.5rem', position: 'relative', overflow: 'hidden'
       }}>
         <div style={{
           width: '5rem', height: '5rem', background: '#1F2937', borderRadius: '50%',
           display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem',
           border: '1px solid #374151'
         }}>
           <span style={{ fontSize: '1.875rem', fontWeight: 700, color: '#9CA3AF' }}>×</span>
         </div>
         <h1 style={{ fontSize: '1.875rem', fontWeight: 800, marginBottom: '0.5rem', textAlign: 'center', color: '#D1D5DB' }}>Order Declined</h1>
         <p style={{ textAlign: 'center', color: '#6B7280', fontWeight: 500, letterSpacing: '0.025em' }}>Returning to dashboard...</p>
       </div>
     );
  }

  // Incoming Request View
  return (
    <div className="animate-fade-in" style={{
      height: '100svh', display: 'flex', flexDirection: 'column', background: '#111827', color: '#fff', position: 'relative', overflow: 'hidden'
    }}>
      
      {/* Map Background Simulation */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.4, mixBlendMode: 'screen', transform: 'scale(1.1)' }}>
        <div style={{ width: '100%', height: '100%', background: "url('https://api.mapbox.com/styles/v1/mapbox/dark-v11/static/-0.1276,51.5072,13,0/600x800?access_token=pk.eyJ1IjoiZGVsZWdpZSIsImEiOiJjbGo4azlkZjYwcHI0M2xseWNzcWltd3FiIn0.KxZtZzjD_7s_tVw5-7H7_Q')", backgroundSize: 'cover', backgroundPosition: 'center', filter: 'grayscale(100%) contrast(150%)' }} />
      </div>
      
      {/* Radar Ping Animation */}
      <div style={{ position: 'absolute', top: '33.333%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 0, width: '8rem', height: '8rem' }}>
        <div className="animate-ping" style={{ position: 'absolute', inset: 0, border: '4px solid var(--primary)', borderRadius: '50%', opacity: 0, animationDuration: '2s' }}></div>
        <div className="animate-ping" style={{ position: 'absolute', inset: 0, border: '4px solid var(--primary)', borderRadius: '50%', opacity: 0, animationDuration: '2s', animationDelay: '0.5s' }}></div>
        <div style={{ position: 'absolute', inset: '1rem', background: 'rgba(46, 158, 58, 0.2)', backdropFilter: 'blur(4px)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 0 30px rgba(46, 158, 58, 0.5)' }}>
           <MapPin size={32} color="#fff" fill="var(--primary)" />
        </div>
      </div>

      {/* Header */}
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 'env(safe-area-inset-top, 1.5rem) 1.5rem 1.5rem' }}>
        <button onClick={handleDecline} style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(12px)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer' }}>
          <ArrowLeft size={20} color="#fff" style={{ position: 'relative', right: '1px' }} />
        </button>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
          <h2 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.625rem', color: '#9CA3AF', fontWeight: 700, marginBottom: '0.125rem' }}>Delivery Request</h2>
          <div style={{ background: 'rgba(46, 158, 58, 0.2)', backdropFilter: 'blur(12px)', color: 'var(--primary-light)', fontWeight: 900, fontSize: '1.125rem', padding: '0.375rem 1rem', borderRadius: 'var(--radius-full)', border: '1px solid rgba(46, 158, 58, 0.3)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Clock size={16} className="animate-pulse" />
            00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
          </div>
        </div>
        <div style={{ width: '2.5rem' }} /> {/* Spacer */}
      </div>

      <div style={{ flex: 1 }} />

      {/* Bottom Information Card */}
      <div style={{ position: 'relative', zIndex: 10, background: 'var(--surface-color)', color: 'var(--text-main)', borderRadius: '2.5rem 2.5rem 0 0', padding: '2rem 1.5rem calc(env(safe-area-inset-bottom, 0px) + 1.5rem)', boxShadow: '0 -10px 40px rgba(0,0,0,0.2)' }}>
        
        {/* Payout Head */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.5rem' }}>
          <div>
            <p style={{ color: 'var(--text-muted)', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Estimated Payout</p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem' }}>
              <span style={{ fontSize: '3rem', fontWeight: 900, letterSpacing: '-0.05em', color: 'var(--text-main)', lineHeight: 1 }}>$8.50</span>
            </div>
          </div>
          <div style={{ background: 'var(--primary-bg)', width: '4rem', height: '4rem', borderRadius: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(46, 158, 58, 0.2)', boxShadow: 'var(--shadow-sm)' }}>
             <CircleDollarSign size={32} color="var(--primary)" />
          </div>
        </div>

        {/* Route Details */}
        <div style={{ position: 'relative', marginBottom: '2rem' }}>
           {/* Connecting Line */}
           <div style={{ position: 'absolute', left: '1rem', top: '1.25rem', bottom: '1.5rem', width: '2px', background: 'var(--border-color)' }} />

           {/* Pickup */}
           <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem', position: 'relative' }}>
             <div style={{ background: 'var(--text-main)', width: '2rem', height: '2rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10, border: '3px solid var(--surface-color)', boxShadow: 'var(--shadow-sm)', flexShrink: 0 }}>
                <span style={{ width: '0.625rem', height: '0.625rem', background: '#fff', borderRadius: '50%', display: 'block' }} />
             </div>
             <div>
                <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.125rem' }}>Pickup • 1.2 mi away</p>
                <h3 style={{ fontWeight: 800, fontSize: '1.125rem', color: 'var(--text-main)', lineHeight: 1.25 }}>Burger King (Times Square)</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>120 W 42nd St</p>
             </div>
           </div>

           {/* Drop-off */}
           <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', position: 'relative' }}>
             <div style={{ background: 'var(--primary)', width: '2rem', height: '2rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10, border: '3px solid var(--surface-color)', boxShadow: 'var(--shadow-sm)', flexShrink: 0 }}>
                <MapPin size={14} color="#fff" fill="#fff" />
             </div>
             <div>
                <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.125rem' }}>Drop-off • 2.5 mi from pickup</p>
                <h3 style={{ fontWeight: 800, fontSize: '1.125rem', color: 'var(--text-main)', lineHeight: 1.25 }}>Empire State Building</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Apt 4B</p>
             </div>
           </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button 
            onClick={handleDecline} 
            style={{ width: '4rem', height: '4rem', borderRadius: '1.25rem', background: 'var(--bg-color)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', cursor: 'pointer', flexShrink: 0 }}
          >
            <span style={{ fontSize: '1.875rem', lineHeight: 1, fontWeight: 500, marginBottom: '0.25rem' }}>×</span>
          </button>
          
          <button 
            onClick={handleAccept} 
            style={{ flex: 1, background: 'var(--primary)', color: '#fff', borderRadius: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '1.25rem', letterSpacing: '0.025em', boxShadow: '0 4px 16px rgba(46, 158, 58, 0.4)', border: 'none', cursor: 'pointer', gap: '0.75rem', transition: 'all 0.2s' }}
          >
            ACCEPT ORDER
            <Navigation size={20} fill="#fff" style={{ transform: 'rotate(45deg)' }} />
          </button>
        </div>

      </div>

    </div>
  );
};

export default DeliveryRequest;
