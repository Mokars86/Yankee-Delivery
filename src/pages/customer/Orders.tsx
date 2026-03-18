import { ArrowLeft, MapPin, Navigation, PackageCheck, CookingPot, CheckCircle2, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const stages = [
  { id: 1, name: 'Order received',  time: '12:30 PM', icon: PackageCheck, status: 'completed' },
  { id: 2, name: 'Preparing',       time: '12:35 PM', icon: CookingPot,   status: 'completed' },
  { id: 3, name: 'Rider picking up',time: '12:45 PM', icon: MapPin,       status: 'active' },
  { id: 4, name: 'On the way',      time: '--:--',    icon: Navigation,   status: 'pending' },
  { id: 5, name: 'Delivered',       time: '--:--',    icon: CheckCircle2, status: 'pending' },
];

const Orders = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in" style={{ backgroundColor: 'var(--surface-color)', minHeight: '100svh', paddingBottom: '2rem', display: 'flex', flexDirection: 'column' }}>

      {/* ── Map placeholder ──────────────────── */}
      <div style={{ position: 'relative', height: '17rem', flexShrink: 0, overflow: 'hidden' }}>
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80"
          alt="Map tracking"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        {/* Overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.2))' }} />

        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          style={{
            position: 'absolute', top: 'calc(1rem + var(--safe-top))', left: '1rem',
            width: '2.5rem', height: '2.5rem',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.9)',
            backdropFilter: 'blur(8px)',
            border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          <ArrowLeft size={20} />
        </button>

        {/* Rider pin */}
        <div className="animate-bounce" style={{ position: 'absolute', top: '45%', left: '33%' }}>
          <div style={{
            width: '3rem', height: '3rem', borderRadius: '50%',
            background: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
            border: '3px solid var(--primary)',
            fontSize: '1.25rem',
          }}>
            🛵
          </div>
        </div>

        {/* Destination pin */}
        <div style={{ position: 'absolute', top: '30%', right: '25%' }}>
          <div style={{
            width: '2.25rem', height: '2.25rem', borderRadius: '50%',
            background: 'var(--text-main)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
          }}>
            <MapPin size={14} color="#fff" />
          </div>
        </div>

        {/* ETA pill */}
        <div style={{
          position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)',
          background: '#fff',
          padding: '0.5rem 1.25rem',
          borderRadius: 'var(--radius-full)',
          boxShadow: 'var(--shadow-lg)',
          display: 'flex', alignItems: 'center', gap: '0.5rem',
          whiteSpace: 'nowrap',
        }}>
          <span style={{ width: '0.6rem', height: '0.6rem', borderRadius: '50%', background: 'var(--primary)', display: 'inline-block' }} className="animate-ping" />
          <span style={{ fontWeight: 800, fontSize: '0.9rem' }}>15 mins away</span>
        </div>
      </div>

      {/* ── Bottom sheet ─────────────────────── */}
      <div style={{
        flex: 1,
        backgroundColor: 'var(--surface-color)',
        borderRadius: '1.75rem 1.75rem 0 0',
        marginTop: '-1.5rem',
        padding: '1.5rem 1.25rem',
        position: 'relative', zIndex: 1,
        boxShadow: '0 -8px 24px rgba(0,0,0,0.08)',
      }}>

        {/* Order title row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
          <div>
            <h2 style={{ fontSize: '1.15rem', fontWeight: 900, margin: '0 0 0.25rem', letterSpacing: '-0.02em' }}>Order #84J92Z</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', margin: 0, fontWeight: 500 }}>Burger King · $11.98</p>
          </div>
          <button style={{
            background: 'var(--primary-bg)', color: 'var(--primary)',
            border: 'none', cursor: 'pointer',
            padding: '0.45rem 0.875rem',
            borderRadius: 'var(--radius-lg)',
            fontSize: '0.82rem', fontWeight: 700,
          }}>
            Help
          </button>
        </div>

        {/* ── Rider card ───────────────────────── */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '0.875rem',
          background: 'var(--bg-color)',
          borderRadius: 'var(--radius-xl)',
          padding: '0.875rem',
          marginBottom: '1.5rem',
          border: '1px solid var(--border-color)',
        }}>
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80"
            alt="Rider"
            style={{ width: '3.25rem', height: '3.25rem', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--primary)' }}
          />
          <div style={{ flex: 1 }}>
            <h3 style={{ fontWeight: 800, fontSize: '0.95rem', margin: 0 }}>Michael K.</h3>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: '0.2rem 0 0', fontWeight: 600 }}>
              ⭐ 4.9 &nbsp;·&nbsp; 2,410 Deliveries
            </p>
          </div>
          <button style={{
            width: '2.5rem', height: '2.5rem', borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--primary-light), var(--primary))',
            color: '#fff',
            border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(46,158,58,0.4)',
          }}>
            <Phone size={16} />
          </button>
        </div>

        {/* ── Timeline ─────────────────────────── */}
        <h3 style={{ fontWeight: 800, fontSize: '1rem', margin: '0 0 1.25rem', letterSpacing: '-0.01em' }}>Track Order</h3>
        <div style={{ position: 'relative', paddingLeft: '2.75rem' }}>
          {/* Connector line */}
          <div style={{
            position: 'absolute', left: '1.125rem', top: '1.25rem', bottom: '1.25rem',
            width: '2px',
            background: 'linear-gradient(to bottom, var(--primary) 40%, var(--border-color) 40%)',
          }} />

          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            const isCompleted = stage.status === 'completed';
            const isActive = stage.status === 'active';
            return (
              <div key={stage.id} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: idx < stages.length - 1 ? '1.25rem' : 0 }}>
                {/* Step icon */}
                <div style={{
                  position: 'absolute', left: 0,
                  width: '2.25rem', height: '2.25rem', borderRadius: '50%',
                  background: isCompleted ? 'var(--primary)' : isActive ? '#fff' : 'var(--bg-color)',
                  border: isActive ? '2.5px solid var(--primary)' : 'none',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: isCompleted ? '0 4px 12px rgba(46,158,58,0.35)' : 'var(--shadow-sm)',
                  transition: 'all var(--transition-fast)',
                  zIndex: 1,
                }}>
                  <Icon size={13} color={isCompleted ? '#fff' : isActive ? 'var(--primary)' : 'var(--text-muted)'} strokeWidth={isActive ? 3 : 2} />
                </div>

                <div style={{ flex: 1, paddingTop: '0.35rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '0.88rem', margin: 0, color: stage.status === 'pending' ? 'var(--text-muted)' : 'var(--text-main)' }}>
                      {stage.name}
                    </h4>
                    {isActive && (
                      <p style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 600, margin: '0.2rem 0 0' }}>
                        Driver is at the restaurant
                      </p>
                    )}
                  </div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: stage.status === 'pending' ? 'var(--border-color)' : 'var(--text-muted)', flexShrink: 0 }}>
                    {stage.time}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Orders;
