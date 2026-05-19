import React from 'react';
import { Link } from 'react-router-dom';
import {
  DashboardIcon,
  ReportIncidentIcon,
  SafeRoutesIcon,
  CounsellingIcon,
  MyReportsIcon,
  EmergencyAlertIcon,
  SettingsIcon,
  SignOutIcon
} from '../icons/SvgIcons';

const Sidebar = ({ isMobileSidebarOpen, setIsMobileSidebarOpen, isDesktopSidebarCollapsed, toggleDesktopSidebar }) => {
  // Use isDesktopSidebarCollapsed for desktop state, and isMobileSidebarOpen for mobile off-canvas
  // The toggleSidebar function is now primarily for desktop.
  // Mobile sidebar state is controlled by setIsMobileSidebarOpen passed from DashboardLayout.

  const navLinks = [
    { icon: DashboardIcon, label: "Dashboard", path: "/dashboard" },
    { icon: ReportIncidentIcon, label: "Report Incident", path: "/dashboard/report-incidents" },
    { icon: SafeRoutesIcon, label: "Safe Routes", path: "" },
    { icon: CounsellingIcon, label: "Counselling", path: "" },
    { icon: MyReportsIcon, label: "My Reports", path: "" },
    { icon: EmergencyAlertIcon, label: "Emergency Alerts", path: "" },
  ];

  return (
    <>
      {/* Desktop Sidebar - Visible only on large screens and up */}
      <aside
        className={`
          hidden lg:flex                     /* Hide on mobile, show on desktop */
          h-screen bg-[#FFFFFF] shadow-lg   /* Base styles */
          px-4 py-6 flex-col justify-between font-poppins transition-all duration-300
          sticky top-0 left-0 z-30          /* Sticky for desktop, lower z-index than mobile */
          ${isDesktopSidebarCollapsed ? "w-20" : "w-[15rem]"} /* Desktop collapse/expand logic */
        `}
      >
        {/* Top Section */}
        <div>
          <div className="flex flex-row justify-between items-center mb-8">
            {/* Logo */}
            <div className="w-fit h-5 overflow-hidden">
              {" "}
              {/* Added overflow-hidden to hide logo when collapsed */}
              {!isDesktopSidebarCollapsed && ( // Use isDesktopSidebarCollapsed
                <img
                  src="/images/auth_images/logo.png"
                  alt="Sentinel Logo"
                  className="w-[120px]"
                />
              )}
            </div>
            {/* Toggle Button for Desktop */}
            <button
              onClick={toggleDesktopSidebar} // Use toggleDesktopSidebar from props
              className="text-gray-600 text-2xl focus:outline-none w-fit h-5 items-start mr-4"
            >
              <img
                src="/images/dashboard_images/toggle.svg"
                alt="Toggle icon"
              />
            </button>
          </div>
          {/* Navigation */}
          <nav className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <Link
                to={link.path}
                key={index}
                className="flex items-center gap-4 text-[#444444] hover:bg-[#2545FF] py-3 pl-2 font-medium text-sm rounded-md hover:text-white transition"
              >
                <link.icon className="w-5 h-5" />
                {!isDesktopSidebarCollapsed && <span>{link.label}</span>}{" "}
                {/* Use isDesktopSidebarCollapsed */}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom Section (Settings and Sign Out) */}
        <div className=" flex flex-col gap-2">
          <a // Changed to <a> for consistency with navigation items
            href="#"
            className="flex items-center gap-4 text-[#444444] hover:text-red-600 py-3 pl-2 font-medium text-sm rounded-md"
          >
            <SettingsIcon className="w-5 h-5" />
            {!isDesktopSidebarCollapsed && <span>Settings</span>}
          </a>
          <a // Changed to <a> for consistency with navigation items
            href="#"
            className="flex items-center gap-4 text-[#444444] hover:text-red-600 py-3 pl-2 font-medium text-sm rounded-md"
          >
            <SignOutIcon className="w-5 h-5" />
            {!isDesktopSidebarCollapsed && <span>Sign Out</span>}
          </a>
        </div>
      </aside>

      {/* Mobile Sidebar (Off-canvas) - Visible only on small screens below lg */}
      <div
        className={`
          fixed inset-y-0 left-0              /* Fix position to viewport */
          bg-[#F8F8F8] shadow-lg             /* Background and shadow */
          w-[15rem] z-50                     /* Width and high z-index to be on top */
          flex flex-col justify-between font-poppins transition-transform duration-300 ease-in-out /* Flex layout, animation */
          lg:hidden                          /* Hide on large screens and up */
          ${isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"} /* Slide in/out effect */
        `}
      >
        {/* Top Section */}
        <div className="p-4">
          <div className="flex flex-row justify-between items-center mb-8">
            {/* Logo */}
            <div className="w-fit h-5">
              <img
                src="/images/auth_images/logo.png"
                alt="Sentinel Logo"
                className="w-[120px]"
              />
            </div>
            {/* Close Button for Mobile Sidebar */}
            <button
              onClick={() => setIsMobileSidebarOpen(false)}
              className="text-gray-600 text-2xl focus:outline-none"
            >
              {/* You might want a close icon (X) here */}
              <img
                src="/images/dashboard_images/toggle.svg"
                alt="Close menu"
                className="w-6 h-6"
              />
            </button>
          </div>
          {/* Navigation */}
          <nav className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <a
                href="#"
                key={index}
                onClick={() => setIsMobileSidebarOpen(false)} // Close sidebar when a link is clicked
                className="flex items-center gap-3 text-[#444444] hover:bg-[#2545FF] p-2 font-medium text-sm rounded-md hover:text-white transition"
              >
                <link.icon className="w-5 h-5" />
                <span>{link.label}</span>{" "}
                {/* Always show labels on mobile sidebar */}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Section (Settings and Sign Out) */}
        <div className=" flex flex-col p-4">
          <a
            href="#"
            onClick={() => setIsMobileSidebarOpen(false)}
            className="flex items-center gap-3 text-[#444444] hover:text-red-600 p-2 font-medium text-sm rounded-md"
          >
            <SettingsIcon className="w-5 h-5" />
            <span>Settings</span>
          </a>
          <a
            href="#"
            onClick={() => setIsMobileSidebarOpen(false)}
            className="flex items-center gap-3 text-[#444444] hover:text-red-600 p-2 font-medium text-sm rounded-md"
          >
            <SignOutIcon className="w-5 h-5" />
            <span>Sign Out</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;