import { useNavigate } from 'react-router-dom';
import { ShoppingBag, Store } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

const Welcome = () => {
  const navigate = useNavigate();
  const { setRole } = useAppContext();

  const handleSelectRole = (role: 'customer' | 'merchant') => {
    setRole(role);
    navigate('/auth/login');
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-6 animate-fade-in" style={{ height: '100vh' }}>
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-sm text-center">
        <div className="w-48 h-48 bg-orange-100 rounded-full flex items-center justify-center mb-8" style={{ backgroundColor: 'var(--primary-light)', opacity: 0.8 }}>
          <ShoppingBag size={80} color="white" />
        </div>
        
        <h1 className="text-3xl font-bold mb-2">Welcome to Yankee!</h1>
        <p className="text-muted mb-10">Choose how you want to use the app today.</p>

        <div className="w-full flex-col gap-4" style={{ display: 'flex' }}>
          <button 
            className="btn btn-primary btn-full flex items-center justify-center gap-2 text-lg py-4"
            onClick={() => handleSelectRole('customer')}
          >
            <ShoppingBag size={24} />
            Continue as Customer
          </button>
          
          <button 
            className="btn btn-outline btn-full flex items-center justify-center gap-2 text-lg py-4 mt-4"
            onClick={() => handleSelectRole('merchant')}
          >
            <Store size={24} />
            Continue as Merchant
          </button>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
