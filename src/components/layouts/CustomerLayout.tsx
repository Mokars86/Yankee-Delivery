import { Outlet } from 'react-router-dom';
import CustomerBottomNav from '../navigation/CustomerBottomNav';

const CustomerLayout = () => (
  <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100%', width: '100%' }}>
    <main className="page">
      <Outlet />
    </main>
    <CustomerBottomNav />
  </div>
);

export default CustomerLayout;
