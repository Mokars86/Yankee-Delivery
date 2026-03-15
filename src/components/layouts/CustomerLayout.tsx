import { Outlet } from 'react-router-dom';
import CustomerBottomNav from '../navigation/CustomerBottomNav';

const CustomerLayout = () => {
  return (
    <div className="flex flex-col min-h-screen relative bg-[var(--bg-color)]">
      <main className="flex-1 w-full pb-20 overflow-y-auto">
        <Outlet />
      </main>
      <CustomerBottomNav />
    </div>
  );
};
export default CustomerLayout;
