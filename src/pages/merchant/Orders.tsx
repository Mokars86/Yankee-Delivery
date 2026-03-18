import { useState } from 'react';
import { Check, X, Clock, MapPin, Phone, ShoppingBag } from 'lucide-react';

const initialOrders = [
  { id: '84J92Z', customer: 'Michael K.', items: '1x Whopper Meal, 1x Coke', total: 11.98, time: '2 mins ago', address: '123 Yankee Delivery Street', status: 'pending' },
  { id: '72K11X', customer: 'Sarah W.',   items: '2x Chicken Royale',         total: 13.98, time: '5 mins ago', address: '45 Apple Road',             status: 'pending' },
];

const tabs = ['Pending', 'Active', 'History'] as const;

const Orders = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [tab, setTab] = useState<typeof tabs[number]>('Pending');

  const handleAction = (id: string, action: 'accept' | 'reject') => {
    setOrders(orders.map(o => o.id === id ? { ...o, status: action === 'accept' ? 'active' : 'rejected' } : o));
  };

  const displayOrders = orders.filter(o =>
    tab === 'Pending' ? o.status === 'pending' :
    tab === 'Active'  ? o.status === 'active'  :
    o.status === 'completed' || o.status === 'rejected'
  );

  const pendingCount = orders.filter(o => o.status === 'pending').length;

  return (
    <div className="animate-fade-in" style={{ backgroundColor: 'var(--bg-color)', minHeight: '100%', paddingBottom: '1.5rem' }}>

      {/* ── Header ─────────────────────────────── */}
      <div style={{ padding: '1rem 1rem 0', backgroundColor: 'var(--surface-color)', borderBottom: '1px solid var(--border-color)' }}>
        <h1 style={{ fontWeight: 900, fontSize: '1.2rem', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>Orders</h1>

        {/* Pill tabs */}
        <div style={{ display: 'flex', gap: '0.5rem', paddingBottom: '1rem' }}>
          {tabs.map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: '0.45rem 1rem',
                borderRadius: 'var(--radius-full)',
                border: 'none', cursor: 'pointer',
                fontWeight: 700, fontSize: '0.82rem',
                transition: 'all var(--transition-fast)',
                background: tab === t ? 'var(--primary)' : 'var(--bg-color)',
                color: tab === t ? '#fff' : 'var(--text-muted)',
                boxShadow: tab === t ? '0 4px 12px rgba(46,158,58,0.35)' : 'none',
                display: 'flex', alignItems: 'center', gap: '0.35rem',
              }}
            >
              {t}
              {t === 'Pending' && pendingCount > 0 && (
                <span style={{
                  background: tab === 'Pending' ? 'rgba(255,255,255,0.3)' : 'var(--danger)',
                  color: '#fff',
                  fontSize: '0.65rem', fontWeight: 800,
                  padding: '0.1rem 0.45rem',
                  borderRadius: 'var(--radius-full)',
                  minWidth: '1.25rem', textAlign: 'center',
                }}>
                  {pendingCount}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ── Order list ─────────────────────────── */}
      <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
        {displayOrders.length === 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem 2rem', gap: '1rem', textAlign: 'center' }}>
            <div style={{ width: '5rem', height: '5rem', borderRadius: '50%', background: 'var(--primary-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ShoppingBag size={30} color="var(--primary)" />
            </div>
            <div>
              <h3 style={{ marginBottom: '0.375rem', fontSize: '1rem' }}>No {tab.toLowerCase()} orders</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Check back soon for new orders.</p>
            </div>
          </div>
        ) : (
          displayOrders.map(order => (
            <div
              key={order.id}
              className="card"
              style={{ padding: '1rem', borderLeft: `4px solid ${order.status === 'active' ? 'var(--primary)' : order.status === 'rejected' ? 'var(--danger)' : 'var(--accent)'}` }}
            >
              {/* Top row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.875rem', paddingBottom: '0.875rem', borderBottom: '1px solid var(--border-color)' }}>
                <div>
                  <h3 style={{ fontWeight: 800, fontSize: '1rem', margin: '0 0 0.2rem' }}>#{order.id}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 600 }}>
                    <Clock size={12} /> {order.time}
                  </div>
                </div>
                <span style={{ fontWeight: 900, fontSize: '1.05rem', color: 'var(--primary)' }}>${order.total}</span>
              </div>

              {/* Customer info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>{order.customer}</span>
                  <button style={{
                    display: 'flex', alignItems: 'center', gap: '0.3rem',
                    background: 'var(--primary-bg)', color: 'var(--primary)',
                    border: 'none', cursor: 'pointer',
                    padding: '0.35rem 0.75rem', borderRadius: 'var(--radius-lg)',
                    fontSize: '0.78rem', fontWeight: 700,
                  }}>
                    <Phone size={12} /> Call
                  </button>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem', fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                  <MapPin size={13} style={{ flexShrink: 0, marginTop: '0.05rem' }} /> {order.address}
                </div>
                <div style={{ background: 'var(--bg-color)', padding: '0.6rem 0.75rem', borderRadius: 'var(--radius-lg)', fontSize: '0.85rem', fontWeight: 500 }}>
                  {order.items}
                </div>
              </div>

              {/* Action buttons */}
              {order.status === 'pending' && (
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <button
                    onClick={() => handleAction(order.id, 'reject')}
                    style={{ flex: 1, background: '#FEE2E2', color: 'var(--danger)', border: 'none', cursor: 'pointer', padding: '0.75rem', borderRadius: 'var(--radius-xl)', fontWeight: 700, fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem', transition: 'background var(--transition-fast)' }}
                    onMouseEnter={e => (e.currentTarget.style.background = '#FECACA')}
                    onMouseLeave={e => (e.currentTarget.style.background = '#FEE2E2')}
                  >
                    <X size={17} strokeWidth={3} /> Reject
                  </button>
                  <button
                    onClick={() => handleAction(order.id, 'accept')}
                    style={{ flex: 1, background: 'linear-gradient(135deg, #2E9E3A, #3DB84A)', color: '#fff', border: 'none', cursor: 'pointer', padding: '0.75rem', borderRadius: 'var(--radius-xl)', fontWeight: 700, fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem', boxShadow: '0 4px 12px rgba(46,158,58,0.4)', transition: 'transform var(--transition-fast)' }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.02)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  >
                    <Check size={17} strokeWidth={3} /> Accept
                  </button>
                </div>
              )}
              {order.status === 'active' && (
                <button style={{ width: '100%', background: 'linear-gradient(135deg, #10b981, #059669)', color: '#fff', border: 'none', cursor: 'pointer', padding: '0.75rem', borderRadius: 'var(--radius-xl)', fontWeight: 700, fontSize: '0.9rem', boxShadow: '0 4px 12px rgba(16,185,129,0.4)', transition: 'transform var(--transition-fast)' }}>
                  Mark Ready for Pickup
                </button>
              )}
              {order.status === 'rejected' && (
                <div style={{ textAlign: 'center', color: 'var(--danger)', fontSize: '0.82rem', fontWeight: 700, padding: '0.25rem 0' }}>Order Rejected</div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Orders;
