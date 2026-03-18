import { useNavigate } from 'react-router-dom';
import { ShoppingBag, Store } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

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
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 'calc(var(--safe-top) + 3rem) 1.5rem calc(var(--safe-bottom) + 2.5rem)',
      backgroundColor: 'var(--surface-color)',
    }}>
      {/* Hero */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', textAlign: 'center' }}>

        {/* Logo badge */}
        <div style={{
          width: '9rem', height: '9rem',
          borderRadius: '2.5rem',
          background: 'linear-gradient(145deg, #f0faf1, #d4f0d7)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 16px 48px rgba(46,158,58,0.22)',
          padding: '0.75rem',
          overflow: 'hidden',
        }}>
          <img
            src="/logo.png"
            alt="Yankee Delivery"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>

        <div>
          <h1 style={{ marginBottom: '0.5rem' }}>Welcome to<br />Yankee!</h1>
          <p style={{ maxWidth: '22rem', margin: '0 auto' }}>
            Order food, groceries, or packages — all in one app.
          </p>
        </div>

        {/* Feature pills */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '0.25rem' }}>
          {['🍔 Food', '🛒 Groceries', '💊 Pharmacy', '📦 Parcels'].map(label => (
            <span key={label} style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              color: 'var(--primary)',
              background: 'var(--primary-bg)',
              padding: '0.3rem 0.75rem',
              borderRadius: 'var(--radius-full)',
            }}>{label}</span>
          ))}
        </div>
      </div>

      {/* Role buttons */}
      <div style={{ width: '100%', maxWidth: '24rem', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
        <button className="btn btn-primary btn-full" onClick={() => handleSelect('customer')}
          style={{ fontSize: '1rem', padding: '1rem', gap: '0.625rem' }}>
          <ShoppingBag size={22} />
          Continue as Customer
        </button>
        <button className="btn btn-outline btn-full" onClick={() => handleSelect('merchant')}
          style={{ fontSize: '1rem', padding: '1rem', gap: '0.625rem' }}>
          <Store size={22} />
          Continue as Merchant
        </button>
        <p className="text-muted text-xs text-center" style={{ marginTop: '0.25rem' }}>
          By continuing you agree to our Terms &amp; Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
