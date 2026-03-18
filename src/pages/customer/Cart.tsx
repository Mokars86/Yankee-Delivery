import { ArrowLeft, MapPin, CreditCard, Banknote, Smartphone, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import { useState } from 'react';

const Cart = () => {
  const navigate = useNavigate();
  const { cart } = useAppContext();
  const [payment, setPayment] = useState('Mobile Money');

  const handleCheckout = () => {
    navigate('/customer/orders');
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);
  const deliveryFee = total > 0 ? 2.99 : 0;

  if (cart.length === 0) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80svh', gap: '1rem', padding: '2rem', textAlign: 'center' }}>
        <div style={{
          width: '6rem', height: '6rem', borderRadius: '50%',
          background: 'var(--primary-bg)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <ShoppingBag size={36} color="var(--primary)" />
        </div>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 800, margin: 0 }}>Your cart is empty</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '18rem' }}>
          Add some delicious items to your cart and come back here.
        </p>
        <button onClick={() => navigate('/customer/home')} className="btn btn-primary" style={{ marginTop: '0.5rem', boxShadow: '0 6px 20px rgba(46,158,58,0.35)' }}>
          Browse Restaurants
        </button>
      </div>
    );
  }

  return (
    <div className="animate-fade-in" style={{ backgroundColor: 'var(--bg-color)', minHeight: '100svh', paddingBottom: '7rem' }}>

      {/* ── Header ─────────────────────────────── */}
      <header style={{
        padding: '1rem',
        backgroundColor: 'var(--surface-color)',
        display: 'flex', alignItems: 'center', gap: '1rem',
        position: 'sticky', top: 0, zIndex: 10,
        borderBottom: '1px solid var(--border-color)',
        boxShadow: 'var(--shadow-sm)',
      }}>
        <button onClick={() => navigate(-1)} className="icon-btn icon-btn-ghost">
          <ArrowLeft size={20} />
        </button>
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: '1.1rem', fontWeight: 800, margin: 0, letterSpacing: '-0.02em' }}>My Cart</h1>
          <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', margin: '0.1rem 0 0', fontWeight: 500 }}>
            {cart.length} item{cart.length !== 1 ? 's' : ''}
          </p>
        </div>
      </header>

      <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>

        {/* ── Delivery Address ──────────────────── */}
        <div className="card" style={{ padding: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.875rem' }}>
            <h2 style={{ fontSize: '0.95rem', fontWeight: 700, margin: 0 }}>Delivery Address</h2>
            <span style={{ color: 'var(--primary)', fontSize: '0.82rem', fontWeight: 700, cursor: 'pointer' }}>Edit</span>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
            <div style={{
              width: '2.5rem', height: '2.5rem', borderRadius: 'var(--radius-lg)', flexShrink: 0,
              background: 'linear-gradient(135deg, var(--primary-light), var(--primary))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(46,158,58,0.3)',
            }}>
              <MapPin size={16} color="#fff" />
            </div>
            <div>
              <p style={{ fontWeight: 700, fontSize: '0.9rem', margin: 0 }}>Home</p>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.25rem', lineHeight: 1.5 }}>
                123 Yankee Delivery Street<br />Block A, Apartment 14
              </p>
            </div>
          </div>
        </div>

        {/* ── Order Items ────────────────────────── */}
        <div className="card" style={{ padding: '1rem' }}>
          <h2 style={{ fontSize: '0.95rem', fontWeight: 700, margin: '0 0 0.875rem' }}>Order Items</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            {cart.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', paddingBottom: idx < cart.length - 1 ? '0.875rem' : 0, borderBottom: idx < cart.length - 1 ? '1px solid var(--border-color)' : 'none' }}>
                <img src={item.image} alt="" style={{ width: '3.5rem', height: '3.5rem', borderRadius: 'var(--radius-lg)', objectFit: 'cover', flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: 700, fontSize: '0.88rem', margin: 0, letterSpacing: '-0.01em' }}>{item.name}</p>
                  <p style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.88rem', margin: '0.2rem 0 0' }}>${item.price}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--bg-color)', borderRadius: 'var(--radius-lg)', padding: '0.3rem 0.5rem' }}>
                  <button style={{ border: 'none', background: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'var(--text-muted)' }}>
                    <Minus size={15} />
                  </button>
                  <span style={{ fontSize: '0.9rem', fontWeight: 700, minWidth: '1.2rem', textAlign: 'center' }}>1</span>
                  <button style={{ border: 'none', background: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'var(--primary)' }}>
                    <Plus size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Payment Method ────────────────────── */}
        <div className="card" style={{ padding: '1rem' }}>
          <h2 style={{ fontSize: '0.95rem', fontWeight: 700, margin: '0 0 0.875rem' }}>Payment Method</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
            {[
              { id: 'Mobile Money', icon: Smartphone, label: 'Mobile Money', sub: 'M-Pesa, MTN', color: '#E8F5E9', iconColor: 'var(--primary)' },
              { id: 'Card', icon: CreditCard, label: 'Debit / Credit Card', sub: 'Visa, Mastercard', color: '#E3F2FD', iconColor: '#2196F3' },
              { id: 'Cash', icon: Banknote, label: 'Cash on Delivery', sub: 'Pay when delivered', color: '#FFF3E0', iconColor: '#F5A623' },
            ].map(method => {
              const active = payment === method.id;
              return (
                <label key={method.id} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '0.75rem',
                  borderRadius: 'var(--radius-lg)',
                  border: active ? '2px solid var(--primary)' : '1.5px solid var(--border-color)',
                  cursor: 'pointer',
                  background: active ? 'var(--primary-bg)' : 'var(--surface-color)',
                  transition: 'all var(--transition-fast)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: 'var(--radius-lg)', background: method.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <method.icon size={18} color={method.iconColor} />
                    </div>
                    <div>
                      <p style={{ fontWeight: 700, fontSize: '0.88rem', margin: 0 }}>{method.label}</p>
                      <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', margin: '0.1rem 0 0', fontWeight: 500 }}>{method.sub}</p>
                    </div>
                  </div>
                  <div style={{
                    width: '1.25rem', height: '1.25rem', borderRadius: '50%',
                    border: active ? 'none' : '2px solid var(--border-color)',
                    background: active ? 'var(--primary)' : 'transparent',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    {active && <div style={{ width: '0.5rem', height: '0.5rem', borderRadius: '50%', background: '#fff' }} />}
                  </div>
                  <input type="radio" name="payment" checked={active} onChange={() => setPayment(method.id)} style={{ display: 'none' }} />
                </label>
              );
            })}
          </div>
        </div>

        {/* ── Order Summary ─────────────────────── */}
        <div className="card" style={{ padding: '1rem' }}>
          <h2 style={{ fontSize: '0.95rem', fontWeight: 700, margin: '0 0 0.875rem' }}>Order Summary</h2>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.625rem' }}>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.88rem', fontWeight: 500 }}>Subtotal</span>
            <span style={{ fontWeight: 700, fontSize: '0.88rem' }}>${total.toFixed(2)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.875rem' }}>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.88rem', fontWeight: 500 }}>Delivery Fee</span>
            <span style={{ fontWeight: 700, fontSize: '0.88rem' }}>${deliveryFee.toFixed(2)}</span>
          </div>
          <div style={{ height: 1, background: 'var(--border-color)', marginBottom: '0.875rem' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontWeight: 800, fontSize: '1.05rem' }}>Total</span>
            <span style={{ fontWeight: 900, fontSize: '1.2rem', color: 'var(--primary)' }}>${(total + deliveryFee).toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* ── Sticky Checkout Button ─────────────── */}
      <div style={{
        position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)',
        width: '100%', maxWidth: '480px',
        padding: '1rem',
        paddingBottom: 'calc(1rem + var(--safe-bottom))',
        background: 'var(--surface-color)',
        borderTop: '1px solid var(--border-color)',
        boxShadow: 'var(--shadow-float)',
        zIndex: 50,
      }}>
        <button onClick={handleCheckout} className="btn btn-primary btn-full" style={{ padding: '1.1rem', fontSize: '1rem', boxShadow: '0 6px 20px rgba(46,158,58,0.4)' }}>
          Place Order · ${(total + deliveryFee).toFixed(2)}
        </button>
      </div>
    </div>
  );
};

export default Cart;
