import { useState } from 'react';
import { ArrowLeft, Heart, Star, Clock, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import type { CartItem } from '../../context/AppContext';

const menuItems = [
  { id: 1, name: 'Whopper Meal', description: 'Flame-grilled beef patty with fries and drink', price: 8.99, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=150&q=80' },
  { id: 2, name: 'Chicken Royale', description: 'Crispy chicken breast with fresh lettuce', price: 6.99, image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=150&q=80' },
];

const tabs = ['Menu', 'Reviews', 'Info'] as const;

const Restaurant = () => {
  const navigate = useNavigate();
  const { cart, setCart } = useAppContext();
  const [tab, setTab] = useState<typeof tabs[number]>('Menu');
  const [liked, setLiked] = useState(false);

  const addToCart = (item: CartItem) => {
    setCart([...cart, item]);
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-color)', minHeight: '100svh', paddingBottom: '7rem', display: 'flex', flexDirection: 'column' }} className="animate-fade-in">

      {/* ── Hero image ──────────────────────────── */}
      <div style={{ position: 'relative', height: '17rem', width: '100%', flexShrink: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
          alt="Restaurant"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        {/* Strong gradient overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 45%, rgba(0,0,0,0.2) 100%)' }} />

        {/* Back + heart buttons */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: '1rem', display: 'flex', justifyContent: 'space-between' }}>
          <button
            onClick={() => navigate(-1)}
            style={{
              width: '2.5rem', height: '2.5rem',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.22)',
              backdropFilter: 'blur(10px)',
              border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff',
            }}
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={() => setLiked(!liked)}
            style={{
              width: '2.5rem', height: '2.5rem',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.22)',
              backdropFilter: 'blur(10px)',
              border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'transform 0.2s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <Heart size={20} fill={liked ? '#ef4444' : 'none'} color={liked ? '#ef4444' : '#fff'} />
          </button>
        </div>
      </div>

      {/* ── Info card ──────────────────────────── */}
      <div style={{
        backgroundColor: 'var(--surface-color)',
        borderRadius: '1.75rem 1.75rem 0 0',
        marginTop: '-1.5rem',
        padding: '1.5rem 1.25rem 0',
        flex: 1,
        boxShadow: '0 -8px 24px rgba(0,0,0,0.08)',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Name & basics */}
        <h1 style={{ fontSize: '1.5rem', fontWeight: 900, margin: '0 0 0.75rem', letterSpacing: '-0.03em' }}>Burger King</h1>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
          {/* Rating */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', background: 'var(--bg-color)', borderRadius: 'var(--radius-full)', padding: '0.3rem 0.7rem' }}>
            <Star size={14} fill="var(--warning)" color="var(--warning)" />
            <span style={{ fontWeight: 800, fontSize: '0.9rem' }}>4.8</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>(1.2k)</span>
          </div>
          {/* Time */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', background: 'var(--primary-bg)', borderRadius: 'var(--radius-full)', padding: '0.3rem 0.7rem' }}>
            <Clock size={13} color="var(--primary)" />
            <span style={{ fontWeight: 700, fontSize: '0.82rem', color: 'var(--primary)' }}>20-30 min</span>
          </div>
          {/* Cuisine */}
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>American · Fast Food · $</span>
        </div>

        {/* ── Pill Tabs ──────────────────────── */}
        <div style={{
          display: 'flex',
          gap: '0.5rem',
          marginBottom: '1.5rem',
          background: 'var(--bg-color)',
          borderRadius: 'var(--radius-full)',
          padding: '0.3rem',
        }}>
          {tabs.map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                flex: 1,
                padding: '0.5rem',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 700,
                fontSize: '0.85rem',
                transition: 'all var(--transition-fast)',
                background: tab === t ? 'var(--primary)' : 'transparent',
                color: tab === t ? '#fff' : 'var(--text-muted)',
                boxShadow: tab === t ? '0 4px 12px rgba(46,158,58,0.35)' : 'none',
              }}
            >
              {t}
            </button>
          ))}
        </div>

        {/* ── Menu Items ─────────────────────── */}
        {tab === 'Menu' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {menuItems.map(item => (
              <div key={item.id} style={{
                display: 'flex', gap: '1rem', alignItems: 'center',
                background: 'var(--bg-color)',
                borderRadius: 'var(--radius-xl)',
                padding: '0.875rem',
                border: '1px solid var(--border-color)',
              }}>
                <img src={item.image} alt={item.name} style={{ width: '5.5rem', height: '5.5rem', borderRadius: 'var(--radius-lg)', objectFit: 'cover', flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.25rem' }}>{item.name}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginBottom: '0.6rem' }} className="line-clamp-2">{item.description}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--primary)' }}>${item.price}</span>
                    <button
                      onClick={() => addToCart(item)}
                      style={{
                        width: '2.1rem', height: '2.1rem',
                        borderRadius: '50%',
                        background: 'var(--primary)',
                        color: '#fff',
                        border: 'none', cursor: 'pointer',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: '0 4px 12px rgba(46,158,58,0.4)',
                        transition: 'transform var(--transition-fast)',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.12)')}
                      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                    >
                      <Plus size={16} strokeWidth={3} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {tab === 'Reviews' && (
          <div style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '3rem 1rem' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>💬</div>
            <p style={{ fontWeight: 600 }}>No reviews yet.</p>
          </div>
        )}
        {tab === 'Info' && (
          <div style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '3rem 1rem' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🏪</div>
            <p style={{ fontWeight: 600 }}>Restaurant information goes here.</p>
          </div>
        )}
      </div>

      {/* ── Floating Cart Bar ─────────────────── */}
      {cart.length > 0 && (
        <div className="animate-fade-in" style={{ position: 'fixed', bottom: 'calc(1.25rem + var(--safe-bottom))', left: '50%', transform: 'translateX(-50%)', width: 'calc(100% - 2rem)', maxWidth: '440px', zIndex: 50 }}>
          <button
            onClick={() => navigate('/customer/cart')}
            style={{
              width: '100%',
              background: 'linear-gradient(135deg, #1E7A28, #3DB84A)',
              color: '#fff',
              border: 'none', cursor: 'pointer',
              borderRadius: 'var(--radius-xl)',
              padding: '1rem 1.25rem',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              fontWeight: 700,
              boxShadow: '0 8px 28px rgba(46,158,58,0.45)',
              fontSize: '0.95rem',
            }}
          >
            <div style={{ background: 'rgba(255,255,255,0.2)', padding: '0.3rem 0.75rem', borderRadius: 'var(--radius-lg)', fontSize: '0.85rem' }}>
              {cart.length} item{cart.length !== 1 ? 's' : ''}
            </div>
            <span>View Cart</span>
            <span style={{ fontWeight: 800 }}>${cart.reduce((acc, i) => acc + i.price, 0).toFixed(2)}</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Restaurant;
