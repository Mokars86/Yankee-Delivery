import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, User, Phone, Briefcase, ArrowLeft } from 'lucide-react';

const inputWrap: React.CSSProperties = {
  position: 'relative',
  marginBottom: '0.875rem',
};
const iconStyle: React.CSSProperties = {
  position: 'absolute',
  left: '0.875rem',
  top: '50%',
  transform: 'translateY(-50%)',
  color: 'var(--text-muted)',
  pointerEvents: 'none',
  zIndex: 1, // needed for select overlay
};
const inputStyle: React.CSSProperties = {
  paddingLeft: '2.75rem',
  marginBottom: 0,
  fontSize: '1rem',
};

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate register sequence
    navigate('/rider/dashboard');
  };

  const goBack = () => navigate('/login');

  return (
    <div className="animate-fade-in" style={{
      minHeight: '100svh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'var(--surface-color)',
    }}>

      {/* ── Branding strip ─────────────────────── */}
      <div style={{
        background: 'linear-gradient(135deg, #1E7A28, #3DB84A)',
        padding: 'calc(var(--safe-top) + 1.25rem) 1.5rem 2.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '-30%', right: '-10%', width: '12rem', height: '12rem', borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
        <button onClick={goBack} style={{
          width: '2.25rem', height: '2.25rem',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.20)',
          border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', marginBottom: '1.25rem',
        }}>
          <ArrowLeft size={18} />
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', zIndex: 1, position: 'relative' }}>
          <div style={{
            width: '2.75rem', height: '2.75rem', borderRadius: '0.875rem',
            background: '#fff', padding: '0.25rem', overflow: 'hidden',
            boxShadow: '0 4px 14px rgba(0,0,0,0.20)',
          }}>
            <img src="/logo.png" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          <div>
            <div style={{ color: '#fff', fontWeight: 800, fontSize: '1.05rem', letterSpacing: '-0.02em' }}>Yankee Ride</div>
            <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', fontWeight: 500 }}>
              Create a new rider account
            </div>
          </div>
        </div>
      </div>

      {/* ── Form area ──────────────────────────── */}
      <div style={{
        flex: 1,
        padding: '2rem 1.5rem calc(var(--safe-bottom) + 1.5rem)',
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* Heading */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h1 style={{ marginBottom: '0.375rem', fontSize: 'clamp(1.4rem, 6vw, 1.9rem)' }}>
            Join Yankee Ride
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Earn money on your own schedule. Sign up to start delivering today.
          </p>
        </div>

        <form onSubmit={handleRegister} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: 1 }}>
            
            {/* Full Name */}
            <div style={inputWrap}>
              <User size={18} style={iconStyle} />
              <input type="text" placeholder="Full Name" style={inputStyle} required />
            </div>

            {/* Email Input */}
            <div style={inputWrap}>
              <Mail size={18} style={iconStyle} />
              <input type="email" placeholder="Email Address" style={inputStyle} required />
            </div>

            {/* Phone Input */}
            <div style={inputWrap}>
              <Phone size={18} style={iconStyle} />
              <input type="tel" placeholder="Phone Number" style={inputStyle} required />
            </div>

            {/* Vehicle Type */}
            <div style={inputWrap}>
              <Briefcase size={18} style={iconStyle} />
              <select required style={{ ...inputStyle, cursor: 'pointer', appearance: 'none' }} defaultValue="">
                  <option value="" disabled>Select your vehicle</option>
                  <option value="motorcycle">Motorcycle</option>
                  <option value="bicycle">Bicycle</option>
                  <option value="car">Car (Sedan/Hatchback)</option>
                  <option value="van">Van / Truck</option>
              </select>
            </div>

            {/* Password */}
            <div style={inputWrap}>
              <Lock size={18} style={iconStyle} />
              <input type="password" placeholder="Create a strong password" style={inputStyle} required />
            </div>
            
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
            <p className="text-xs text-gray-500 text-center font-medium my-2">
              By registering, you agree to Yankee Delivery's Terms & Conditions.
            </p>
            <button type="submit" className="btn btn-primary btn-full" style={{ padding: '1.05rem', boxShadow: '0 6px 20px rgba(46,158,58,0.35)' }}>
              Create Rider Account
            </button>
            <p className="text-center text-muted" style={{ fontSize: '0.9rem' }}>
              Already have an account?{' '}
              <Link to="/login" className="text-primary font-bold" style={{ cursor: 'pointer', textDecoration: 'none' }}>
                Log in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
