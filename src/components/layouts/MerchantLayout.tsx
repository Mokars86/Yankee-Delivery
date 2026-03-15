import { Outlet } from 'react-router-dom';
import MerchantBottomNav from '../navigation/MerchantBottomNav';

const MerchantLayout = () => {
  return (
    <div className="flex flex-col min-h-screen relative bg-[var(--bg-color)]">
      <main className="flex-1 w-full pb-20 overflow-y-auto">
        <Outlet />
      </main>
      <MerchantBottomNav />
    </div>
  );
};
export default MerchantLayout;
