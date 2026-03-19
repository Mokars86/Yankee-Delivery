import { Search, Filter, MoreVertical, Eye } from 'lucide-react';

const mockOrders = [
  { id: 'YD-9842', customer: 'John Doe', merchant: 'Burger King', amount: '$24.50', status: 'Delivered', time: '10 mins ago' },
  { id: 'YD-9843', customer: 'Sarah Smith', merchant: 'Green Market', amount: '$85.20', status: 'In Transit', time: 'Just now' },
  { id: 'YD-9844', customer: 'Michael Brown', merchant: 'Pharmacy Plus', amount: '$12.00', status: 'Preparing', time: '5 mins ago' },
  { id: 'YD-9845', customer: 'David Wilson', merchant: 'Pizza Hut', amount: '$32.99', status: 'Cancelled', time: '1 hour ago' },
];

const Orders = () => {
  return (
    <div className="space-y-6 animate-fade-in">
       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
         <div>
           <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Order Logs</h1>
           <p className="text-slate-500 mt-1">Track all active and historical requests.</p>
         </div>
       </div>

       <div className="admin-card overflow-hidden !p-0">
          <div className="p-4 border-b border-slate-100 flex items-center justify-between gap-4 bg-slate-50/50">
             <div className="relative flex-1 max-w-md">
               <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
               <input 
                 type="text" 
                 placeholder="Search by ID, customer..." 
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
                  <th className="p-4 pl-6 font-semibold">Order ID</th>
                  <th className="p-4 font-semibold">Details</th>
                  <th className="p-4 font-semibold text-center">Status</th>
                  <th className="p-4 font-semibold text-right pr-6">Amount</th>
                  <th className="p-4 w-10"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {mockOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 pl-6">
                       <span className="font-bold text-slate-900">{order.id}</span>
                       <div className="text-xs text-slate-500 font-medium">{order.time}</div>
                    </td>
                    <td className="p-4">
                       <div className="font-bold text-slate-700 text-sm">C: {order.customer}</div>
                       <div className="text-xs text-slate-500 font-medium">M: {order.merchant}</div>
                    </td>
                    <td className="p-4 text-center">
                      <span className={`px-2.5 py-1 text-xs font-bold rounded-md inline-block w-fit
                        ${order.status === 'Delivered' ? 'bg-emerald-50 text-emerald-600' : ''}
                        ${order.status === 'In Transit' ? 'bg-[var(--primary-bg)] text-[var(--primary)]' : ''}
                        ${order.status === 'Preparing' ? 'bg-[var(--accent-bg)] text-[var(--accent-dark)]' : ''}
                        ${order.status === 'Cancelled' ? 'bg-red-50 text-red-600' : ''}
                      `}>
                         {order.status}
                      </span>
                    </td>
                    <td className="p-4 text-right pr-6 font-black text-slate-900">{order.amount}</td>
                    <td className="p-4 pr-4">
                      <div className="flex gap-2">
                         <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors" title="View Details">
                           <Eye size={18} />
                         </button>
                         <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors">
                           <MoreVertical size={18} />
                         </button>
                      </div>
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

export default Orders;
