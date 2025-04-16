import Header from '../components/Header';

function Home() {
    return (
        <section className="relative w-full h-fit">
        {/* Background Image for large screens */}
        <div
            style={{ backgroundImage: "url('/images/waitlist_images/robot_bg.png')" }}
            className="bg-cover lg:block hidden absolute inset-0 bg-center bg-no-repeat w-full h-full lg:rounded-[3.75rem] rounded-[1.875rem]"
        ></div>

        {/* Background Image for mobile */}
        <div
            style={{ backgroundImage: "url('/images/waitlist_images/mobile_bg.png')" }}
            className="bg-cover block lg:hidden absolute inset-0 bg-center bg-no-repeat w-full h-full lg:rounded-[3.75rem] rounded-[1.875rem]"
        ></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#4A3391] to-[#001ECA] opacity-50 w-full h-full lg:rounded-[3.75rem] rounded-[1.875rem] lg:block hidden"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full text-white text-start max-w-[38.6rem] lg:px-[3.9rem] px-[1rem] lg:py-[5.5rem] py-[4.8rem]">
            <h1 className="text-[2.7rem] font-[700]">The Future of Campus Security is Here!</h1>
            <p className="font-[400] text-[1rem] text-[#D7D7D7] mt-[1.5rem]">
            Join the waitlist and be the first to experience smart, real-time safety.
            </p>

            <div className="my-[3rem] flex flex-row text-start gap-[0.7rem] items-center">
            <img src="/images/waitlist_images/student.svg" alt="Registered Students" className="w-[10rem]" />
            <p className="font-[500] lg:text-[1rem] text-[0.8rem] w-[10rem]">
                50+ Students Already On Board
            </p>
            </div>

            {/* Form */}
            <div>
            <form action="#" className="flex flex-row gap-[0.9rem] flex-wrap">
                {/* Input Wrapper */}
                <label
                htmlFor="email"
                className="rounded-full py-[0.8rem] lg:py-[1rem] lg:px-[2.38rem] px-[1.5rem] bg-[#FFFFFF1F]"
                >
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your Email"
                    className="bg-transparent lg:w-[12rem] w-[15rem] font-[500] text-[#FFFFFF] text-[0.9rem] 
                    focus:outline-none focus:ring-0 focus:border-none placeholder:text-[#FFFFFFB3]"
                />
                </label>

                {/* Button */}
                <button
                className="bg-[#FFFFFF] rounded-full font-[600] text-[#000000] 
                    lg:text-[0.7rem] text-[0.9rem] py-[0.8rem] lg:py-[1rem] lg:px-[1rem] px-[1.5rem] lg:w-[12rem] w-[18rem]
                    transition-all duration-300 hover:bg-gradient-to-r hover:from-[#483393] hover:to-[#041FC7] hover:text-white"
                >
                Sign up for early access
                </button>
            </form>
            </div>
        </div>
        </section>
    );
}

export default Home;
