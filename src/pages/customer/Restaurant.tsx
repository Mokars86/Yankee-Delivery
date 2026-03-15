import { useState } from 'react';
import { ArrowLeft, Heart, Star, Clock, Info, Plus } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

const menuItems = [
  { id: 1, name: 'Whopper Meal', description: 'Flame-grilled beef patty with fries and drink', price: 8.99, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=150&q=80' },
  { id: 2, name: 'Chicken Royale', description: 'Crispy chicken breast with fresh lettuce', price: 6.99, image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=150&q=80' },
];

const Restaurant = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { cart, setCart } = useAppContext();
  const [tab, setTab] = useState<'Menu' | 'Reviews' | 'Info'>('Menu');

  const addToCart = (item: any) => {
    setCart([...cart, item]);
  };

  return (
    <div className="bg-[var(--bg-color)] min-h-screen pb-24 animate-fade-in w-full max-w-[600px] mx-auto relative">
      <div className="relative h-64 w-full">
        <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80" alt="Restaurant" className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center bg-gradient-to-b from-black/50 to-transparent">
          <button 
            onClick={() => navigate(-1)} 
            className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white"
          >
            <ArrowLeft size={20} />
          </button>
          <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
            <Heart size={20} />
          </button>
        </div>
      </div>

      <div className="bg-white -mt-6 rounded-t-3xl relative p-6 shadow-sm" style={{ backgroundColor: 'var(--surface-color)' }}>
        <h1 className="text-2xl font-bold mb-2">Burger King</h1>
        <div className="flex gap-4 mb-4 text-sm font-medium">
          <div className="flex items-center gap-1 text-muted">
            <Star size={16} fill="var(--warning)" color="var(--warning)" />
            <span className="text-black font-bold text-base">4.8</span> (1.2k reviews)
          </div>
          <div className="flex items-center gap-1 text-muted">
            <Clock size={16} />
            20-30 min
          </div>
        </div>
        
        <p className="text-muted text-sm mb-6">American, Fast Food • $</p>

        <div className="flex gap-6 border-b border-gray-100 mb-6">
          {['Menu', 'Reviews', 'Info'].map((t) => (
            <div 
              key={t}
              onClick={() => setTab(t as any)}
              className={`pb-2 text-sm font-bold cursor-pointer transition-colors ${tab === t ? 'text-primary border-b-2 border-primary' : 'text-muted'}`}
            >
              {t}
            </div>
          ))}
        </div>

        {tab === 'Menu' && (
          <div className="flex flex-col gap-6">
            {menuItems.map(item => (
              <div key={item.id} className="flex gap-4 items-center">
                <img src={item.image} alt={item.name} className="w-24 h-24 rounded-xl object-cover shadow-sm" />
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="font-bold text-lg">{item.name}</h3>
                  <p className="text-muted text-xs mb-2 line-clamp-2">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">${item.price}</span>
                    <button 
                      onClick={() => addToCart(item)}
                      className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shadow-md active:scale-95 transition-transform"
                    >
                      <Plus size={16} strokeWidth={3} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 'Reviews' && <div className="text-center text-muted py-8">No reviews yet.</div>}
        {tab === 'Info' && <div className="text-center text-muted py-8">Restaurant information goes here.</div>}
      </div>

      {cart.length > 0 && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-[568px] z-50 animate-fade-in">
          <button 
            onClick={() => navigate('/customer/cart')}
            className="w-full bg-primary text-white py-4 px-6 rounded-2xl font-bold flex justify-between items-center shadow-lg"
          >
            <div className="bg-white/20 px-3 py-1 rounded-lg">{cart.length} items</div>
            <span>View Cart</span>
            <span>${cart.reduce((acc, i) => acc + i.price, 0).toFixed(2)}</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Restaurant;
