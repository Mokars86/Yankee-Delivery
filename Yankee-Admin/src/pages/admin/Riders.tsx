import { Search, Filter, MoreVertical, Navigation } from 'lucide-react';

const mockRiders = [
  { id: '1', name: 'Ahmed Ali', phone: '+1 234 567 8910', status: 'Online', vehicle: 'Motorcycle', rating: 4.8 },
  { id: '2', name: 'John Smith', phone: '+1 234 567 8911', status: 'On Delivery', vehicle: 'Bicycle', rating: 4.6 },
  { id: '3', name: 'David Chen', phone: '+1 234 567 8912', status: 'Offline', vehicle: 'Car', rating: 4.9 },
  { id: '4', name: 'Mike Johnson', phone: '+1 234 567 8913', status: 'Online', vehicle: 'Motorcycle', rating: 4.7 },
];

const Riders = () => {
  return (
    <div className="space-y-6 animate-fade-in">
       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
         <div>
           <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Fleet Management</h1>
           <p className="text-slate-500 mt-1">Monitor all delivery partners in real-time.</p>
         </div>
         <button className="btn-primary px-6 py-2.5 shadow-md self-start sm:self-auto">
           View Live Map
         </button>
       </div>

       <div className="admin-card overflow-hidden !p-0">
          <div className="p-4 border-b border-slate-100 flex items-center justify-between gap-4 bg-slate-50/50">
             <div className="relative flex-1 max-w-md">
               <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
               <input 
                 type="text" 
                 placeholder="Search riders..." 
                 className="input-field pl-10 bg-white"
               />
             </div>
             <button className="btn-outline px-4 py-2.5 hidden sm:flex">
               <Filter size={18} />
               Filters
             </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100 uppercase text-xs font-bold text-slate-500 tracking-wider">
                  <th className="p-4 pl-6 font-semibold">Rider Name</th>
                  <th className="p-4 font-semibold">Vehicle</th>
                  <th className="p-4 font-semibold">Status</th>
                  <th className="p-4 font-semibold text-right pr-6">Rating</th>
                  <th className="p-4 w-10"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {mockRiders.map((rider) => (
                  <tr key={rider.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 pl-6">
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                           <img src={`https://ui-avatars.com/api/?name=${rider.name.replace(' ', '+')}&background=random`} alt={rider.name} className="w-full h-full rounded-full" />
                         </div>
                         <div>
                           <div className="font-bold text-slate-900">{rider.name}</div>
                           <div className="text-xs text-slate-500 font-medium">{rider.phone}</div>
                         </div>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-slate-600 font-medium">{rider.vehicle}</td>
                    <td className="p-4">
                      <span className={`px-2.5 py-1 text-xs font-bold rounded-md flex items-center w-fit
                        ${rider.status === 'Online' ? 'bg-emerald-50 text-emerald-600' : ''}
                        ${rider.status === 'On Delivery' ? 'bg-[var(--accent-bg)] text-[var(--accent-dark)]' : ''}
                        ${rider.status === 'Offline' ? 'bg-slate-100 text-slate-500' : ''}
                      `}>
                         {rider.status === 'Online' && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5" />}
                         {rider.status === 'On Delivery' && <Navigation size={10} className="mr-1 inline fill-current" />}
                         {rider.status}
                      </span>
                    </td>
                    <td className="p-4 text-right pr-6 font-bold text-slate-900">{rider.rating}</td>
                    <td className="p-4 pr-4">
                      <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors">
                        <MoreVertical size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
       </div>
    </div>
  );
};

export default Riders;
