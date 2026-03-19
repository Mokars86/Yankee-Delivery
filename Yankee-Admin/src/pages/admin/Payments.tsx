import { Search, Filter, DollarSign, Download, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const mockTransactions = [
  { id: 'TXN-001', date: 'Mar 19, 2024', type: 'Payout', recipient: 'Burger King', amount: '-$1,200.00', status: 'Completed' },
  { id: 'TXN-002', date: 'Mar 19, 2024', type: 'Order Payment', recipient: 'John Doe', amount: '+$24.50', status: 'Completed' },
  { id: 'TXN-003', date: 'Mar 18, 2024', type: 'Payout', recipient: 'Ahmed Ali (Rider)', amount: '-$154.20', status: 'Processing' },
  { id: 'TXN-004', date: 'Mar 18, 2024', type: 'Refund', recipient: 'Sarah Smith', amount: '-$12.00', status: 'Completed' },
  { id: 'TXN-005', date: 'Mar 17, 2024', type: 'Order Payment', recipient: 'Michael Brown', amount: '+$85.20', status: 'Completed' },
];

const Payments = () => {
  return (
    <div className="space-y-6 animate-fade-in">
       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
         <div>
           <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Payments & Financials</h1>
           <p className="text-slate-500 mt-1">Manage payouts, refunds, and view transaction history.</p>
         </div>
         <div className="flex gap-3 self-start sm:self-auto">
            <button className="btn-outline px-4 py-2.5">
              <Download size={18} /> Export
            </button>
            <button className="btn-primary px-6 py-2.5 shadow-md">
              Process Payouts
            </button>
         </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="admin-card !p-5 bg-gradient-to-br from-[var(--primary-dark)] to-[var(--primary)] text-white border-transparent">
             <div className="flex items-center gap-3 text-white/80 mb-2 font-medium">
               <DollarSign size={20} /> Total Revenue (MTD)
             </div>
             <div className="text-4xl font-black mb-1">$124,500</div>
             <div className="text-sm font-bold text-white/90 flex items-center gap-1">
               <ArrowUpRight size={16} /> +12.5% from last month
             </div>
          </div>
          <div className="admin-card !p-5">
             <div className="flex items-center gap-3 text-slate-500 mb-2 font-bold">
               Pending Payouts
             </div>
             <div className="text-4xl font-black text-slate-900 mb-1">$45,230</div>
             <div className="text-sm font-bold text-slate-400">Due in 2 days</div>
          </div>
          <div className="admin-card !p-5">
             <div className="flex items-center gap-3 text-slate-500 mb-2 font-bold">
               Platform Fees Collected
             </div>
             <div className="text-4xl font-black text-[var(--primary)] mb-1">$18,675</div>
             <div className="text-sm font-bold text-[var(--success)] flex items-center gap-1">
               <ArrowUpRight size={16} /> 15% average fee
             </div>
          </div>
       </div>

       <div className="admin-card overflow-hidden !p-0">
          <div className="p-4 border-b border-slate-100 flex items-center justify-between gap-4 bg-slate-50/50">
             <h2 className="font-extrabold text-lg text-slate-800 ml-2">Recent Transactions</h2>
             <div className="flex gap-2">
                <div className="relative hidden md:block max-w-[200px]">
                  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input type="text" placeholder="Search ID..." className="input-field pl-9 py-2 text-xs bg-white" />
                </div>
                <button className="btn-outline px-3 py-2 text-sm">
                  <Filter size={16} /> Filter
                </button>
             </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100 uppercase text-xs font-bold text-slate-500 tracking-wider">
                  <th className="p-4 pl-6 font-semibold">Transaction ID</th>
                  <th className="p-4 font-semibold">Type</th>
                  <th className="p-4 font-semibold">Recipient / Sender</th>
                  <th className="p-4 font-semibold text-center">Status</th>
                  <th className="p-4 font-semibold text-right pr-6">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {mockTransactions.map((txn) => (
                  <tr key={txn.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 pl-6">
                       <span className="font-bold text-slate-900">{txn.id}</span>
                       <div className="text-xs text-slate-500 font-medium">{txn.date}</div>
                    </td>
                    <td className="p-4">
                       <span className={`px-2.5 py-1 text-xs font-bold rounded-md inline-block w-fit
                         ${txn.type === 'Payout' ? 'bg-indigo-50 text-indigo-700' : ''}
                         ${txn.type === 'Order Payment' ? 'bg-[var(--primary-bg)] text-[var(--primary-dark)]' : ''}
                         ${txn.type === 'Refund' ? 'bg-orange-50 text-orange-700' : ''}
                       `}>
                          {txn.type}
                       </span>
                    </td>
                    <td className="p-4 font-bold text-slate-700 text-sm">
                       {txn.recipient}
                    </td>
                    <td className="p-4 text-center">
                      <span className={`px-2.5 py-1 text-xs font-bold rounded-md inline-block w-fit
                        ${txn.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' : ''}
                        ${txn.status === 'Processing' ? 'bg-[var(--warning)]/10 text-[var(--warning)]' : ''}
                      `}>
                         {txn.status}
                      </span>
                    </td>
                    <td className="p-4 text-right pr-6 font-black text-slate-900">
                      <span className={`flex items-center justify-end gap-1 ${txn.amount.startsWith('+') ? 'text-[var(--primary-dark)]' : 'text-slate-900'}`}>
                         {txn.amount.startsWith('+') ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} className="text-slate-400" />}
                         {txn.amount}
                      </span>
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

export default Payments;
