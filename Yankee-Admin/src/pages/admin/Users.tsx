import { Search, Filter, MoreVertical, ShieldCheck, Mail, Phone } from 'lucide-react';

const mockUsers = [
  { id: '1', name: 'John Doe', email: 'john@example.com', phone: '+1 234 567 8900', status: 'Active', joined: 'Oct 24, 2023', orders: 42 },
  { id: '2', name: 'Sarah Smith', email: 'sarah@example.com', phone: '+1 234 567 8901', status: 'Active', joined: 'Nov 02, 2023', orders: 15 },
  { id: '3', name: 'Michael Brown', email: 'michael@example.com', phone: '+1 234 567 8902', status: 'Inactive', joined: 'Jan 15, 2024', orders: 2 },
  { id: '4', name: 'Emily Davis', email: 'emily@example.com', phone: '+1 234 567 8903', status: 'Banned', joined: 'Feb 10, 2024', orders: 0 },
  { id: '5', name: 'David Wilson', email: 'david@example.com', phone: '+1 234 567 8904', status: 'Active', joined: 'Feb 28, 2024', orders: 7 },
];

const Users = () => {
  return (
    <div className="space-y-6 animate-fade-in">
       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
         <div>
           <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Customer Management</h1>
           <p className="text-slate-500 mt-1">Manage and view all registered platform users.</p>
         </div>
         <button className="btn-primary px-6 py-2.5 shadow-md self-start sm:self-auto">
           Export CSV
         </button>
       </div>

       <div className="admin-card overflow-hidden !p-0">
          <div className="p-4 border-b border-slate-100 flex items-center justify-between gap-4 bg-slate-50/50">
             <div className="relative flex-1 max-w-md">
               <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
               <input 
                 type="text" 
                 placeholder="Search by name, email, or phone..." 
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
                  <th className="p-4 pl-6 font-semibold">User</th>
                  <th className="p-4 font-semibold">Contact Info</th>
                  <th className="p-4 font-semibold">Status</th>
                  <th className="p-4 font-semibold">Joined Date</th>
                  <th className="p-4 font-semibold text-right pr-6">Orders</th>
                  <th className="p-4 w-10"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {mockUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 pl-6">
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-full bg-[var(--primary-bg)] text-[var(--primary)] flex items-center justify-center font-bold text-lg shrink-0">
                           {user.name.charAt(0)}
                         </div>
                         <div>
                           <div className="font-bold text-slate-900 flex items-center gap-1.5">
                              {user.name}
                              {user.status === 'Active' && <ShieldCheck size={14} className="text-[var(--success)]" />}
                           </div>
                           <div className="text-xs text-slate-500 font-medium">ID: #{user.id.padStart(5, '0')}</div>
                         </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-col gap-1">
                        <span className="flex items-center gap-1.5 text-sm text-slate-600 font-medium">
                          <Mail size={14} className="text-slate-400"/> {user.email}
                        </span>
                        <span className="flex items-center gap-1.5 text-sm text-slate-600 font-medium">
                          <Phone size={14} className="text-slate-400"/> {user.phone}
                        </span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`px-2.5 py-1 text-xs font-bold rounded-md flex items-center w-fit
                        ${user.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : ''}
                        ${user.status === 'Inactive' ? 'bg-slate-100 text-slate-500' : ''}
                        ${user.status === 'Banned' ? 'bg-red-50 text-red-600' : ''}
                      `}>
                         {user.status === 'Active' && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5" />}
                         {user.status}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-slate-600 font-medium">{user.joined}</td>
                    <td className="p-4 text-right pr-6 font-bold text-slate-900">{user.orders}</td>
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

          <div className="p-4 border-t border-slate-100 flex items-center justify-between text-sm text-slate-500 font-medium bg-slate-50/50">
             <span>Showing 1 to 5 of 2,314 entries</span>
             <div className="flex gap-1">
                <button className="px-3 py-1 border border-slate-200 rounded-md hover:bg-slate-100 disabled:opacity-50">Prev</button>
                <button className="px-3 py-1 border border-[var(--primary)] bg-[var(--primary)] text-white rounded-md">1</button>
                <button className="px-3 py-1 border border-slate-200 rounded-md hover:bg-slate-100">2</button>
                <button className="px-3 py-1 border border-slate-200 rounded-md hover:bg-slate-100">3</button>
                <button className="px-3 py-1 border border-slate-200 rounded-md hover:bg-slate-100">Next</button>
             </div>
          </div>
       </div>
    </div>
  );
};

export default Users;
