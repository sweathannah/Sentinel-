import Sidebar from '../components/dashboard/sidebar';
import Header from '../components/dashboard/header';
import { Outlet } from 'react-router-dom';
import { useState } from "react";

function DashboardLayout() {
  // State to control the visibility of the mobile sidebar
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // State to control the collapse/expand of the *desktop* sidebar
  const [isDesktopSidebarCollapsed, setIsDesktopSidebarCollapsed] = useState(false);

  // Function to toggle the mobile sidebar
  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  // Function to toggle the desktop sidebar
  const toggleDesktopSidebar = () => {
    setIsDesktopSidebarCollapsed(!isDesktopSidebarCollapsed);
  };


  return (
    <div className="flex min-h-screen">
      {/* Sidebar - conditionally rendered/styled based on screen size and state */}
      <Sidebar
        isMobileSidebarOpen={isMobileSidebarOpen}
        setIsMobileSidebarOpen={setIsMobileSidebarOpen} // Pass setter to close from sidebar
        isDesktopSidebarCollapsed={isDesktopSidebarCollapsed}
        toggleDesktopSidebar={toggleDesktopSidebar} // Pass toggler if sidebar has a desktop collapse button
      />

      <div
        className={`flex flex-col flex-1 transition-all duration-300
          ${isDesktopSidebarCollapsed ? 'lg:ml-[0.5rem]' : 'lg:ml-[0.5rem]'} `}
      >
        <Header toggleSidebar={toggleMobileSidebar} />
        <Outlet />
      </div>

      {/* Overlay for when mobile sidebar is open */}
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" 
          onClick={toggleMobileSidebar}
        ></div>
      )}
    </div>
  );
}

export default DashboardLayout;