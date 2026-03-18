import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import { ArrowLeft, Mail, Phone, Lock, KeyRound } from 'lucide-react';

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
};
const inputStyle: React.CSSProperties = {
  paddingLeft: '2.75rem',
  marginBottom: 0,
  fontSize: '1rem',
};

const Login = () => {
  const navigate = useNavigate();
  const { role } = useAppContext();
  const [isLogin, setIsLogin] = useState(true);
  const [step, setStep] = useState<'details' | 'otp'>('details');

  const goBack = () => step === 'otp' ? setStep('details') : navigate('/welcome');

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('otp');
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(role === 'merchant' ? '/merchant/dashboard' : '/customer/home', { replace: true });
  };

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
            <div style={{ color: '#fff', fontWeight: 800, fontSize: '1.05rem', letterSpacing: '-0.02em' }}>Yankee Delivery</div>
            <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', fontWeight: 500 }}>
              {step === 'otp' ? 'OTP Verification' : isLogin ? 'Sign in to your account' : 'Create a new account'}
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
            {step === 'otp' ? 'Verify OTP' : isLogin ? 'Welcome back! 👋' : 'Create account'}
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            {step === 'otp'
              ? 'Enter the 4-digit code sent to your number.'
              : `Sign ${isLogin ? 'in' : 'up'} to continue ordering.`}
          </p>
        </div>

        {step === 'details' ? (
          <form onSubmit={handleContinue} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: 1 }}>
              {/* Phone */}
              <div style={inputWrap}>
                <Phone size={18} style={iconStyle} />
                <input type="tel" placeholder="Phone number" style={inputStyle} required />
              </div>

              {/* Email (signup only) */}
              {!isLogin && (
                <div style={inputWrap} className="animate-fade-in">
                  <Mail size={18} style={iconStyle} />
                  <input type="email" placeholder="Email address (optional)" style={inputStyle} />
                </div>
              )}

              {/* Password */}
              <div style={inputWrap}>
                <Lock size={18} style={iconStyle} />
                <input type="password" placeholder="Password" style={inputStyle} required />
              </div>

              {isLogin && (
                <div style={{ textAlign: 'right', marginTop: '-0.25rem', marginBottom: '1.25rem' }}>
                  <span className="text-primary text-sm font-semibold" style={{ cursor: 'pointer' }}>
                    Forgot password?
                  </span>
                </div>
              )}

              {/* Divider */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', margin: '0.75rem 0 1rem' }}>
                <div style={{ flex: 1, height: 1, background: 'var(--border-color)' }} />
                <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 600 }}>or continue with</span>
                <div style={{ flex: 1, height: 1, background: 'var(--border-color)' }} />
              </div>

              {/* Google placeholder */}
              <button type="button" style={{
                width: '100%',
                padding: '0.875rem',
                borderRadius: 'var(--radius-lg)',
                border: '1.5px solid var(--border-color)',
                background: 'var(--surface-color)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.625rem',
                fontSize: '0.95rem', fontWeight: 600,
                cursor: 'pointer', color: 'var(--text-main)',
                marginBottom: '0.875rem',
              }}>
                <span style={{ fontSize: '1.1rem' }}>🇬</span>
                Continue with Google
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <button type="submit" className="btn btn-primary btn-full" style={{ padding: '1.05rem', boxShadow: '0 6px 20px rgba(46,158,58,0.35)' }}>
                Continue
              </button>
              <p className="text-center text-muted" style={{ fontSize: '0.9rem' }}>
                {isLogin ? "Don't have an account? " : 'Already have an account? '}
                <span className="text-primary font-bold" style={{ cursor: 'pointer' }}
                  onClick={() => setIsLogin(!isLogin)}>
                  {isLogin ? 'Sign up' : 'Log in'}
                </span>
              </p>
            </div>
          </form>
        ) : (
          <form onSubmit={handleVerify} className="animate-fade-in"
            style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '0.5rem', gap: '2rem' }}>

              {/* Icon */}
              <div style={{
                width: '5.5rem', height: '5.5rem', borderRadius: '1.75rem',
                background: 'linear-gradient(135deg, var(--primary-light), var(--primary))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 12px 32px rgba(46,158,58,0.4)',
              }}>
                <KeyRound size={30} color="#fff" />
              </div>

              {/* OTP boxes */}
              <div style={{ display: 'flex', gap: '0.875rem' }}>
                {[0, 1, 2, 3].map(i => (
                  <input
                    key={i}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    placeholder="—"
                    required
                    style={{
                      width: '4rem',
                      height: '4.25rem',
                      textAlign: 'center',
                      fontSize: '1.75rem',
                      fontWeight: 800,
                      borderRadius: 'var(--radius-lg)',
                      marginBottom: 0,
                      padding: '0.5rem',
                      border: '2px solid var(--border-color)',
                      transition: 'border-color var(--transition-fast)',
                    }}
                    onFocus={e => (e.currentTarget.style.borderColor = 'var(--primary)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'var(--border-color)')}
                  />
                ))}
              </div>

              <p className="text-center text-muted text-sm">
                Didn't receive code?{' '}
                <span className="text-primary font-bold" style={{ cursor: 'pointer' }}>Resend</span>
              </p>
            </div>

            <button type="submit" className="btn btn-primary btn-full" style={{ padding: '1.05rem', boxShadow: '0 6px 20px rgba(46,158,58,0.35)' }}>
              Verify &amp; Continue
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
