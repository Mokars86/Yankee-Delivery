import { LogOut, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 pb-safe animate-fade-in relative z-10">
      
      {/* Header Profile Section */}
      <div className="bg-primary pt-safe pb-8 px-6 rounded-b-[2.5rem] shadow-md mb-6 relative">
         <div className="flex items-center gap-4 mt-6">
            <div className="w-20 h-20 bg-white rounded-full p-1 shadow-md relative">
              <img 
                src="https://ui-avatars.com/api/?name=Alex+Rider&background=random" 
                alt="Profile" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="text-white">
              <h1 className="text-2xl font-extrabold tracking-tight">Alex Rider</h1>
              <p className="text-white/80 font-medium flex items-center gap-1 mt-1">
                <CheckCircle2 size={14} className="text-primary-light" />
                Verified Rider
              </p>
            </div>
         </div>
      </div>

      <div className="px-5 flex-1 space-y-4 mb-8">
         <div className="bg-white rounded-[1.25rem] shadow-sm border border-gray-100 p-4 flex items-center justify-between cursor-pointer active:scale-95 transition-transform">
             <div className="flex flex-col">
               <span className="font-bold text-gray-900">Personal Information</span>
               <span className="text-sm text-gray-500">Edit your details</span>
             </div>
             <ChevronRight className="text-gray-400" />
         </div>

         <div className="bg-white rounded-[1.25rem] shadow-sm border border-gray-100 p-4 flex items-center justify-between cursor-pointer active:scale-95 transition-transform">
             <div className="flex flex-col">
               <span className="font-bold text-gray-900">Vehicle Details</span>
               <span className="text-sm text-gray-500">Motorcycle Honda PCX</span>
             </div>
             <ChevronRight className="text-gray-400" />
         </div>
         
         <div className="bg-white rounded-[1.25rem] shadow-sm border border-gray-100 p-4 flex items-center justify-between cursor-pointer active:scale-95 transition-transform">
             <div className="flex flex-col">
               <span className="font-bold text-gray-900">Support</span>
               <span className="text-sm text-gray-500">Help center, Terms, Privacy</span>
             </div>
             <ChevronRight className="text-gray-400" />
         </div>
      </div>

      <div className="px-5 pb-8">
        <button 
          onClick={() => navigate('/')}
          className="w-full py-4 text-danger font-bold bg-danger/10 rounded-[1.25rem] flex items-center justify-center gap-2 active:scale-95 transition-transform"
        >
          <LogOut size={20} />
          Log Out
        </button>
      </div>
      
    </div>
  );
};

export default Profile;
