import { useState } from 'react';
import { Search as SearchIcon, X, Clock, TrendingUp, Star, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const categories = [
  { id: 'all',       label: 'All',       emoji: '🔍' },
  { id: 'food',      label: 'Food',      emoji: '🍔' },
  { id: 'groceries', label: 'Groceries', emoji: '🛒' },
  { id: 'pharmacy',  label: 'Pharmacy',  emoji: '💊' },
  { id: 'parcels',   label: 'Parcels',   emoji: '📦' },
];

const recentSearches = ['Burger King', 'Pizza', 'KFC', 'Sushi near me'];

const trending = [
  { id: 1, name: 'Burger King', tag: 'Fast Food', rating: 4.8, time: '20-30 min', emoji: '🍔' },
  { id: 2, name: 'Pizza Hut', tag: 'Pizza', rating: 4.5, time: '30-40 min', emoji: '🍕' },
  { id: 3, name: 'KFC', tag: 'Chicken', rating: 4.6, time: '25-35 min', emoji: '🍗' },
  { id: 4, name: 'Subway', tag: 'Sandwiches', rating: 4.3, time: '15-25 min', emoji: '🥙' },
  { id: 5, name: 'Sushi Palace', tag: 'Japanese', rating: 4.7, time: '35-45 min', emoji: '🍣' },
  { id: 6, name: 'FreshMart', tag: 'Groceries', rating: 4.4, time: '30-40 min', emoji: '🛒' },
];

const Search = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [recents, setRecents] = useState(recentSearches);

  const filtered = trending.filter(item => {
    const matchesQuery = query === '' ||
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.tag.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = activeCategory === 'all' ||
      item.tag.toLowerCase().includes(activeCategory);
    return matchesQuery && matchesCategory;
  });

  const removeRecent = (item: string) =>
    setRecents(r => r.filter(x => x !== item));

  const handleRecentTap = (term: string) => setQuery(term);

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>

      {/* ── Sticky search header ──────────────────────────── */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'var(--surface-color)',
        padding: '1rem 1rem 0.75rem',
        borderBottom: '1px solid var(--border-color)',
        boxShadow: 'var(--shadow-sm)',
      }}>
        <h2 style={{ marginBottom: '0.75rem', fontSize: '1.15rem' }}>Search</h2>

        {/* Search input */}
        <div style={{ position: 'relative' }}>
          <SearchIcon size={18} style={{
            position: 'absolute', left: '0.875rem', top: '50%',
            transform: 'translateY(-50%)', color: 'var(--text-muted)',
            pointerEvents: 'none',
          }} />
          <input
            type="text"
            placeholder="Search restaurants, food, categories..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            autoFocus
            style={{
              paddingLeft: '2.625rem',
              paddingRight: query ? '2.625rem' : '1rem',
              marginBottom: 0,
              fontSize: '0.9375rem',
              backgroundColor: 'var(--bg-color)',
              borderRadius: 'var(--radius-full)',
              border: 'none',
            }}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              style={{
                position: 'absolute', right: '0.875rem', top: '50%',
                transform: 'translateY(-50%)',
                border: 'none', background: 'none', cursor: 'pointer',
                color: 'var(--text-muted)', display: 'flex', alignItems: 'center',
                padding: 0,
              }}
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Category chips */}
        <div style={{
          display: 'flex', gap: '0.5rem', overflowX: 'auto',
          padding: '0.75rem 0 0.125rem',
          scrollbarWidth: 'none',
        }}>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                whiteSpace: 'nowrap',
                padding: '0.4rem 0.875rem',
                borderRadius: 'var(--radius-full)',
                border: '1.5px solid',
                fontSize: '0.8125rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
                background: activeCategory === cat.id ? 'var(--primary)' : 'transparent',
                borderColor: activeCategory === cat.id ? 'var(--primary)' : 'var(--border-color)',
                color: activeCategory === cat.id ? '#fff' : 'var(--text-muted)',
              }}
            >
              <span>{cat.emoji}</span> {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Scrollable content ────────────────────────────── */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

        {/* Recent searches (only when input is empty) */}
        {!query && recents.length > 0 && (
          <section>
            <div className="section-header">
              <h3 style={{ fontSize: '0.9375rem', margin: 0 }}>Recent Searches</h3>
              <span className="see-all" onClick={() => setRecents([])}>Clear all</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {recents.map(item => (
                <div
                  key={item}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.75rem',
                    padding: '0.625rem 0',
                    borderBottom: '1px solid var(--border-color)',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleRecentTap(item)}
                >
                  <div style={{
                    width: '2.2rem', height: '2.2rem', borderRadius: 'var(--radius-lg)',
                    background: 'var(--bg-color)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Clock size={15} color="var(--text-muted)" />
                  </div>
                  <span style={{ flex: 1, fontSize: '0.9375rem', fontWeight: 500 }}>{item}</span>
                  <button
                    onClick={e => { e.stopPropagation(); removeRecent(item); }}
                    style={{ border: 'none', background: 'none', cursor: 'pointer', padding: '0.25rem', color: 'var(--text-muted)' }}
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Trending / Filtered results */}
        <section>
          <div className="section-header">
            <h3 style={{ fontSize: '0.9375rem', margin: 0, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              {query
                ? <><SearchIcon size={14} /> {filtered.length} result{filtered.length !== 1 ? 's' : ''}</>
                : <><TrendingUp size={14} color="var(--primary)" /> Trending Now</>
              }
            </h3>
          </div>

          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-muted)' }}>
              <p style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>🔍</p>
              <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-main)' }}>No results found</h3>
              <p style={{ fontSize: '0.875rem' }}>Try searching for something else.</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {filtered.map(item => (
                <div
                  key={item.id}
                  className="card"
                  onClick={() => navigate(`/customer/restaurant/${item.id}`)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.875rem',
                    padding: '0.875rem', cursor: 'pointer',
                    transition: 'transform var(--transition-fast)',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'translateX(2px)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'translateX(0)')}
                >
                  {/* Avatar */}
                  <div style={{
                    width: '3.25rem', height: '3.25rem', borderRadius: 'var(--radius-xl)',
                    background: 'var(--primary-bg)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.6rem', flexShrink: 0,
                  }}>
                    {item.emoji}
                  </div>

                  {/* Info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, marginBottom: '0.2rem' }}>{item.name}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                        <Star size={11} fill="var(--accent)" color="var(--accent)" />
                        <strong style={{ color: 'var(--text-main)' }}>{item.rating}</strong>
                      </span>
                      <span>·</span>
                      <span>{item.time}</span>
                      <span>·</span>
                      <span>{item.tag}</span>
                    </div>
                  </div>

                  <ChevronRight size={16} color="var(--text-muted)" />
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Search;
