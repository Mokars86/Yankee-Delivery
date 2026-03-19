import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Phone, Briefcase, ArrowRight } from 'lucide-react';

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate register sequence
    navigate('/rider/dashboard');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 pb-safe relative z-10 animate-fade-in">
      
      {/* Simple Header */}
      <div className="bg-white pt-safe pb-4 px-6 shadow-sm sticky top-0 z-30 flex items-center justify-between border-b border-gray-100">
         <h1 className="text-xl font-extrabold text-gray-900 tracking-tight">Create Account</h1>
         <Link to="/login" className="text-sm font-bold text-primary">Login</Link>
      </div>

      {/* Graphic / Intro */}
      <div className="px-6 py-6 pb-2">
         <h2 className="text-3xl font-black text-gray-900 leading-tight">Join Yankee Ride</h2>
         <p className="text-gray-500 mt-2 font-medium">Earn money on your own schedule. Sign up to start delivering today.</p>
      </div>

      {/* Registration Form */}
      <div className="flex-1 px-6 py-6 pb-12">
        <form onSubmit={handleRegister} className="space-y-5">
            
            {/* Full Name */}
            <div className="relative">
               <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">
                 Full Name
               </label>
               <div className="relative">
                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                   <User className="h-5 w-5 text-gray-400" />
                 </div>
                 <input 
                   type="text" 
                   required
                   style={{ paddingLeft: '3rem' }}
                   className="w-full bg-white border border-gray-200 text-gray-900 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                   placeholder="Alex Rider" 
                 />
               </div>
            </div>

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
                   className="w-full bg-white border border-gray-200 text-gray-900 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                   placeholder="rider@yankeedelivery.com" 
                 />
               </div>
            </div>

            {/* Phone Input */}
            <div className="relative">
               <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">
                 Phone Number
               </label>
               <div className="relative">
                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                   <Phone className="h-5 w-5 text-gray-400" />
                 </div>
                 <input 
                   type="tel" 
                   required
                   style={{ paddingLeft: '3rem' }}
                   className="w-full bg-white border border-gray-200 text-gray-900 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                   placeholder="(555) 123-4567" 
                 />
               </div>
            </div>

            {/* Vehicle Type */}
            <div className="relative">
               <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">
                 Vehicle Type
               </label>
               <div className="relative cursor-pointer">
                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                   <Briefcase className="h-5 w-5 text-gray-400" />
                 </div>
                 <select 
                   required
                   style={{ paddingLeft: '3rem' }}
                   className="w-full bg-white border border-gray-200 text-gray-900 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors cursor-pointer appearance-none"
                   defaultValue=""
                 >
                    <option value="" disabled>Select your vehicle</option>
                    <option value="motorcycle">Motorcycle</option>
                    <option value="bicycle">Bicycle</option>
                    <option value="car">Car (Sedan/Hatchback)</option>
                    <option value="van">Van / Truck</option>
                 </select>
               </div>
            </div>

            {/* Password Input */}
            <div className="relative">
               <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">
                 Password
               </label>
               <div className="relative">
                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                   <Lock className="h-5 w-5 text-gray-400" />
                 </div>
                 <input 
                   type="password" 
                   required
                   style={{ paddingLeft: '3rem' }}
                   className="w-full bg-white border border-gray-200 text-gray-900 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                   placeholder="Create a strong password" 
                 />
               </div>
            </div>
            
            <p className="text-xs text-gray-500 text-center font-medium my-2">
              By registering, you agree to Yankee Delivery's Terms & Conditions.
            </p>

            <div className="pt-2">
              <button 
                type="submit" 
                className="btn btn-primary btn-full shadow-md active:scale-95 transition-transform"
              >
                Create Rider Account
                <ArrowRight size={20} />
              </button>
            </div>
            
        </form>
      </div>

    </div>
  );
};

export default Register;
