import { DollarSign, ShoppingBag, PackageCheck, Clock, TrendingUp, BarChart3, Package } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Dashboard = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  const metrics = [
    { title: "Today's Revenue", value: '$452.80', icon: DollarSign, bg: 'linear-gradient(135deg,#E8F5E9,#C8E6C9)', iconBg: '#2E9E3A', trend: '+12.5%' },
    { title: "Today's Orders",  value: '34',      icon: ShoppingBag, bg: 'linear-gradient(135deg,#E3F2FD,#BBDEFB)', iconBg: '#2196F3', trend: '+5.2%' },
    { title: "Pending",         value: '7',        icon: Clock,       bg: 'linear-gradient(135deg,#FFF3E0,#FFE0B2)', iconBg: '#F5A623', urgent: true },
    { title: "Completed",       value: '27',       icon: PackageCheck,bg: 'linear-gradient(135deg,#F3E5F5,#E1BEE7)', iconBg: '#9C27B0' },
  ];

  const quickActions = [
    { label: 'Products', icon: Package, action: () => navigate('/merchant/products') },
    { label: 'Analytics', icon: BarChart3, action: () => navigate('/merchant/analytics') },
    { label: 'Orders', icon: ShoppingBag, action: () => navigate('/merchant/orders') },
  ];

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', padding: '1rem', paddingBottom: '1.5rem', backgroundColor: 'var(--bg-color)', minHeight: '100%' }}>

      {/* ── Header ─────────────────────────────── */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem', fontWeight: 600, margin: '0 0 0.15rem' }}>Good evening 👋</p>
          <h1 style={{ fontWeight: 900, fontSize: '1.25rem', margin: 0, letterSpacing: '-0.02em' }}>Burger King</h1>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Open/Closed toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.4rem',
              padding: '0.4rem 0.875rem',
              borderRadius: 'var(--radius-full)',
              border: 'none', cursor: 'pointer',
              fontWeight: 700, fontSize: '0.78rem',
              background: isOpen ? 'var(--primary-bg)' : '#FEE2E2',
              color: isOpen ? 'var(--primary)' : 'var(--danger)',
              transition: 'all var(--transition-fast)',
            }}
          >
            <span style={{ width: '0.55rem', height: '0.55rem', borderRadius: '50%', background: isOpen ? 'var(--primary)' : 'var(--danger)', display: 'inline-block' }} />
            {isOpen ? 'Open' : 'Closed'}
          </button>
          <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '2px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
            <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=80&q=80" alt="Store" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </header>

      {/* ── Metrics grid ──────────────────────── */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
        {metrics.map((m, idx) => (
          <div key={idx} className="card" style={{ padding: '1rem', position: 'relative', overflow: 'hidden', background: m.bg, border: 'none' }}>
            <div style={{
              width: '2.5rem', height: '2.5rem', borderRadius: 'var(--radius-lg)',
              background: m.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '0.75rem', boxShadow: `0 4px 12px ${m.iconBg}55`,
            }}>
              <m.icon size={18} color="#fff" />
            </div>
            {m.trend && (
              <div style={{
                position: 'absolute', top: '0.875rem', right: '0.875rem',
                display: 'flex', alignItems: 'center', gap: '2px',
                background: 'rgba(46,158,58,0.15)',
                color: '#1E7A28',
                padding: '0.2rem 0.45rem', borderRadius: 'var(--radius-full)',
                fontSize: '0.68rem', fontWeight: 800,
              }}>
                <TrendingUp size={10} /> {m.trend}
              </div>
            )}
            {m.urgent && (
              <div style={{ position: 'absolute', top: '0.875rem', right: '0.875rem', width: '0.65rem', height: '0.65rem', borderRadius: '50%', background: 'var(--danger)' }} className="animate-ping" />
            )}
            <p style={{ color: 'var(--text-muted)', fontSize: '0.72rem', fontWeight: 600, margin: '0 0 0.25rem' }}>{m.title}</p>
            <h2 style={{ fontWeight: 900, fontSize: '1.5rem', margin: 0, letterSpacing: '-0.03em' }}>{m.value}</h2>
          </div>
        ))}
      </section>

      {/* ── Pending alert ─────────────────────── */}
      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.875rem' }}>
          <h2 style={{ fontWeight: 800, fontSize: '1rem', margin: 0 }}>Action Needed</h2>
          <span style={{ color: 'var(--primary)', fontSize: '0.82rem', fontWeight: 700, cursor: 'pointer' }} onClick={() => navigate('/merchant/orders')}>
            View all
          </span>
        </div>
        <div style={{
          background: 'linear-gradient(135deg, #1E7A28, #3DB84A)',
          borderRadius: 'var(--radius-2xl)',
          padding: '1.25rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          boxShadow: '0 8px 24px rgba(46,158,58,0.35)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: '-20%', right: '25%', width: '6rem', height: '6rem', borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', zIndex: 1 }}>
            <div style={{ background: 'rgba(255,255,255,0.2)', padding: '0.75rem', borderRadius: 'var(--radius-lg)', backdropFilter: 'blur(4px)' }}>
              <Clock size={22} color="#fff" />
            </div>
            <div>
              <h3 style={{ color: '#fff', fontWeight: 800, fontSize: '1rem', margin: '0 0 0.2rem' }}>7 Pending Orders</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.78rem', margin: 0, fontWeight: 500 }}>Waiting for your acceptance</p>
            </div>
          </div>
          <button
            onClick={() => navigate('/merchant/orders')}
            style={{
              background: '#fff', color: 'var(--primary)',
              border: 'none', cursor: 'pointer',
              fontWeight: 800, fontSize: '0.85rem',
              padding: '0.6rem 1.1rem',
              borderRadius: 'var(--radius-xl)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              transition: 'transform var(--transition-fast)',
              zIndex: 1, flexShrink: 0,
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            Review
          </button>
        </div>
      </section>

      {/* ── Quick actions ─────────────────────── */}
      <section>
        <h2 style={{ fontWeight: 800, fontSize: '1rem', margin: '0 0 0.875rem' }}>Quick Actions</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
          {quickActions.map(action => (
            <button
              key={action.label}
              onClick={action.action}
              className="card"
              style={{
                border: 'none', cursor: 'pointer', background: 'var(--surface-color)',
                padding: '1rem 0.75rem',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
                transition: 'transform var(--transition-fast), box-shadow var(--transition-fast)',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = ''; }}
            >
              <div style={{ width: '2.75rem', height: '2.75rem', borderRadius: 'var(--radius-lg)', background: 'var(--primary-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <action.icon size={20} color="var(--primary)" />
              </div>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-main)' }}>{action.label}</span>
            </button>
          ))}
        </div>
      </section>

    </div>
  );
};
export default Dashboard;
