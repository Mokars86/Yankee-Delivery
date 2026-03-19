import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Splash from './pages/auth/Splash';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import RiderLayout from './components/layouts/RiderLayout';
import Dashboard from './pages/rider/Dashboard';
import DeliveryRequest from './pages/rider/DeliveryRequest';
import History from './pages/rider/History';
import Profile from './pages/rider/Profile';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Flow */}
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Rider Flow */}
        <Route path="/rider" element={<RiderLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="request" element={<DeliveryRequest />} />
          <Route path="history" element={<History />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
