import { Search, Plus, MoreVertical, MapPin, Star } from 'lucide-react';

const mockMerchants = [
  { id: '1', name: 'Burger King', category: 'Fast Food', rating: 4.8, activeOrders: 12, revenue: '$4,230', status: 'Open' },
  { id: '2', name: 'Pizza Hut', category: 'Italian', rating: 4.5, activeOrders: 5, revenue: '$2,850', status: 'Open' },
  { id: '3', name: 'Sushi Central', category: 'Asian', rating: 4.9, activeOrders: 8, revenue: '$5,120', status: 'Closed' },
  { id: '4', name: 'Green Market', category: 'Groceries', rating: 4.7, activeOrders: 24, revenue: '$8,400', status: 'Open' },
];

const Merchants = () => {
  return (
    <div className="space-y-6 animate-fade-in">
       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
         <div>
           <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Merchants</h1>
           <p className="text-slate-500 mt-1">Manage restaurant and store partners.</p>
         </div>
         <button className="btn-primary px-6 py-2.5 shadow-md self-start sm:self-auto">
           <Plus size={18} /> Add New Merchant
         </button>
       </div>

       <div className="admin-card overflow-hidden !p-0">
          <div className="p-4 border-b border-slate-100 flex items-center justify-between gap-4 bg-slate-50/50">
             <div className="relative flex-1 max-w-md">
               <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
               <input 
                 type="text" 
                 placeholder="Search merchants..." 
                 className="input-field pl-10 bg-white"
               />
             </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100 uppercase text-xs font-bold text-slate-500 tracking-wider">
                  <th className="p-4 pl-6 font-semibold">Store Name</th>
                  <th className="p-4 font-semibold">Category</th>
                  <th className="p-4 font-semibold">Rating</th>
                  <th className="p-4 font-semibold text-center">Status</th>
                  <th className="p-4 font-semibold text-right pr-6">Weekly Revenue</th>
                  <th className="p-4 w-10"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {mockMerchants.map((merchant) => (
                  <tr key={merchant.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 pl-6">
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                           <MapPin size={20} className="text-slate-400" />
                         </div>
                         <div>
                           <div className="font-bold text-slate-900">{merchant.name}</div>
                           <div className="text-xs text-slate-500 font-medium">{merchant.activeOrders} active orders currently</div>
                         </div>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-slate-600 font-medium">
                      <span className="bg-slate-100 px-2 py-1 rounded text-xs font-bold text-slate-600">
                        {merchant.category}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1 text-sm font-bold text-slate-700">
                         <Star size={14} className="text-[var(--warning)] fill-[var(--warning)]" />
                         {merchant.rating}
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <span className={`px-2 py-1 text-xs font-bold rounded-md inline-block
                        ${merchant.status === 'Open' ? 'bg-[var(--primary-bg)] text-[var(--primary-dark)]' : 'bg-slate-100 text-slate-500'}
                      `}>
                         {merchant.status}
                      </span>
                    </td>
                    <td className="p-4 text-right pr-6 font-bold text-slate-900">{merchant.revenue}</td>
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

export default Merchants;
