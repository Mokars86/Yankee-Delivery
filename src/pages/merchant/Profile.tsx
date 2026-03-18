import { User, LogOut, Settings, ChartBar, Store, HelpCircle, ChevronRight, Star, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

const menuItems = [
  { icon: Store,      label: 'Store Information',   color: '#E8F5E9', iconColor: '#2E9E3A' },
  { icon: User,       label: 'Account Settings',    color: '#E3F2FD', iconColor: '#2196F3' },
  { icon: ChartBar,   label: 'Business Insights',   color: '#F3E5F5', iconColor: '#9C27B0', action: 'analytics' },
  { icon: Settings,   label: 'App Settings',        color: '#FFF3E0', iconColor: '#F5A623' },
  { icon: HelpCircle, label: 'Merchant Support',    color: '#FCE4EC', iconColor: '#E91E63' },
];

const Profile = () => {
  const navigate = useNavigate();
  const { setRole } = useAppContext();

  const handleLogout = () => {
    setRole(null);
    navigate('/welcome');
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', minHeight: '100%', backgroundColor: 'var(--bg-color)' }}>

      {/* ── Hero banner ─────────────────────────── */}
      <div style={{
        background: 'linear-gradient(140deg, #1E7A28 0%, #2E9E3A 55%, #5BC466 100%)',
        padding: 'calc(var(--safe-top) + 2rem) 1.25rem 2.5rem',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '12rem', height: '12rem', borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
        <div style={{ position: 'absolute', bottom: '-25%', left: '-8%', width: '10rem', height: '10rem', borderRadius: '50%', background: 'rgba(245,166,35,0.15)' }} />

        {/* Logout */}
        <button
          onClick={handleLogout}
          style={{
            position: 'absolute', top: 'calc(var(--safe-top) + 1rem)', right: '1rem',
            display: 'flex', alignItems: 'center', gap: '0.35rem',
            background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)',
            border: 'none', cursor: 'pointer',
            color: '#fff', fontWeight: 700, fontSize: '0.82rem',
            padding: '0.45rem 0.875rem', borderRadius: 'var(--radius-full)',
          }}
        >
          <LogOut size={15} /> Logout
        </button>

        {/* Store info */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', position: 'relative', zIndex: 1 }}>
          <div style={{ borderRadius: '1.25rem', overflow: 'hidden', border: '3px solid rgba(255,255,255,0.35)', boxShadow: '0 6px 20px rgba(0,0,0,0.2)', flexShrink: 0 }}>
            <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=100&q=80" alt="Store logo" style={{ width: '4.5rem', height: '4.5rem', objectFit: 'cover', display: 'block' }} />
          </div>
          <div>
            <h1 style={{ color: '#fff', fontWeight: 900, fontSize: '1.3rem', margin: '0 0 0.2rem', letterSpacing: '-0.02em' }}>Burger King</h1>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.82rem', margin: '0 0 0.5rem', fontWeight: 500 }}>Fast Food · Open until 11 PM</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              {[1,2,3,4,5].map(s => <Star key={s} size={12} fill={s <= 4 ? '#F5A623' : 'rgba(255,255,255,0.3)'} color={s <= 4 ? '#F5A623' : 'rgba(255,255,255,0.3)'} />)}
              <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.72rem', fontWeight: 600 }}>4.8 · 1.2k reviews</span>
            </div>
          </div>
        </div>

        {/* Wave */}
        <div style={{ position: 'absolute', bottom: -1, left: 0, right: 0, lineHeight: 0 }}>
          <svg viewBox="0 0 375 30" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '1.875rem' }}>
            <path d="M0,20 C100,-5 275,40 375,10 L375,30 L0,30 Z" fill="var(--bg-color)" />
          </svg>
        </div>
      </div>

      {/* ── Quick stats ──────────────────────────── */}
      <div style={{ display: 'flex', gap: '0.75rem', padding: '1.25rem 1rem 0.75rem', marginTop: '-0.25rem' }}>
        {[
          { label: 'Total Orders', value: '1,247' },
          { label: 'Revenue',      value: '$8.4k' },
          { label: 'Rating',       value: '4.8 ⭐' },
        ].map(stat => (
          <div key={stat.label} className="card" style={{ flex: 1, padding: '0.875rem', textAlign: 'center' }}>
            <div style={{ fontWeight: 900, fontSize: '1rem', color: 'var(--primary)', letterSpacing: '-0.02em' }}>{stat.value}</div>
            <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontWeight: 600, marginTop: '0.15rem' }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* ── Menu list ─────────────────────────────── */}
      <div style={{ padding: '0 1rem 1rem' }}>
        <div className="card" style={{ overflow: 'hidden' }}>
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => { if (item.action === 'analytics') navigate('/merchant/analytics'); }}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '0.875rem 1rem',
                borderBottom: idx < menuItems.length - 1 ? '1px solid var(--border-color)' : 'none',
                cursor: 'pointer',
                transition: 'background var(--transition-fast)',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg-color)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: 'var(--radius-lg)', background: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <item.icon size={17} color={item.iconColor} />
                </div>
                <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{item.label}</span>
              </div>
              <ChevronRight size={16} color="var(--text-muted)" />
            </div>
          ))}
        </div>

        {/* Switch mode */}
        <button
          onClick={() => { setRole('customer'); navigate('/customer/home'); }}
          style={{
            marginTop: '1rem', width: '100%', padding: '1rem',
            borderRadius: 'var(--radius-xl)',
            border: '2px dashed #2196F3',
            background: '#E3F2FD',
            color: '#2196F3',
            fontWeight: 700, fontSize: '0.95rem',
            cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
            transition: 'background var(--transition-fast)',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = '#BBDEFB')}
          onMouseLeave={e => (e.currentTarget.style.background = '#E3F2FD')}
        >
          <ShoppingBag size={18} /> Switch to Customer Mode
        </button>
      </div>
    </div>
  );
};

export default Profile;
