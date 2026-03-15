import { useState } from 'react';
import { Check, X, Clock, MapPin, Phone } from 'lucide-react';

const initialOrders = [
  { id: '84J92Z', customer: 'Michael K.', items: '1x Whopper Meal, 1x Coke', total: 11.98, time: '2 mins ago', address: '123 Yankee Delivery Street', status: 'pending' },
  { id: '72K11X', customer: 'Sarah W.', items: '2x Chicken Royale', total: 13.98, time: '5 mins ago', address: '45 Apple Road', status: 'pending' },
];

const Orders = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [tab, setTab] = useState('Pending');

  const handleAction = (id: string, action: 'accept' | 'reject') => {
    setOrders(orders.map(o => o.id === id ? { ...o, status: action === 'accept' ? 'active' : 'rejected' } : o));
  };

  const displayOrders = orders.filter(o => 
    tab === 'Pending' ? o.status === 'pending' :
    tab === 'Active' ? o.status === 'active' :
    o.status === 'completed' || o.status === 'rejected'
  );

  return (
    <div className="bg-[var(--bg-color)] min-h-screen pb-24 animate-fade-in w-full max-w-[600px] mx-auto flex flex-col pt-4">
      <header className="px-4 mb-4">
        <h1 className="text-2xl font-bold">Orders</h1>
      </header>

      <div className="flex gap-4 px-4 mb-6 border-b border-gray-200">
        {['Pending', 'Active', 'History'].map(t => (
          <div 
            key={t}
            onClick={() => setTab(t)}
            className={`pb-2 text-sm font-bold cursor-pointer transition-colors ${tab === t ? 'text-primary border-b-2 border-primary' : 'text-muted'}`}
          >
            {t}
            {t === 'Pending' && orders.filter(o => o.status === 'pending').length > 0 && (
              <span className="ml-1 bg-red-500 text-white text-[10px] px-1.5 rounded-full">{orders.filter(o => o.status === 'pending').length}</span>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 px-4">
        {displayOrders.length === 0 ? (
          <div className="text-center text-muted py-12">No orders found.</div>
        ) : (
          displayOrders.map(order => (
            <div key={order.id} className="bg-white rounded-2xl p-4 shadow-sm" style={{ backgroundColor: 'var(--surface-color)' }}>
              <div className="flex justify-between items-start mb-3 border-b border-gray-100 pb-3">
                <div>
                  <h3 className="font-bold text-lg">#{order.id}</h3>
                  <div className="flex items-center gap-1 text-xs text-muted font-medium mt-1">
                    <Clock size={12} /> {order.time}
                  </div>
                </div>
                <div className="font-bold text-[var(--primary)] text-lg">${order.total}</div>
              </div>

              <div className="flex flex-col gap-2 mb-4">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm">{order.customer}</span>
                  <div className="flex items-center gap-1 text-[var(--primary)] bg-orange-50 px-2 py-1 rounded-md cursor-pointer text-xs font-bold">
                    <Phone size={12} /> Call
                  </div>
                </div>
                <div className="flex items-start gap-1.5 text-xs text-muted font-medium mt-1">
                  <MapPin size={14} className="mt-0.5 flex-shrink-0" /> {order.address}
                </div>
                <div className="bg-gray-50 p-2 rounded-lg mt-2 text-sm text-black">
                  {order.items}
                </div>
              </div>

              {order.status === 'pending' && (
                <div className="flex gap-3 mt-2">
                  <button 
                    onClick={() => handleAction(order.id, 'reject')}
                    className="flex-1 bg-red-50 text-red-600 font-bold py-2.5 rounded-xl transition-colors active:bg-red-100 flex items-center justify-center gap-1 text-sm"
                  >
                    <X size={16} /> Reject
                  </button>
                  <button 
                    onClick={() => handleAction(order.id, 'accept')}
                    className="flex-1 bg-[var(--primary)] text-white font-bold py-2.5 rounded-xl transition-transform active:scale-95 flex items-center justify-center gap-1 text-sm shadow-md"
                  >
                    <Check size={16} strokeWidth={3} /> Accept
                  </button>
                </div>
              )}
              {order.status === 'active' && (
                <button className="w-full bg-green-500 text-white font-bold py-2.5 rounded-xl shadow-md text-sm transition-transform active:scale-95">
                  Mark Ready for Pickup
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Orders;
