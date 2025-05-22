// src/components/dashboard/sidebar.jsx
import { FaTachometerAlt, FaMapMarkedAlt, FaBell, FaUser } from "react-icons/fa";
import { MdReportProblem } from "react-icons/md";

const Sidebar = ({ collapsed, setCollapsed }) => {
  const toggleSidebar = () => setCollapsed(!collapsed);

  const navLinks = [
    { icon: <FaTachometerAlt />, label: "Dashboard", src: "/images/dashboard_images/dashboard.svg" },
    { icon: <MdReportProblem />, label: "Report Incident", src: "/images/dashboard_images/report.svg" },
    { icon: <FaMapMarkedAlt />, label: "Safe Routes", src: "/images/dashboard_images/route.svg" },
    { icon: <FaMapMarkedAlt />, label: "My Reports", src: "/images/dashboard_images/reports.svg" },
    { icon: <FaBell />, label: "Emergency Alerts", src: "/images/dashboard_images/alert.svg" },
    { icon: <FaUser />, label: "Profile", src: "/images/dashboard_images/profile.svg" },
  ];

  return (
    <div
      className={`${
        collapsed ? "w-20" : "w-64"
      } h-screen bg-white shadow-lg px-4 py-6 flex flex-col justify-between font-poppins transition-all duration-300 fixed top-0 left-0 z-50`}
    >
      {/* Top Section */}
      <div>
        <div className="flex flex-row justify-between items-center mb-[2.25rem]">
          {/* Logo */}
          <div className="w-fit h-5">
            {!collapsed && (
              <img
                src="/images/auth_images/logo.png"
                alt="Sentinel Logo"
                className="w-[120px]"
              />
            )}
          </div>
          {/* Toggle Button */}
          <button
            onClick={toggleSidebar}
            className="text-gray-600 text-2xl focus:outline-none w-fit h-5 items-start mr-4"
          >
            <img src="/images/dashboard_images/toggle.svg" alt="Toggle icon" />
          </button>
        </div>
        {/* Navigation */}
        <nav className="flex flex-col gap-2">
          {navLinks.map((link, index) => (
            <a
              href="#"
              key={index}
              className="flex items-center gap-4 text-[#444444] hover:bg-[#2545FF] py-3 pl-2 font-medium text-sm rounded-md hover:text-white transition"
            >
              <img src={link.src} alt={`${link.label} icon`} className="w-5 h-5" />
              {!collapsed && <span>{link.label}</span>}
            </a>
          ))}
        </nav>
      </div>

      {/* Sign Out */}
      <div className="mt- flex flex-col mb-16 gap-2">
        <button className="flex items-center gap-4 text-[#444444] hover:text-red-600 py-3 pl-2 font-medium text-sm rounded-md">
          <img
            src="/images/dashboard_images/settings.svg"
            alt="Settings Icon"
            className="w-5 h-5"
          />
          {!collapsed && <span>Settings</span>}
        </button>
        <button className="flex items-center gap-4 text-[#444444] hover:text-red-600 py-3 pl-2 font-medium text-sm rounded-md">
          <img
            src="/images/dashboard_images/signout.svg"
            alt="Sign Out Icon"
            className="w-5 h-5"
          />
          {!collapsed && <span>Sign Out</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;