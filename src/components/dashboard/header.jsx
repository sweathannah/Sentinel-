import { useEffect, useState } from "react";
import { dashboardRequests } from "../../../Services";

function Header({ toggleSidebar }) { // Receive toggleSidebar as a prop
  const [userDetails, setUserDetails] = useState('');

  useEffect(() => {
    fetchUserCredential();
  }, []);

  const fetchUserCredential = async () => {
    try {
      const response = await dashboardRequests.userCredentials();
      console.log(response.data[0]);
      setUserDetails(response.data[0]);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <header
      className={`bg-[#FFFFFF] py-[2rem] font-poppins flex justify-between items-center w-full transition-all duration-300
        px-[1.25rem] lg:px-[1.9rem]`} // Removed ml-0 as it's not directly controlling header margin based on sidebar collapse state
    >
      {/* Hamburger menu for small to medium screens */}
      {/* It should be visible below lg breakpoint */}
      <div className="block lg:hidden cursor-pointer" onClick={toggleSidebar}>
        {/* Replace with your actual hamburger SVG icon */}
        <img src="/images/dashboard_images/ham.svg" alt="menu-icon" className="w-6 h-6" />
        {/* If using @heroicons/react: <Bars3Icon className="w-6 h-6 text-[#000000]" /> */}
      </div>

      {/* "Hello, Hannah" section for large screens and up */}
      {/* It should be visible only from lg breakpoint */}
      <div className="hidden lg:flex flex-col">
        <h1 className="text-[#000000] font-semibold text-[1.5rem]">
          Hello,
          {!userDetails && (
            <span className="mx-2">
              <svg
                aria-hidden="true"
                className="inline w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051..." // Keep your SVG path here
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393..." // Keep your SVG path here
                  fill="currentFill"
                />
              </svg>
            </span>
          )}
          <span className="mx-2">
            {userDetails?.first_name}
          </span>
        </h1>
        <p className="font-normal text-[1rem] text-[#444444]">
          Welcome back to your safety dashboard
        </p>
      </div>

      <div>
        <img src="/images/dashboard_images/profile_pic.svg" alt="Profile Picture" className="w-8 h-8" /> 
      </div>
    </header>
  );
}

export default Header;