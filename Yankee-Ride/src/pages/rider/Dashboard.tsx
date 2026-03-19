import { useState } from 'react';
import { MapPin, Navigation, Bike, Plus, CircleDollarSign, ArrowUpRight, Clock, Star, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [isOnline, setIsOnline] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '1rem', paddingBottom: '0.5rem' }}>
      
      {/* ── Header ──────────────────────────────── */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 'env(safe-area-inset-top, 0px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            width: '3.5rem', height: '3.5rem',
            borderRadius: 'var(--radius-full)',
            background: 'var(--surface-color)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: 'var(--shadow-sm)',
            border: '2px solid #fff',
            position: 'relative'
          }}>
            <img 
              src="https://ui-avatars.com/api/?name=Alex+Rider&background=random" 
              alt="Profile" 
              style={{ width: '100%', height: '100%', borderRadius: 'var(--radius-full)', objectFit: 'cover' }}
            />
            {/* Status Dot on Avatar */}
            <div style={{
              position: 'absolute', bottom: '0', right: '0',
              width: '14px', height: '14px', borderRadius: '50%',
              border: '2px solid #fff',
              background: isOnline ? 'var(--primary)' : 'var(--text-muted)'
            }} />
          </div>
          <div>
            <p className="text-muted" style={{ fontSize: '0.7rem', fontWeight: 600, marginBottom: '0.1rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Welcome back
            </p>
            <div style={{ fontWeight: 800, fontSize: '1.15rem', color: 'var(--text-main)', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              Alex Rider
            </div>
          </div>
        </div>

        {/* Rating + Bell */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            background: 'var(--surface-color)',
            padding: '0.35rem 0.75rem',
            borderRadius: 'var(--radius-full)',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex', alignItems: 'center', gap: '0.35rem',
            border: '1px solid var(--border-color)'
          }}>
            <Star size={16} fill="var(--primary)" color="var(--primary)" />
            <span style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--text-main)' }}>4.9</span>
          </div>
          <button className="icon-btn icon-btn-ghost" style={{ position: 'relative' }}>
            <Bell size={20} />
            <span style={{
              position: 'absolute', top: '8px', right: '8px',
              width: '8px', height: '8px', borderRadius: '50%',
              background: 'var(--danger)',
              border: '2px solid var(--surface-color)',
            }} />
          </button>
        </div>
      </header>

      {/* ── Go Online / Offline Toggle Card ────── */}
      <div style={{
        position: 'relative',
        borderRadius: 'var(--radius-2xl)',
        background: isOnline ? 'linear-gradient(130deg, #1E7A28 0%, #3DB84A 60%, #1E7A28 140%)' : 'var(--surface-color)',
        border: isOnline ? 'none' : '1px solid var(--border-color)',
        boxShadow: isOnline ? '0 8px 24px rgba(46,158,58,0.30)' : 'var(--shadow-sm)',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'hidden',
        transition: 'all var(--transition-normal)'
      }}>
        {/* Animated background glow when online */}
        {isOnline && (
          <>
            <div style={{ position: 'absolute', top: '-20%', right: '30%', width: '12rem', height: '12rem', borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
            <div style={{ position: 'absolute', bottom: '-40%', right: '-10%', width: '10rem', height: '10rem', borderRadius: '50%', background: 'rgba(245,166,35,0.15)' }} />
          </>
        )}

        <div style={{ zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
           <div style={{
             width: '4rem', height: '4rem',
             borderRadius: 'var(--radius-full)',
             display: 'flex', alignItems: 'center', justifyContent: 'center',
             background: isOnline ? 'rgba(255,255,255,0.2)' : 'var(--bg-color)',
             color: isOnline ? '#fff' : 'var(--text-muted)',
             marginBottom: '1rem',
             boxShadow: isOnline ? 'none' : 'inset 0 2px 4px rgba(0,0,0,0.04)'
           }}>
             <Bike size={32} />
           </div>
           
           <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: isOnline ? '#fff' : 'var(--text-main)', margin: '0 0 0.35rem' }}>
             {isOnline ? "You're Online!" : "You're Offline"}
           </h2>
           
           <p style={{ fontSize: '0.85rem', color: isOnline ? 'rgba(255,255,255,0.85)' : 'var(--text-muted)', textAlign: 'center', margin: '0 0 1.5rem', fontWeight: 500 }}>
             {isOnline ? "Waiting for delivery requests in your area..." : "Go online to start receiving delivery requests."}
           </p>
           
           <button 
              onClick={() => setIsOnline(!isOnline)}
              style={{
                width: '100%',
                padding: '1.05rem',
                borderRadius: 'var(--radius-xl)',
                fontWeight: 800,
                fontSize: '1.05rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.625rem',
                transition: 'all var(--transition-normal)',
                cursor: 'pointer',
                border: 'none',
                background: isOnline ? '#fff' : 'var(--primary)',
                color: isOnline ? 'var(--danger)' : '#fff',
                boxShadow: isOnline ? '0 4px 14px rgba(0,0,0,0.1)' : '0 4px 14px rgba(46,158,58,0.35)',
              }}
           >
             <Navigation size={22} fill={isOnline ? 'var(--danger)' : '#fff'} color={isOnline ? 'var(--danger)' : '#fff'} />
             {isOnline ? 'GO OFFLINE' : 'GO ONLINE'}
           </button>
        </div>
      </div>

      {/* Demo trigger: Simulate Request (Only for preview!) */}
      {isOnline && (
        <div className="animate-fade-in">
          <button 
            onClick={() => navigate('/rider/request')}
            style={{
              width: '100%',
              padding: '1rem',
              borderRadius: 'var(--radius-xl)',
              background: 'var(--accent-bg)',
              border: '2px dashed var(--accent)',
              color: '#d97706',
              fontWeight: 800,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
              cursor: 'pointer'
            }}
          >
            <Plus size={20} /> [Demo] Simulate Incoming Order
          </button>
        </div>
      )}

      {/* ── Today's Summary ────────────────────── */}
      <section style={{ paddingBottom: '0.5rem' }}>
        <div className="section-header">
          <h2 style={{ fontSize: '1.05rem', margin: 0 }}>Today's Summary</h2>
          <span className="see-all">View all</span>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
           
           {/* Earnings Card */}
           <div className="card" style={{
             background: 'var(--text-main)',
             color: '#fff',
             padding: '1.25rem',
             position: 'relative',
             overflow: 'hidden',
             display: 'flex', flexDirection: 'column', gap: '0.75rem'
           }}>
             <CircleDollarSign size={80} style={{ position: 'absolute', top: '-10px', right: '-15px', opacity: 0.1, color: '#fff' }} />
             <div style={{ zIndex: 1 }}>
               <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                 Earnings <ArrowUpRight size={14} color="var(--primary-light)" />
               </span>
               <div style={{ fontSize: '1.75rem', fontWeight: 900, marginTop: '0.35rem', letterSpacing: '-0.03em' }}>
                 $84.50
               </div>
             </div>
           </div>

           {/* Deliveries Card */}
           <div className="card" style={{
             padding: '1.25rem',
             position: 'relative',
             overflow: 'hidden',
             display: 'flex', flexDirection: 'column', gap: '0.75rem'
           }}>
             <MapPin size={80} style={{ position: 'absolute', top: '-10px', right: '-15px', color: 'var(--bg-color)', zIndex: 0 }} />
             <div style={{ zIndex: 1 }}>
               <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                 Deliveries
                 <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)' }} className="animate-pulse" />
               </span>
               <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginTop: '0.35rem' }}>
                 <span style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--text-main)', letterSpacing: '-0.03em' }}>12</span>
                 <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)' }}>trips</span>
               </div>
             </div>
           </div>

           {/* Online Time */}
           <div className="card" style={{
             gridColumn: '1 / -1',
             padding: '1rem 1.25rem',
             display: 'flex', alignItems: 'center', justifyContent: 'space-between'
           }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  width: '2.5rem', height: '2.5rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--primary-bg)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--primary)'
                }}>
                  <Clock size={18} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-main)' }}>Online Time</h4>
                  <p style={{ margin: 0, fontSize: '0.7rem', fontWeight: 500, color: 'var(--text-muted)' }}>Today</p>
                </div>
              </div>
              <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.02em' }}>
                4h <span style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>20m</span>
              </div>
           </div>

        </div>
      </section>
    
    </div>
  );
};

export default Dashboard;
