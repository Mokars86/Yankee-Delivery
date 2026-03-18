import { TrendingUp } from 'lucide-react';

const Analytics = () => {
  // Mock data for the chart bars
  const weeklyData = [
    { day: 'Mon', height: '40%' },
    { day: 'Tue', height: '60%' },
    { day: 'Wed', height: '30%' },
    { day: 'Thu', height: '80%' },
    { day: 'Fri', height: '100%' }, // Max
    { day: 'Sat', height: '90%' },
    { day: 'Sun', height: '70%' },
  ];

  return (
    <div className="bg-[var(--bg-color)] min-h-screen pb-24 animate-fade-in w-full max-w-[600px] mx-auto p-4 pt-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold">Analytics</h1>
        <p className="text-muted text-sm mt-1">Track your store's performance</p>
      </header>

      <div className="bg-[var(--primary)] text-white rounded-3xl p-6 shadow-lg mb-6 relative overflow-hidden">
        {/* Decorative circle */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full transform translate-x-10 -translate-y-10"></div>
        
        <p className="text-white/80 font-medium text-sm mb-1">Total Sales (This Week)</p>
        <h2 className="text-4xl font-bold grid">
          $3,240.50
        </h2>
        <div className="flex items-center gap-1 mt-4 text-sm font-bold bg-white/20 inline-flex px-2 py-1 rounded-lg backdrop-blur-sm">
          <TrendingUp size={16} /> +15.3% vs last week
        </div>
      </div>

      <h3 className="font-bold text-lg mb-4">Revenue Chart</h3>
      <div className="bg-white p-4 rounded-2xl shadow-sm mb-6" style={{ backgroundColor: 'var(--surface-color)' }}>
        <div className="flex items-end justify-between h-40 pt-4 pb-2 border-b border-gray-100 gap-2">
          {weeklyData.map((d, i) => (
            <div key={i} className="flex flex-col items-center flex-1 gap-2">
              <div className="w-full flex-1 flex items-end justify-center">
                 <div 
                   className="w-full max-w-[24px] bg-orange-100 rounded-t-sm relative transition-all duration-1000" 
                   style={{ height: d.height, backgroundColor: d.height === '100%' ? 'var(--primary)' : 'var(--primary-light)' }}
                 ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2 px-1">
          {weeklyData.map((d, i) => (
            <span key={i} className={`text-xs font-bold flex-1 text-center ${d.height === '100%' ? 'text-[var(--primary)]' : 'text-muted'}`}>{d.day}</span>
          ))}
        </div>
      </div>

      <h3 className="font-bold text-lg mb-4">Top Selling Items</h3>
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden" style={{ backgroundColor: 'var(--surface-color)' }}>
        {[
          { name: 'Whopper Meal', sales: 145, revenue: '$1,303.55' },
          { name: 'Chicken Royale', sales: 98, revenue: '$685.02' },
          { name: 'Oreo Shake', sales: 64, revenue: '$255.36' },
        ].map((item, idx) => (
          <div key={idx} className="flex justify-between items-center p-4 border-b border-gray-100 last:border-0">
            <div className="flex gap-4 items-center">
              <span className="font-bold text-muted text-lg w-4">{idx + 1}</span>
              <div>
                <h4 className="font-bold text-sm">{item.name}</h4>
                <p className="text-xs text-muted font-medium mt-0.5">{item.sales} orders</p>
              </div>
            </div>
            <span className="font-bold text-[var(--primary)] text-sm">{item.revenue}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analytics;
