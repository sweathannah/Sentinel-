function Header() {
    return (
        <header className="lg:px-[2rem] lg:py-[1.3rem] px-[1rem] rounded-[6.25rem] bg-gradient-to-r from-[#4A3391] to-[#001ECA] mb-[2.5rem]">
        <nav className="flex flex-row justify-between items-center text-[#FFFFFF] font-medium text-[1.2rem]">
          <div>
            <img src="/images/waitlist_images/logo.svg" alt="Sentinel Logo" />
          </div>
      
          {/* Desktop Nav */}
          <div className="lg:flex hidden justify-between gap-[15rem]">
            <div>
              <ul className="space-x-[1.75rem] flex flex-row">
                <li>Home</li>
                <li>About Us</li>
                <li>How it Works</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div>
              <a href="#" className="bg-[#FFFFFF] rounded-[6.25rem] text-[#000] px-[2rem] py-[1rem]">
                <button>Join Waitlist</button>
              </a>
            </div>
          </div>
      
          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button id="menu-btn">
              <img src="/images/waitlist_images/menu.svg" alt="Menu Icon" />
            </button>
          </div>
        </nav>
      </header>
      
    );
  }
  
  export default Header;
  