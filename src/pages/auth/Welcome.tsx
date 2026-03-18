import { useNavigate } from 'react-router-dom';
import { ShoppingBag, Store } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

const features = [
  { icon: '🍔', label: 'Food',      color: '#FFF3E0', border: '#F5A623' },
  { icon: '🛒', label: 'Groceries', color: '#E8F5E9', border: '#2E9E3A' },
  { icon: '💊', label: 'Pharmacy',  color: '#E3F2FD', border: '#2196F3' },
  { icon: '📦', label: 'Parcels',   color: '#F3E5F5', border: '#9C27B0' },
];

const Welcome = () => {
  const navigate = useNavigate();
  const { setRole } = useAppContext();

  const handleSelect = (role: 'customer' | 'merchant') => {
    setRole(role);
    navigate('/auth/login');
  };

  return (
    <div className="animate-fade-in" style={{
      minHeight: '100svh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'var(--surface-color)',
      overflow: 'hidden',
    }}>

      {/* ── Hero ──────────────────────────────── */}
      <div style={{
        background: 'linear-gradient(160deg, #1E7A28 0%, #2E9E3A 55%, #3DB84A 100%)',
        padding: 'calc(var(--safe-top) + 3rem) 1.5rem 3.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.25rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative circles */}
        <div style={{ position: 'absolute', top: '-15%', right: '-20%', width: '20rem', height: '20rem', borderRadius: '50%', background: 'rgba(255,255,255,0.07)' }} />
        <div style={{ position: 'absolute', bottom: '-10%', left: '-15%', width: '16rem', height: '16rem', borderRadius: '50%', background: 'rgba(245,166,35,0.15)' }} />

        {/* Logo */}
        <div style={{
          width: '7.5rem', height: '7.5rem',
          borderRadius: '2.25rem',
          background: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 16px 48px rgba(0,0,0,0.25)',
          padding: '0.6rem',
          overflow: 'hidden',
          zIndex: 1,
        }}>
          <img src="/logo.png" alt="Yankee Delivery" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>

        {/* Text */}
        <div style={{ textAlign: 'center', zIndex: 1 }}>
          <h1 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 8vw, 2.5rem)', fontWeight: 900, letterSpacing: '-0.03em', margin: 0 }}>
            Welcome to<br />Yankee!
          </h1>
          <p style={{ color: '#F5A623', fontWeight: 600, fontSize: '1rem', marginTop: '0.5rem', letterSpacing: '0.02em' }}>
            Fast. Reliable. Everywhere.
          </p>
        </div>

        {/* Wave bottom */}
        <div style={{ position: 'absolute', bottom: -1, left: 0, right: 0, lineHeight: 0 }}>
          <svg viewBox="0 0 375 40" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '2.5rem' }}>
            <path d="M0,30 C100,0 275,60 375,20 L375,40 L0,40 Z" fill="var(--surface-color)" />
          </svg>
        </div>
      </div>

      {/* ── Features Grid ─────────────────────── */}
      <div style={{ padding: '1.75rem 1.5rem 1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: 500, margin: 0 }}>
          What do you need today?
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
          {features.map(f => (
            <div key={f.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.45rem' }}>
              <div style={{
                width: '3.5rem', height: '3.5rem',
                borderRadius: 'var(--radius-xl)',
                background: f.color,
                border: `1.5px solid ${f.border}22`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.6rem',
                boxShadow: 'var(--shadow-sm)',
              }}>
                {f.icon}
              </div>
              <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-main)' }}>{f.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA Buttons ───────────────────────── */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 1.5rem calc(var(--safe-bottom) + 2rem)', gap: '0.875rem' }}>
        <button
          className="btn btn-primary btn-full"
          onClick={() => handleSelect('customer')}
          style={{ padding: '1.05rem', fontSize: '1rem', borderRadius: 'var(--radius-xl)', boxShadow: '0 6px 20px rgba(46,158,58,0.4)' }}
        >
          <ShoppingBag size={22} />
          Continue as Customer
        </button>
        <button
          className="btn btn-outline btn-full"
          onClick={() => handleSelect('merchant')}
          style={{ padding: '1.05rem', fontSize: '1rem', borderRadius: 'var(--radius-xl)' }}
        >
          <Store size={22} />
          Continue as Merchant
        </button>
        <p className="text-muted text-xs text-center" style={{ marginTop: '0.1rem' }}>
          By continuing you agree to our <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Terms</span> &amp; <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
