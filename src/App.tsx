import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Splash from './pages/auth/Splash';
import Welcome from './pages/auth/Welcome';
import Login from './pages/auth/Login';

// Layouts
import CustomerLayout from './components/layouts/CustomerLayout';
import MerchantLayout from './components/layouts/MerchantLayout';

// Customer Pages
import Home from './pages/customer/Home';
import Search from './pages/customer/Search';
import Orders from './pages/customer/Orders';
import Favorites from './pages/customer/Favorites';
import Profile from './pages/customer/Profile';
import Restaurant from './pages/customer/Restaurant';
import Cart from './pages/customer/Cart';

// Merchant Pages
import Dashboard from './pages/merchant/Dashboard';
import MerchantOrders from './pages/merchant/Orders';
import Products from './pages/merchant/Products';
import Analytics from './pages/merchant/Analytics';
import MerchantProfile from './pages/merchant/Profile';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Flow */}
        <Route path="/" element={<Splash />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/auth/login" element={<Login />} />

        {/* Customer Flow */}
        <Route path="/customer" element={<CustomerLayout />}>
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="orders" element={<Orders />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="profile" element={<Profile />} />
          <Route path="restaurant/:id" element={<Restaurant />} />
          <Route path="cart" element={<Cart />} />
        </Route>

        {/* Merchant Flow */}
        <Route path="/merchant" element={<MerchantLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="orders" element={<MerchantOrders />} />
          <Route path="products" element={<Products />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="profile" element={<MerchantProfile />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
