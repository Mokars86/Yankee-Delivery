import { MapPin, Bell, Search, ChevronDown, Clock, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const categories = [
  { id: 1, name: 'Food',      icon: '🍔', color: '#FFF3E0' },
  { id: 2, name: 'Groceries', icon: '🛒', color: '#E8F5E9' },
  { id: 3, name: 'Pharmacy',  icon: '💊', color: '#E3F2FD' },
  { id: 4, name: 'Send',      icon: '📦', color: '#F3E5F5' },
];

const restaurants = [
  {
    id: 1,
    name: 'Burger King',
    rating: 4.8,
    time: '20-30 min',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    tags: 'American · Fast Food',
  },
  {
    id: 2,
    name: 'Pizza Hut',
    rating: 4.5,
    time: '30-40 min',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    tags: 'Pizza · Italian',
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
          }}>
            <MapPin size={16} color="#fff" />
          </div>
          <div>
            <p className="text-muted" style={{ fontSize: '0.7rem', fontWeight: 600, marginBottom: '0.1rem' }}>
              Deliver to
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2px', fontWeight: 700, fontSize: '0.9rem' }}>
              Current Location <ChevronDown size={14} />
            </div>
          </div>
        </div>

        {/* Bell */}
        <button className="icon-btn icon-btn-ghost" style={{ position: 'relative' }}>
          <Bell size={20} />
          <span style={{
            position: 'absolute', top: '8px', right: '8px',
            width: '8px', height: '8px',
            borderRadius: '50%',
            background: 'var(--danger)',
            border: '2px solid var(--surface-color)',
          }} />
        </button>
      </header>

      {/* ── Search bar ──────────────────────────── */}
      <div style={{ position: 'relative' }}>
        <Search size={18} style={{
          position: 'absolute', left: '1rem', top: '50%',
          transform: 'translateY(-50%)', color: 'var(--text-muted)',
          pointerEvents: 'none',
        }} />
        <input
          type="text"
          placeholder="Search food, groceries, or items"
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

      {/* ── Categories ──────────────────────────── */}
      <section>
        <div className="section-header">
          <h2 style={{ fontSize: '1.05rem', margin: 0 }}>Categories</h2>
          <span className="see-all">See all</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
          {categories.map(cat => (
            <div key={cat.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem', cursor: 'pointer' }}>
              <div style={{
                width: '4rem', height: '4rem',
                borderRadius: 'var(--radius-xl)',
                background: cat.color,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.75rem',
                boxShadow: 'var(--shadow-sm)',
                transition: 'transform var(--transition-fast)',
              }}>
                {cat.icon}
              </div>
              <span style={{ fontSize: '0.72rem', fontWeight: 600, textAlign: 'center' }}>{cat.name}</span>
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
              style={{ overflow: 'hidden', cursor: 'pointer', transition: 'transform var(--transition-fast)' }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              {/* Image */}
              <div style={{ position: 'relative', height: '10rem', width: '100%', overflow: 'hidden' }}>
                <img src={rest.image} alt={rest.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                {/* Rating badge */}
                <div style={{
                  position: 'absolute', top: '0.625rem', right: '0.625rem',
                  background: 'rgba(255,255,255,0.92)',
                  backdropFilter: 'blur(6px)',
                  padding: '0.2rem 0.5rem',
                  borderRadius: 'var(--radius-full)',
                  display: 'flex', alignItems: 'center', gap: '3px',
                  fontSize: '0.8rem', fontWeight: 700,
                  boxShadow: 'var(--shadow-sm)',
                }}>
                  <Star size={12} fill="var(--warning)" color="var(--warning)" />
                  {rest.rating}
                </div>
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
