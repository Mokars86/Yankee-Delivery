import { ArrowLeft, MapPin, CreditCard, Banknote, Smartphone, Minus, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import { useState } from 'react';

const Cart = () => {
  const navigate = useNavigate();
  const { cart } = useAppContext();
  const [payment, setPayment] = useState('Mobile Money');

  const handleCheckout = () => {
    // Clear cart or move to tracking
    navigate('/customer/orders'); // we will assume orders map to tracking
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);
  const deliveryFee = total > 0 ? 2.99 : 0;
  
  if (cart.length === 0) {
    return (
      <div className="p-6 flex flex-col items-center justify-center h-full min-h-[80vh]">
        <h2 className="text-2xl font-bold mb-2">Cart is empty</h2>
        <button onClick={() => navigate('/customer/home')} className="btn btn-primary mt-4">Browse Restaurants</button>
      </div>
    );
  }

  return (
    <div className="bg-[var(--bg-color)] min-h-screen pb-32 animate-fade-in w-full max-w-[600px] mx-auto">
      <header className="p-4 bg-white flex items-center gap-4 sticky top-0 z-10 shadow-sm" style={{ backgroundColor: 'var(--surface-color)' }}>
        <button onClick={() => navigate(-1)} className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center">
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-xl font-bold">My Cart</h1>
      </header>

      <div className="p-4 flex flex-col gap-6">
        <section className="bg-white p-4 rounded-2xl shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg">Delivery Address</h2>
            <span className="text-primary text-sm font-bold cursor-pointer">Edit</span>
          </div>
          <div className="flex gap-3">
            <div className="mt-1"><MapPin size={24} className="text-primary" /></div>
            <div>
              <p className="font-bold text-[15px]">Home</p>
              <p className="text-xs text-muted mt-1 leading-relaxed">123 Yankee Delivery Street<br/>Block A, Apartment 14</p>
            </div>
          </div>
        </section>

        <section className="bg-white p-4 rounded-2xl shadow-sm">
           <h2 className="font-bold text-lg mb-4">Order Items</h2>
           <div className="flex flex-col gap-4">
             {cart.map((item, idx) => (
               <div key={idx} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0 border-gray-100">
                 <div className="flex items-center gap-3">
                   <img src={item.image} alt="" className="w-12 h-12 rounded-lg object-cover" />
                   <div>
                     <p className="font-bold text-sm tracking-tight">{item.name}</p>
                     <p className="text-primary font-bold text-sm mt-0.5">${item.price}</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1">
                   <Minus size={16} className="text-muted cursor-pointer" />
                   <span className="text-sm font-bold">1</span>
                   <Plus size={16} className="text-black cursor-pointer" />
                 </div>
               </div>
             ))}
           </div>
        </section>

        <section className="bg-white p-4 rounded-2xl shadow-sm">
          <h2 className="font-bold text-lg mb-4">Payment Method</h2>
          <div className="flex flex-col gap-3">
            {[ 
              { id: 'Mobile Money', icon: Smartphone, label: 'Mobile Money (M-Pesa, MTN)' },
              { id: 'Card', icon: CreditCard, label: 'Credit/Debit Card' },
              { id: 'Cash', icon: Banknote, label: 'Cash on Delivery' },
            ].map(method => (
              <label key={method.id} className="flex items-center justify-between p-3 border border-gray-100 rounded-xl cursor-pointer hover:bg-gray-50 flex-1">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${payment === method.id ? 'bg-orange-100 text-primary' : 'bg-gray-100 text-muted'}`}>
                    <method.icon size={20} />
                  </div>
                  <span className={`font-bold text-sm ${payment === method.id ? 'text-black' : 'text-muted'}`}>{method.label}</span>
                </div>
                <input 
                  type="radio" 
                  name="payment" 
                  checked={payment === method.id} 
                  onChange={() => setPayment(method.id)}
                  className="w-5 h-5 accent-primary" 
                />
              </label>
            ))}
          </div>
        </section>

        <section className="bg-white p-4 rounded-2xl shadow-sm">
          <h2 className="font-bold text-lg mb-4">Order Summary</h2>
          <div className="flex justify-between items-center mb-2 text-sm">
            <span className="text-muted font-medium">Subtotal</span>
            <span className="font-bold">${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center mb-4 text-sm">
            <span className="text-muted font-medium">Delivery Fee</span>
            <span className="font-bold">${deliveryFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center pt-3 border-t border-gray-100">
            <span className="font-bold text-lg">Total</span>
            <span className="font-bold text-primary text-xl">${(total + deliveryFee).toFixed(2)}</span>
          </div>
        </section>
      </div>

      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[600px] bg-white p-4 border-t border-gray-100 z-50 shadow-[var(--shadow-float)]">
        <button onClick={handleCheckout} className="btn btn-primary btn-full shadow-lg text-lg h-14">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
