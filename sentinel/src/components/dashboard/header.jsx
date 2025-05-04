function Header() {
    return (
        <header className="lg:px-[1.9rem] px-[1.25rem] bg-[#F8F8F8] py-[2.28rem] font-poppins flex flex-row justify-between w-full">
            <div className="flex flex-col">
                <h1 className="text-[#000000] font-semibold text-[1.5rem]">
                    Hello Hannah,
                </h1>
                <p className="font-normal text-[1rem] text-[#444444]">
                    Welcome back to your safety dashboard
                </p>
            </div>
            <div>
                <img src="/images/dashboard_images/proile_pic.svg" alt="Profile Picture" />
            </div>
          
       </header>
      
    );
  }
  
export default Header;
  