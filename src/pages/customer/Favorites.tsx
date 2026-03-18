import { useState } from 'react';
import { Heart, Trash2, Star, Clock, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type FavoriteItem = {
  id: number;
  name: string;
  tag: string;
  rating: number;
  time: string;
  image: string;
};

const initialFavorites: FavoriteItem[] = [
  { id: 1, name: 'Burger King', tag: 'American · Fast Food', rating: 4.8, time: '20-30 min', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80' },
  { id: 2, name: 'Pizza Hut',   tag: 'Pizza · Italian',     rating: 4.5, time: '30-40 min', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80' },
  { id: 3, name: 'Sushi Palace',tag: 'Japanese · Sushi',    rating: 4.7, time: '35-45 min', image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=600&q=80' },
];

const Favorites = () => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState<FavoriteItem[]>(initialFavorites);
  const [removing, setRemoving] = useState<number | null>(null);

  const handleRemove = (id: number) => {
    setRemoving(id);
    setTimeout(() => {
      setFavorites(f => f.filter(x => x.id !== id));
      setRemoving(null);
    }, 300);
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', minHeight: '100%' }}>

      {/* ── Header ──────────────────────────────── */}
      <div style={{
        padding: '1.25rem 1rem 1rem',
        background: 'var(--surface-color)',
        borderBottom: '1px solid var(--border-color)',
        display: 'flex', alignItems: 'center', gap: '0.75rem',
      }}>
        <div style={{
          width: '2.5rem', height: '2.5rem', borderRadius: 'var(--radius-lg)',
          background: 'linear-gradient(135deg, #FF6B6B, #E53E3E)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(229,62,62,0.3)',
          flexShrink: 0,
        }}>
          <Heart size={18} color="#fff" fill="#fff" />
        </div>
        <div>
          <h2 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 800, letterSpacing: '-0.02em' }}>My Favorites</h2>
          <p style={{ margin: '0.1rem 0 0', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500 }}>
            {favorites.length} saved place{favorites.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      {/* ── Content ─────────────────────────────── */}
      <div style={{ flex: 1, padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.875rem', backgroundColor: 'var(--bg-color)' }}>

        {favorites.length === 0 ? (
          <div style={{
            flex: 1, display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            textAlign: 'center', padding: '4rem 2rem', gap: '1.25rem',
          }}>
            <div style={{
              width: '6rem', height: '6rem', borderRadius: '50%',
              background: 'linear-gradient(135deg, #FFE4E4, #FECACA)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 8px 24px rgba(229,62,62,0.2)',
            }}>
              <Heart size={36} color="#E53E3E" />
            </div>
            <div>
              <h3 style={{ marginBottom: '0.4rem', fontSize: '1.15rem' }}>No favorites yet</h3>
              <p style={{ fontSize: '0.875rem', maxWidth: '18rem', margin: '0 auto' }}>
                Tap the ❤️ on any restaurant to save it here for quick access.
              </p>
            </div>
            <button
              className="btn btn-primary"
              onClick={() => navigate('/customer/home')}
              style={{ gap: '0.5rem', marginTop: '0.5rem', boxShadow: '0 6px 20px rgba(46,158,58,0.35)' }}
            >
              <ShoppingBag size={18} />
              Browse Restaurants
            </button>
          </div>
        ) : (
          favorites.map(item => (
            <div
              key={item.id}
              className="card"
              style={{
                overflow: 'hidden', cursor: 'pointer',
                opacity: removing === item.id ? 0 : 1,
                transform: removing === item.id ? 'translateX(40px)' : 'translateX(0)',
                transition: 'opacity 0.3s ease, transform 0.3s ease, box-shadow var(--transition-normal)',
              }}
              onClick={() => navigate(`/customer/restaurant/${item.id}`)}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = 'var(--shadow-md)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = '')}
            >
              {/* Cover */}
              <div style={{ position: 'relative', height: '9.5rem', overflow: 'hidden' }}>
                <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                {/* Overlay */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.25), transparent 60%)' }} />

                {/* Remove button */}
                <button
                  onClick={e => { e.stopPropagation(); handleRemove(item.id); }}
                  style={{
                    position: 'absolute', top: '0.625rem', right: '0.625rem',
                    width: '2.2rem', height: '2.2rem', borderRadius: '50%',
                    background: 'rgba(255,255,255,0.92)',
                    backdropFilter: 'blur(6px)',
                    border: 'none', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'transform var(--transition-fast)',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  aria-label="Remove from favorites"
                >
                  <Trash2 size={14} color="var(--danger)" />
                </button>

                {/* Saved badge */}
                <div style={{
                  position: 'absolute', top: '0.625rem', left: '0.625rem',
                  background: 'rgba(255,255,255,0.92)',
                  backdropFilter: 'blur(6px)',
                  borderRadius: 'var(--radius-full)',
                  padding: '0.2rem 0.5rem',
                  display: 'flex', alignItems: 'center', gap: '3px',
                  fontSize: '0.72rem', fontWeight: 700,
                  boxShadow: 'var(--shadow-sm)',
                  color: '#E53E3E',
                }}>
                  <Heart size={10} fill="#E53E3E" color="#E53E3E" />
                  Saved
                </div>
              </div>

              {/* Info */}
              <div style={{ padding: '0.875rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.2rem' }}>{item.name}</h3>
                  <p style={{ fontSize: '0.75rem', margin: 0, color: 'var(--text-muted)' }}>{item.tag}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.3rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '3px', fontSize: '0.82rem', fontWeight: 800 }}>
                    <Star size={12} fill="var(--accent)" color="var(--accent)" />
                    {item.rating}
                  </div>
                  <div className="badge badge-primary" style={{ display: 'flex', alignItems: 'center', gap: '3px', fontSize: '0.7rem' }}>
                    <Clock size={10} /> {item.time}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Favorites;
