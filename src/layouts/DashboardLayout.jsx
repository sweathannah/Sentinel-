import Sidebar from '../components/dashboard/sidebar';
import Header from '../components/dashboard/header';
import { Outlet } from 'react-router-dom';
import { useState } from "react";

function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      <div
        className={`flex-1 min-h-screen transition-all duration-300 ${
          collapsed ? "ml-[5rem]" : "ml-[5rem]"
        }`}
      >
        <Header collapsed={collapsed} />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
