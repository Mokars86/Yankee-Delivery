import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, ArrowRight, Bike } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login sequence
    navigate('/rider/dashboard');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 pb-safe relative z-10 animate-fade-in">
      
      {/* Top Graphic Area */}
      <div className="bg-primary pt-safe pb-10 px-6 rounded-b-[2.5rem] shadow-md relative overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[150%] bg-white/10 rounded-full blur-[60px]" />
        
        <div className="relative z-10 flex flex-col items-center mt-8">
           <div className="w-20 h-20 bg-white rounded-[1.5rem] shadow-xl flex items-center justify-center mb-6">
             <Bike className="w-10 h-10 text-primary" />
           </div>
           <h1 className="text-3xl font-extrabold text-white tracking-tight text-center">
             Welcome Back
           </h1>
           <p className="text-white/80 font-medium text-center mt-2">
             Sign in to get back on the road.
           </p>
        </div>
      </div>

      {/* Login Form */}
      <div className="flex-1 px-6 pt-8 pb-10 relative z-20 -mt-6">
        <div className="bg-white rounded-[1.5rem] shadow-lg p-6 border border-gray-100">
          <form onSubmit={handleLogin} className="space-y-5">
            
            {/* Email Input */}
            <div className="relative">
               <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">
                 Email Address
               </label>
               <div className="relative">
                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                   <Mail className="h-5 w-5 text-gray-400" />
                 </div>
                 <input 
                   type="email" 
                   required
                   style={{ paddingLeft: '3rem' }}
                   className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                   placeholder="rider@yankeedelivery.com" 
                 />
               </div>
            </div>

            {/* Password Input */}
            <div className="relative">
               <div className="flex justify-between items-center mb-2 ml-1 mr-1">
                 <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">
                   Password
                 </label>
                 <a href="#" className="text-xs font-bold text-primary hover:text-primary-dark transition-colors">
                   Forgot?
                 </a>
               </div>
               <div className="relative">
                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                   <Lock className="h-5 w-5 text-gray-400" />
                 </div>
                 <input 
                   type="password" 
                   required
                   style={{ paddingLeft: '3rem' }}
                   className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                   placeholder="••••••••" 
                 />
               </div>
            </div>

            <div className="pt-2">
              <button 
                type="submit" 
                className="btn btn-primary btn-full shadow-md active:scale-95 transition-transform"
              >
                Sign In
                <ArrowRight size={20} />
              </button>
            </div>
            
          </form>
        </div>

        {/* Sign up link */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 font-medium">
            Don't have a rider account?{' '}
            <Link to="/register" className="text-primary font-bold hover:underline">
              Sign up now
            </Link>
          </p>
        </div>

      </div>

    </div>
  );
};

export default Login;
