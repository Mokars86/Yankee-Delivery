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
      padding: 'calc(var(--safe-top) + 1rem) 1.5rem calc(var(--safe-bottom) + 1.5rem)',
      backgroundColor: 'var(--surface-color)',
    }}>
      {/* Back button */}
      <button onClick={goBack} className="icon-btn icon-btn-ghost"
        style={{ marginBottom: '1.75rem', alignSelf: 'flex-start' }}>
        <ArrowLeft size={20} />
      </button>

      {/* Heading */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ marginBottom: '0.375rem' }}>
          {step === 'otp' ? 'Verify OTP' : isLogin ? 'Welcome back!' : 'Create account'}
        </h1>
        <p>
          {step === 'otp'
            ? 'Enter the 4-digit code sent to your number.'
            : `Sign ${isLogin ? 'in' : 'up'} to continue.`}
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
              <div style={{ textAlign: 'right', marginTop: '-0.25rem', marginBottom: '1rem' }}>
                <span className="text-primary text-sm font-semibold" style={{ cursor: 'pointer' }}>
                  Forgot password?
                </span>
              </div>
            )}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <button type="submit" className="btn btn-primary btn-full" style={{ padding: '1rem' }}>
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
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '1rem', gap: '1.5rem' }}>
            <div style={{
              width: '5rem', height: '5rem', borderRadius: '1.5rem',
              background: 'linear-gradient(135deg, var(--primary-light), var(--primary))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 8px 24px rgba(244,130,37,0.3)',
            }}>
              <KeyRound size={28} color="#fff" />
            </div>

            {/* OTP boxes */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[0, 1, 2, 3].map(i => (
                <input
                  key={i}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  placeholder="—"
                  required
                  style={{
                    width: '3.5rem',
                    height: '3.75rem',
                    textAlign: 'center',
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    borderRadius: 'var(--radius-lg)',
                    marginBottom: 0,
                    padding: '0.5rem',
                  }}
                />
              ))}
            </div>

            <p className="text-center text-muted text-sm">
              Didn't receive code?{' '}
              <span className="text-primary font-bold" style={{ cursor: 'pointer' }}>Resend</span>
            </p>
          </div>

          <button type="submit" className="btn btn-primary btn-full" style={{ padding: '1rem' }}>
            Verify & Continue
          </button>
        </form>
      )}
    </div>
  );
};

export default Login;
