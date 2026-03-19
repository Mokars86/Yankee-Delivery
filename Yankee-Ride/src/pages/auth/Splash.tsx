import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading/auth check, then navigate to rider dashboard
    const timer = setTimeout(() => {
      navigate('/login');
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={{
      height: '100%',
      minHeight: '100svh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(160deg, #1E7A28 0%, #2E9E3A 55%, #3DB84A 100%)',
      color: '#fff',
      gap: '0.75rem',
      padding: '2rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background decorative circles */}
      <div style={{
        position: 'absolute', top: '-8%', right: '-18%',
        width: '22rem', height: '22rem',
        borderRadius: '50%', background: 'rgba(255,255,255,0.06)',
      }} />
      <div style={{
        position: 'absolute', bottom: '5%', left: '-15%',
        width: '18rem', height: '18rem',
        borderRadius: '50%', background: 'rgba(245,166,35,0.12)',
      }} />
      <div style={{
        position: 'absolute', top: '30%', left: '-5%',
        width: '8rem', height: '8rem',
        borderRadius: '50%', background: 'rgba(255,255,255,0.04)',
      }} />

      {/* Logo + App name */}
      <div className="animate-pulse" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem', zIndex: 1 }}>
        <div style={{
          width: '7rem', height: '7rem',
          borderRadius: '2rem',
          background: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 12px 40px rgba(0,0,0,0.20)',
          padding: '0.5rem',
          overflow: 'hidden',
        }}>
          <img
            src="/logo.png"
            alt="Yankee Ride Logo"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(1.75rem, 7vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.03em', margin: 0 }}>
            Yankee Ride
          </h1>
          <p style={{ fontSize: '1rem', fontWeight: 600, margin: '0.25rem 0 0', letterSpacing: '0.03em', color: '#F5A623', textShadow: '0 1px 4px rgba(0,0,0,0.20)' }}>
            Deliver with Speed
          </p>
        </div>
      </div>

      {/* Loading spinner */}
      <div style={{ position: 'absolute', bottom: 'calc(2.5rem + var(--safe-bottom))', zIndex: 1 }}>
        <div className="animate-spin" style={{
          width: '2.25rem', height: '2.25rem',
          border: '3px solid rgba(255,255,255,0.30)',
          borderTopColor: '#fff',
          borderRadius: '50%',
        }} />
      </div>
    </div>
  );
};

export default Splash;
