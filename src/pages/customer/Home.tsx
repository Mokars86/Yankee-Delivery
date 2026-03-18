import { MapPin, Bell, Search, ChevronDown, Clock, Star, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const categories = [
  { id: 1, name: 'Food',      icon: '🍔', bg: 'linear-gradient(135deg,#FFF3E0,#FFE0B2)', shadow: 'rgba(245,166,35,0.25)' },
  { id: 2, name: 'Groceries', icon: '🛒', bg: 'linear-gradient(135deg,#E8F5E9,#C8E6C9)', shadow: 'rgba(46,158,58,0.2)' },
  { id: 3, name: 'Pharmacy',  icon: '💊', bg: 'linear-gradient(135deg,#E3F2FD,#BBDEFB)', shadow: 'rgba(33,150,243,0.2)' },
  { id: 4, name: 'Send',      icon: '📦', bg: 'linear-gradient(135deg,#F3E5F5,#E1BEE7)', shadow: 'rgba(156,39,176,0.2)' },
];

const restaurants = [
  {
    id: 1,
    name: 'Burger King',
    rating: 4.8,
    time: '20-30 min',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    tags: 'American · Fast Food',
    promo: '20% off',
  },
  {
    id: 2,
    name: 'Pizza Hut',
    rating: 4.5,
    time: '30-40 min',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    tags: 'Pizza · Italian',
    promo: null,
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in"
      style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '1rem', paddingBottom: '0.5rem' }}>

      {/* ── Header ──────────────────────────────── */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
          <div style={{
            width: '2.5rem', height: '2.5rem',
            borderRadius: 'var(--radius-full)',
            background: 'linear-gradient(135deg, var(--primary-light), var(--primary))',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(46,158,58,0.3)',
          }}>
            <MapPin size={16} color="#fff" />
          </div>
          <div>
            <p className="text-muted" style={{ fontSize: '0.7rem', fontWeight: 600, marginBottom: '0.1rem' }}>
              Deliver to
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2px', fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-main)' }}>
              Current Location <ChevronDown size={14} />
            </div>
          </div>
        </div>

        {/* Greeting + Bell */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button className="icon-btn icon-btn-ghost" style={{ position: 'relative' }}>
            <Bell size={20} />
            <span style={{
              position: 'absolute', top: '8px', right: '8px',
              width: '8px', height: '8px', borderRadius: '50%',
              background: 'var(--danger)',
              border: '2px solid var(--surface-color)',
            }} />
          </button>
          <div style={{
            width: '2.5rem', height: '2.5rem', borderRadius: 'var(--radius-full)',
            background: 'linear-gradient(135deg, #F5A623, #E8920F)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 800, fontSize: '0.85rem', color: '#fff',
            boxShadow: '0 4px 12px rgba(245,166,35,0.35)',
          }}>
            JD
          </div>
        </div>
      </header>

      {/* ── Greeting ─────────────────────────── */}
      <div style={{ marginTop: '-0.5rem' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0, color: 'var(--text-main)' }}>
          Good evening, John! 👋
        </h2>
        <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: '0.15rem 0 0', fontWeight: 500 }}>
          What would you like to eat today?
        </p>
      </div>

      {/* ── Search bar ──────────────────────────── */}
      <div style={{ position: 'relative' }}>
        <Search size={18} style={{
          position: 'absolute', left: '1rem', top: '50%',
          transform: 'translateY(-50%)', color: 'var(--text-muted)',
          pointerEvents: 'none',
        }} />
        <input
          type="text"
          placeholder="Search food, groceries, or items…"
          readOnly
          onClick={() => navigate('/customer/search')}
          style={{
            paddingLeft: '2.75rem',
            marginBottom: 0,
            fontSize: '0.9rem',
            backgroundColor: 'var(--bg-color)',
            border: 'none',
            borderRadius: 'var(--radius-full)',
            cursor: 'text',
          }}
        />
      </div>

      {/* ── Promo Banner ─────────────────────────── */}
      <div style={{
        borderRadius: 'var(--radius-2xl)',
        background: 'linear-gradient(130deg, #1E7A28 0%, #3DB84A 60%, #F5A623 140%)',
        padding: '1.25rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 8px 24px rgba(46,158,58,0.30)',
      }}>
        <div style={{ position: 'absolute', top: '-20%', right: '30%', width: '8rem', height: '8rem', borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
        <div style={{ position: 'absolute', bottom: '-30%', right: '-5%', width: '7rem', height: '7rem', borderRadius: '50%', background: 'rgba(245,166,35,0.25)' }} />
        <div style={{ zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.35rem' }}>
            <Zap size={14} color="#F5A623" fill="#F5A623" />
            <span style={{ color: '#F5A623', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.04em' }}>LIMITED OFFER</span>
          </div>
          <h2 style={{ color: '#fff', fontWeight: 900, fontSize: '1.35rem', margin: '0 0 0.3rem', letterSpacing: '-0.02em' }}>
            Get 20% Off
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.78rem', margin: 0, fontWeight: 500 }}>
            On your first 3 orders today
          </p>
        </div>
        <div style={{
          zIndex: 1,
          background: '#fff',
          color: 'var(--primary)',
          fontWeight: 800,
          fontSize: '0.82rem',
          padding: '0.6rem 1rem',
          borderRadius: 'var(--radius-xl)',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          flexShrink: 0,
        }}>
          Order Now
        </div>
      </div>

      {/* ── Categories ──────────────────────────── */}
      <section>
        <div className="section-header">
          <h2 style={{ fontSize: '1.05rem', margin: 0 }}>Categories</h2>
          <span className="see-all">See all</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
          {categories.map(cat => (
            <div key={cat.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.45rem', cursor: 'pointer' }}>
              <div style={{
                width: '4rem', height: '4rem',
                borderRadius: 'var(--radius-xl)',
                background: cat.bg,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.8rem',
                boxShadow: `0 6px 16px ${cat.shadow}`,
                transition: 'transform var(--transition-fast)',
              }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.08)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              >
                {cat.icon}
              </div>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, textAlign: 'center', color: 'var(--text-main)' }}>{cat.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Restaurants ─────────────────────────── */}
      <section style={{ paddingBottom: '0.5rem' }}>
        <div className="section-header">
          <h2 style={{ fontSize: '1.05rem', margin: 0 }}>Nearby Restaurants</h2>
          <span className="see-all">See all</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {restaurants.map(rest => (
            <div
              key={rest.id}
              className="card"
              onClick={() => navigate(`/customer/restaurant/${rest.id}`)}
              style={{ overflow: 'hidden', cursor: 'pointer', transition: 'transform var(--transition-fast), box-shadow var(--transition-fast)' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = ''; }}
            >
              {/* Image */}
              <div style={{ position: 'relative', height: '11rem', width: '100%', overflow: 'hidden' }}>
                <img src={rest.image} alt={rest.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                {/* Gradient overlay */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 60%)' }} />
                {/* Rating badge */}
                <div style={{
                  position: 'absolute', top: '0.625rem', right: '0.625rem',
                  background: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(6px)',
                  padding: '0.22rem 0.55rem',
                  borderRadius: 'var(--radius-full)',
                  display: 'flex', alignItems: 'center', gap: '3px',
                  fontSize: '0.8rem', fontWeight: 700,
                  boxShadow: 'var(--shadow-sm)',
                }}>
                  <Star size={12} fill="var(--warning)" color="var(--warning)" />
                  {rest.rating}
                </div>
                {/* Promo badge */}
                {rest.promo && (
                  <div style={{
                    position: 'absolute', top: '0.625rem', left: '0.625rem',
                    background: 'var(--accent)',
                    color: '#fff',
                    padding: '0.22rem 0.6rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.72rem', fontWeight: 800,
                    boxShadow: '0 2px 8px rgba(245,166,35,0.4)',
                  }}>
                    {rest.promo}
                  </div>
                )}
              </div>

              {/* Info row */}
              <div style={{ padding: '0.875rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.2rem' }}>{rest.name}</h3>
                  <p style={{ fontSize: '0.75rem', margin: 0 }}>{rest.tags}</p>
                </div>
                <div className="badge badge-primary" style={{ display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                  <Clock size={11} />
                  {rest.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
