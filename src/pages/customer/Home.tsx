import { MapPin, Bell, Search, ChevronDown, Clock, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const categories = [
  { id: 1, name: 'Food', icon: '🍔', color: '#FFF3E0' },
  { id: 2, name: 'Groceries', icon: '🛒', color: '#E8F5E9' },
  { id: 3, name: 'Pharmacy', icon: '💊', color: '#E3F2FD' },
  { id: 4, name: 'Send', icon: '📦', color: '#F3E5F5' },
];

const restaurants = [
  { id: 1, name: 'Burger King', rating: 4.8, time: '20-30 min', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=80', tags: 'American, Fast Food' },
  { id: 2, name: 'Pizza Hut', rating: 4.5, time: '30-40 min', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=300&q=80', tags: 'Pizza, Italian' },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 animate-fade-in flex flex-col gap-6 w-full max-w-[600px] mx-auto pb-20">
      <header className="flex justify-between items-center w-full">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-primary" style={{ backgroundColor: 'var(--primary-light)' }}>
            <MapPin size={20} color="white" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-muted font-medium">Deliver to</span>
            <div className="flex items-center gap-1 font-bold text-sm">
              Current Location <ChevronDown size={14} />
            </div>
          </div>
        </div>
        <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center relative">
          <Bell size={20} />
          <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></div>
        </div>
      </header>

      <div className="relative w-full">
        <Search size={20} className="absolute left-4 top-3.5 text-muted" style={{ color: 'var(--text-muted)' }} />
        <input 
          type="text" 
          placeholder="Search food, groceries, or items" 
          className="w-full bg-gray-50 border-none font-medium text-sm"
          style={{ paddingLeft: '3rem', backgroundColor: 'var(--bg-color)', borderRadius: 'var(--radius-xl)' }}
          onFocus={() => navigate('/customer/search')}
        />
      </div>

      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Categories</h2>
          <span className="text-sm text-primary font-medium cursor-pointer">See all</span>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {categories.map(cat => (
            <div key={cat.id} className="flex flex-col items-center gap-2 cursor-pointer">
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl shadow-sm transition-transform hover:scale-105"
                style={{ backgroundColor: cat.color }}
              >
                {cat.icon}
              </div>
              <span className="text-xs font-semibold text-center">{cat.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Nearby Restaurants</h2>
          <span className="text-sm text-primary font-medium cursor-pointer">See all</span>
        </div>
        
        <div className="flex flex-col gap-5">
          {restaurants.map(rest => (
            <div 
              key={rest.id} 
              className="flex flex-col rounded-2xl overflow-hidden shadow-sm cursor-pointer transition-transform hover:-translate-y-1 bg-white"
              style={{ backgroundColor: 'var(--surface-color)', border: '1px solid rgba(0,0,0,0.05)' }}
              onClick={() => navigate(`/customer/restaurant/${rest.id}`)}
            >
              <div className="h-40 w-full relative">
                <img src={rest.image} alt={rest.name} className="w-full h-full object-cover" />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1 shadow-sm">
                  <Star size={12} fill="var(--warning)" color="var(--warning)" />
                  {rest.rating}
                </div>
              </div>
              <div className="p-4 flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg mb-1">{rest.name}</h3>
                  <p className="text-xs text-muted font-medium mb-3">{rest.tags}</p>
                </div>
                <div className="bg-orange-50 text-primary px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1" style={{ backgroundColor: 'rgba(244, 130, 37, 0.1)' }}>
                  <Clock size={12} />
                  {rest.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
