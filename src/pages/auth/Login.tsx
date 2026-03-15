import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import { ArrowLeft, Mail, Phone, Lock, KeyRound } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const { role } = useAppContext();
  
  const [isLogin, setIsLogin] = useState(true);
  const [step, setStep] = useState<'details' | 'otp'>('details');

  const handleBack = () => {
    if (step === 'otp') {
      setStep('details');
    } else {
      navigate('/welcome');
    }
  };

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('otp');
  };

  const handleVerifyOTP = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect based on role
    if (role === 'merchant') {
      navigate('/merchant/dashboard');
    } else {
      navigate('/customer/home');
    }
  };

  return (
    <div className="h-full w-full flex flex-col p-6 animate-fade-in" style={{ height: '100vh', backgroundColor: 'var(--surface-color)' }}>
      <button 
        onClick={handleBack}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 mb-6"
        style={{ border: 'none', cursor: 'pointer', backgroundColor: 'var(--bg-color)' }}
      >
        <ArrowLeft size={20} />
      </button>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          {step === 'otp' ? 'Verification' : isLogin ? 'Welcome Back!' : 'Create Account'}
        </h1>
        <p className="text-muted">
          {step === 'otp' 
            ? 'Enter the 4-digit OTP sent to your phone/email.' 
            : `Please enter your details to ${isLogin ? 'sign in' : 'sign up'}.`}
        </p>
      </div>

      {step === 'details' ? (
        <form onSubmit={handleContinue} className="flex flex-col flex-1">
          <div className="flex-1 flex flex-col gap-4">
            <div className="relative">
              <Phone size={20} className="absolute left-3 top-3.5 text-muted" style={{ color: 'var(--text-muted)' }} />
              <input type="tel" placeholder="Phone number" style={{ paddingLeft: '2.5rem' }} required />
            </div>

            {!isLogin && (
              <div className="relative animate-fade-in">
                <Mail size={20} className="absolute left-3 top-3.5 text-muted" style={{ color: 'var(--text-muted)' }} />
                <input type="email" placeholder="Email address (Optional)" style={{ paddingLeft: '2.5rem' }} />
              </div>
            )}

            <div className="relative">
              <Lock size={20} className="absolute left-3 top-3.5 text-muted" style={{ color: 'var(--text-muted)' }} />
              <input type="password" placeholder="Password" style={{ paddingLeft: '2.5rem' }} required />
            </div>

            {isLogin && <div className="text-right text-sm font-medium text-primary cursor-pointer mt-[-0.5rem]">Forgot password?</div>}
          </div>

          <div className="mt-8">
            <button type="submit" className="btn btn-primary btn-full mb-4">
              Continue
            </button>
            <div className="text-center text-muted">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <span 
                className="text-primary font-bold cursor-pointer" 
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? 'Sign up' : 'Log in'}
              </span>
            </div>
          </div>
        </form>
      ) : (
        <form onSubmit={handleVerifyOTP} className="flex flex-col flex-1 animate-fade-in">
          <div className="flex-1 flex flex-col items-center gap-6 mt-4">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-2" style={{ backgroundColor: 'var(--primary-light)', opacity: 0.8 }}>
              <KeyRound size={32} color="white" />
            </div>
            
            <div className="flex gap-3 justify-center">
              {[1, 2, 3, 4].map((i) => (
                <input 
                  key={i} 
                  type="text" 
                  maxLength={1} 
                  className="w-14 h-14 text-center text-2xl font-bold"
                  style={{ borderRadius: 'var(--radius-lg)', margin: 0 }}
                  placeholder="-"
                  required
                />
              ))}
            </div>

            <div className="text-center text-muted text-sm mt-4">
              Didn't receive code? <span className="text-primary font-bold cursor-pointer">Resend</span>
            </div>
          </div>

          <div className="mt-8">
            <button type="submit" className="btn btn-primary btn-full mb-4">
              Verify & Proceed
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
export default Login;
