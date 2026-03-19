import { TrendingUp, Users, ShoppingBag, DollarSign, Activity, Truck } from 'lucide-react';

const stats = [
  { label: 'Total Revenue', value: '$45,231.89',   change: '+20.1%', icon: DollarSign,  color: 'var(--success)' },
  { label: 'Active Users',  value: '2,314',        change: '+15.2%', icon: Users,       color: 'var(--info)' },
  { label: 'Total Orders',  value: '12,234',       change: '+10.5%', icon: ShoppingBag, color: 'var(--primary)' },
  { label: 'Active Riders', value: '142',          change: '+4.1%',  icon: Truck,       color: 'var(--warning)' },
];

const Dashboard = () => {
  return (
    <div className="space-y-6 animate-fade-in">
       <div>
         <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Analytics Overview</h1>
         <p className="text-slate-500 mt-1">Here's what's happening with Yankee today.</p>
       </div>

       {/* Top Stats */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="admin-card flex flex-col items-start hover:-translate-y-1">
               <div className="flex items-center justify-between w-full mb-4">
                 <div className="p-3 rounded-xl bg-slate-50 border border-slate-100" style={{ color: stat.color }}>
                   <stat.icon size={22} />
                 </div>
                 <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md text-xs font-bold">
                   <TrendingUp size={14} />
                   {stat.change}
                 </div>
               </div>
               <h3 className="text-slate-500 font-semibold text-sm">{stat.label}</h3>
               <p className="text-3xl font-black text-slate-800 tracking-tight mt-1">{stat.value}</p>
            </div>
          ))}
       </div>

       {/* System Health / Revenue Chart Placeholder */}
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="admin-card lg:col-span-2 min-h-[400px] flex flex-col">
             <div className="flex justify-between items-center mb-6">
               <h2 className="font-extrabold text-lg text-slate-800">Revenue Breakdown</h2>
               <button className="text-primary font-bold text-sm">Download Report</button>
             </div>
             
             <div className="flex-1 bg-slate-50 border border-slate-100 border-dashed rounded-xl flex items-center justify-center flex-col text-slate-400 gap-3">
                <Activity size={48} className="text-slate-300" />
                <p className="font-semibold">Chart Data Mapping Loading...</p>
             </div>
          </div>
          
          <div className="admin-card flex flex-col">
             <h2 className="font-extrabold text-lg text-slate-800 mb-6">Recent Activity</h2>
             
             <div className="space-y-6">
               {[1,2,3,4,5].map((i) => (
                 <div key={i} className="flex gap-4">
                   <div className="w-2 h-2 mt-2 rounded-full bg-[var(--primary)] shrink-0 shadow-[0_0_10px_rgba(46,158,58,0.5)]" />
                   <div>
                     <p className="text-sm font-bold text-slate-700">New delivery completed</p>
                     <p className="text-xs font-semibold text-slate-400 mt-0.5">Order #YD-4{i}92 • 2m ago</p>
                   </div>
                 </div>
               ))}
             </div>
          </div>
       </div>
    </div>
  );
};

export default Dashboard;
