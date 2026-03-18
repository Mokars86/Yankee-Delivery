import { User, LogOut, Settings, History, Heart, HelpCircle, ChevronRight, Store, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

const menuItems = [
  { icon: User,       label: 'Personal Details',  color: '#E3F2FD', iconColor: '#2196F3' },
  { icon: History,    label: 'Order History',      color: '#E8F5E9', iconColor: '#2E9E3A', action: 'orders' },
  { icon: Heart,      label: 'Favorites',          color: '#FFE4E4', iconColor: '#E53E3E', action: 'favorites' },
  { icon: Settings,   label: 'Settings',           color: '#F3E5F5', iconColor: '#9C27B0' },
  { icon: HelpCircle, label: 'Help & Support',     color: '#FFF3E0', iconColor: '#F5A623' },
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

      {/* ── Hero Banner ─────────────────────────── */}
      <div style={{
        background: 'linear-gradient(140deg, #1E7A28 0%, #2E9E3A 55%, #5BC466 100%)',
        padding: 'calc(var(--safe-top) + 2rem) 1.25rem 2.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative circles */}
        <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '12rem', height: '12rem', borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
        <div style={{ position: 'absolute', bottom: '-25%', left: '-8%', width: '10rem', height: '10rem', borderRadius: '50%', background: 'rgba(245,166,35,0.15)' }} />

        {/* Logout button */}
        <button
          onClick={handleLogout}
          style={{
            position: 'absolute', top: 'calc(var(--safe-top) + 1rem)', right: '1rem',
            display: 'flex', alignItems: 'center', gap: '0.35rem',
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(8px)',
            border: 'none', cursor: 'pointer',
            color: '#fff', fontWeight: 700, fontSize: '0.82rem',
            padding: '0.45rem 0.875rem', borderRadius: 'var(--radius-full)',
          }}
        >
          <LogOut size={15} /> Logout
        </button>

        {/* Avatar + info */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', zIndex: 1, position: 'relative' }}>
          <div style={{
            width: '4.5rem', height: '4.5rem', borderRadius: '50%',
            background: 'linear-gradient(135deg, #F5A623, #E8920F)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 900, fontSize: '1.4rem', color: '#fff',
            border: '3px solid rgba(255,255,255,0.4)',
            boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
            flexShrink: 0,
          }}>
            JD
          </div>
          <div>
            <h1 style={{ color: '#fff', fontWeight: 900, fontSize: '1.3rem', margin: '0 0 0.2rem', letterSpacing: '-0.02em' }}>John Doe</h1>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.82rem', margin: '0 0 0.5rem', fontWeight: 500 }}>+1 234 567 8900</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
              {[1,2,3,4,5].map(s => <Star key={s} size={12} fill={s <= 4 ? '#F5A623' : 'rgba(255,255,255,0.3)'} color={s <= 4 ? '#F5A623' : 'rgba(255,255,255,0.3)'} />)}
              <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.72rem', marginLeft: '0.25rem', fontWeight: 600 }}>Gold Member</span>
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

      {/* ── Stats row ─────────────────────────── */}
      <div style={{ display: 'flex', gap: '0.75rem', padding: '1.25rem 1rem 0.75rem', marginTop: '-0.25rem' }}>
        {[
          { label: 'Orders', value: '24' },
          { label: 'Saved', value: '3' },
          { label: 'Points', value: '1,290' },
        ].map(stat => (
          <div key={stat.label} className="card" style={{ flex: 1, padding: '0.875rem', textAlign: 'center' }}>
            <div style={{ fontWeight: 900, fontSize: '1.1rem', color: 'var(--primary)', letterSpacing: '-0.02em' }}>{stat.value}</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 600, marginTop: '0.15rem' }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* ── Menu list ─────────────────────────── */}
      <div style={{ padding: '0 1rem 1rem' }}>
        <div className="card" style={{ overflow: 'hidden' }}>
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => {
                if (item.action === 'orders') navigate('/customer/orders');
                else if (item.action === 'favorites') navigate('/customer/favorites');
              }}
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

        {/* Switch mode button */}
        <button
          onClick={() => { setRole('merchant'); navigate('/merchant/dashboard'); }}
          style={{
            marginTop: '1rem',
            width: '100%', padding: '1rem',
            borderRadius: 'var(--radius-xl)',
            border: '2px dashed var(--primary)',
            background: 'var(--primary-bg)',
            color: 'var(--primary)',
            fontWeight: 700, fontSize: '0.95rem',
            cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
            transition: 'background var(--transition-fast)',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'rgba(46,158,58,0.12)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'var(--primary-bg)')}
        >
          <Store size={18} /> Switch to Merchant Mode
        </button>
      </div>
    </div>
  );
};

export default Profile;
