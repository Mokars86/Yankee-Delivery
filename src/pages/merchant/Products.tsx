import { useState } from 'react';
import { Plus, Edit2, Trash2, Search, Image as ImageIcon } from 'lucide-react';

const initialProducts = [
  { id: 1, name: 'Whopper Meal', category: 'Meals', price: 8.99, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=150&q=80', active: true },
  { id: 2, name: 'Chicken Royale', category: 'Meals', price: 6.99, image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=150&q=80', active: true },
];

const Products = () => {
  const [products] = useState(initialProducts);
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className="bg-[var(--bg-color)] min-h-screen pb-24 animate-fade-in w-full max-w-[600px] mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Menu</h1>
        <button 
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-[var(--primary)] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-transform active:scale-95"
        >
          {showAddForm ? <Trash2 size={20} /> : <Plus size={20} />}
        </button>
      </div>

      {!showAddForm ? (
        <>
          <div className="relative w-full mb-6">
            <Search size={20} className="absolute left-4 top-3.5 text-muted" style={{ color: 'var(--text-muted)' }} />
            <input 
              type="text" 
              placeholder="Search products..." 
              className="w-full bg-white border-none font-medium text-sm shadow-sm"
              style={{ paddingLeft: '3rem', borderRadius: 'var(--radius-xl)' }}
            />
          </div>

          <div className="flex flex-col gap-4">
            {products.map(p => (
              <div key={p.id} className="bg-white rounded-2xl p-3 flex gap-4 shadow-sm items-center" style={{ backgroundColor: 'var(--surface-color)' }}>
                <img src={p.image} alt={p.name} className="w-20 h-20 rounded-xl object-cover" />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold">{p.name}</h3>
                    <div className="flex gap-2 text-muted">
                      <Edit2 size={16} className="cursor-pointer hover:text-[var(--primary)] transition-colors" />
                      <Trash2 size={16} className="cursor-pointer hover:text-red-500 transition-colors" />
                    </div>
                  </div>
                  <p className="text-xs text-muted font-medium mb-1">{p.category}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="font-bold text-[var(--primary)]">${p.price}</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked={p.active} />
                      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[var(--primary)]"></div>
                    </label>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="bg-white rounded-2xl p-4 shadow-sm animate-fade-in" style={{ backgroundColor: 'var(--surface-color)' }}>
          <h2 className="font-bold text-lg mb-4">Add New Item</h2>
          
          <div className="w-full h-32 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-muted mb-4 cursor-pointer hover:bg-gray-100 transition-colors">
            <ImageIcon size={32} className="mb-2" />
            <span className="text-sm font-medium">Upload Image</span>
          </div>

          <div className="flex flex-col gap-3">
            <input type="text" placeholder="Product Name" className="bg-gray-50 border-none m-0 rounded-xl" />
            <div className="flex gap-3">
              <input type="number" placeholder="Price ($)" className="bg-gray-50 border-none m-0 rounded-xl flex-1" />
              <select className="bg-gray-50 border-none m-0 rounded-xl flex-1 text-muted appearance-none">
                <option value="">Category</option>
                <option value="meals">Meals</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            <textarea placeholder="Description" rows={3} className="bg-gray-50 border-none m-0 rounded-xl resize-none"></textarea>
            
            <button 
              onClick={() => setShowAddForm(false)}
              className="btn btn-primary btn-full mt-2"
            >
              Save Product
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
