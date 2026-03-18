import { Outlet } from 'react-router-dom';
import MerchantBottomNav from '../navigation/MerchantBottomNav';

const MerchantLayout = () => (
  <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100%', width: '100%' }}>
    <main className="page">
      <Outlet />
    </main>
    <MerchantBottomNav />
  </div>
);

export default MerchantLayout;
