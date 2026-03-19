import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLayout from './components/layouts/AdminLayout';

import Splash from './pages/auth/Splash';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

import Dashboard from './pages/admin/Dashboard';
import Users from './pages/admin/Users';
import Merchants from './pages/admin/Merchants';
import Riders from './pages/admin/Riders';
import Orders from './pages/admin/Orders';
import Payments from './pages/admin/Payments';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="merchants" element={<Merchants />} />
          <Route path="riders" element={<Riders />} />
          <Route path="orders" element={<Orders />} />
          <Route path="payments" element={<Payments />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
