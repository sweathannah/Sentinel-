// src/components/Sidebar.jsx
import { FaTachometerAlt, FaMapMarkedAlt, FaBell, FaExclamationTriangle, FaUser } from "react-icons/fa";
import { MdReportProblem } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white shadow-lg px-5 py-6 flex flex-col justify-between font-poppins">
        {/* Top Section */}
        <div>
            {/* Logo */}
            <div className="mb-10">
                <img src="/images/auth_images/logo.png" alt="Sentinel Logo" />
            </div>
 
            {/* Menu Links */}
            <nav className="flex flex-col gap-2">
                <a href="#" className="flex items-center gap-3 text-[#444444] hover:bg-[#2545FF] p-[0.5rem] font-medium text-[1rem] rounded-md hover:text-white">
                    <img src="/images/dashboard_images/dashboard.svg" alt="Dashboard Icon" />
                    Dashboard
                </a>
                <a href="#" className="flex items-center gap-3 text-[#444444] hover:bg-[#2545FF] p-[0.5rem] font-medium text-[1rem] rounded-md hover:text-white">
                    <img src="/images/dashboard_images/report.svg" alt="Report Icon" />
                    Report Incident
                </a>
                <a href="#" className="flex items-center gap-3 text-[#444444] hover:bg-[#2545FF] p-[0.5rem] font-medium text-[1rem] rounded-md hover:text-white">
                    <img src="/images/dashboard_images/route.svg" alt="Route Icon" />
                    Safe Routes
                </a>
                <a href="#" className="flex items-center gap-3 text-[#444444] hover:bg-[#2545FF] p-[0.5rem] font-medium text-[1rem] rounded-md hover:text-white">
                    <img src="/images/dashboard_images/reports.svg" alt="Reports Icon" />
                    My Reports
                </a>
                <a href="#" className="flex items-center gap-3 text-[#444444] hover:bg-[#2545FF] p-[0.5rem] font-medium text-[1rem] rounded-md hover:text-white">
                    <img src="/images/dashboard_images/alert.svg" alt="Alert Icon" />
                    Emergency Alerts
                </a>
                <a href="#" className="flex items-center gap-3 text-[#444444] hover:bg-[#2545FF] p-[0.5rem] font-medium text-[1rem] rounded-md hover:text-white">
                    <img src="/images/dashboard_images/profile.svg" alt="Profile Icon" />
                    Profile
                </a>
            </nav>
        </div>

        {/* Sign Out */}
        <div>
            <button className="flex items-center gap-3 text-[#444444] hover:text-red-600 p-[1rem] font-medium text-[1rem] rounded-md">
                <img src="/images/dashboard_images/signout.svg" alt="Sign Out Icon" /> 
                Sign Out
            </button>
        </div>
    </div>
  );
};

export default Sidebar;
