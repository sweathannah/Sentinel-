import Sidebar from '../components/dashboard/sidebar';
import Header from '../components/dashboard/Header';
import { Outlet } from 'react-router-dom';

function DashboardLayout() {
  return (
    <div className="flex flex-row bg-[#F8F8F8]">
      <Sidebar />
      <div className="w-full">
        <Header/>
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
