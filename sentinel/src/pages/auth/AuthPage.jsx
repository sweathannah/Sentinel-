import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    GuestReportModal, 
    Header
} from '../../components';
import { authRequests } from "../../../Services/auth/authenticationRequest";

function AuthPage() {
    const [showGuestModal, setShowGuestModal] = useState(false);
    const navigate = useNavigate()
    
    const signInWithGoogleauth = async () => {
        await authRequests.signInWithGoogleOAuth().then((response) => {
            console.log(response)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <section className="min-h-screen flex items-center justify-center bg-[#F8F8F8] px-[1.25rem] font-poppins">
            <div className="flex flex-col items-stretch justify-center md:flex-row bg-white rounded-[1.5rem] shadow-lg p-6 md:p-12 max-w-5xl w-full gap-[1rem]">
                
                {/* Left - Image */}
                <div className="w-[40%] lg:flex hidden justify-center items-center p-4 bg-[#D8D8D8] rounded-[0.5rem] border-[1px] border-solid border-[#D8D8D8]">
                    <img src="/images/auth_images/Character(i).png" alt="Sentinel Character" className="w-[250px] md:w-[300px]" />
                </div>

                {/* Right - Text and Buttons */}
                <div className="w-full md:w-1/2 flex flex-col justify-centermd:pl-8 bg-white border-[1px] border-solid border-[#E7E7E7] rounded-[0.5rem] py-[2rem] lg:px-[2.5rem] px-[1rem]">
                    <h2 className="text-[1.8rem] font-[700] bg-gradient-to-r from-[#4A3391] to-[#001ECA] bg-clip-text text-transparent mb-[0.7rem]">
                        Welcome to Sentinel!
                    </h2>

                    <p className="text-[#444444] font-normal text-[0.9rem] mb-[1.7rem]">
                        Sentinel helps you stay protected with real-time alerts, anonymous incident reporting, and safe-route navigation.
                    </p>

                    <button className="bg-[#2545FF] text-[#FFFFFF] text-[0.8rem] py-[0.8rem] rounded-lg font-medium " onClick={() => navigate("/user-board", {navigate: true})}>
                        Create account
                    </button>
                    <button className="border border-solid border-[#2545FF] text-[#2545FF] text-[0.8rem] py-[0.8rem] rounded-lg font-medium my-[0.8rem]" onClick={() => navigate("/login", {navigate: true})}>
                        Log in to your account
                    </button>

                    <button className="border py-[0.8rem] border-[#AAAAAA] rounded-lg font-medium flex items-center justify-center gap-2 mt-[1.5rem]" onClick={() => signInWithGoogleauth()}>
                        <img src="/images/auth_images/google_icon.svg" alt="Google" className="w-5 h-5" />
                        Continue with Google
                    </button>

                    <button className="border font-medium py-[0.8rem] border-[#AAAAAA] rounded-lg flex items-center justify-center gap-2 my-[0.8rem]">
                        <img src="/images/auth_images/apple_icon.svg" alt="Apple" className="w-5 h-5" />
                        Continue with Apple
                    </button>

                    <div className="text-center text-[#515151] text-[1rem] font-[500]">or</div>
                    <button 
                        onClick={() => navigate("/guest-report", {navigate: true})}
                        className="bg-[#3FABE1] lg:flex flex-row hidden justify-center text-white font-medium text-[0.9rem] py-[0.8rem] mt-[1rem] rounded-lg gap-2">
                        
                        <img src="/images/auth_images/anonymous.svg" alt="Anonymous Icon" />
                        Report as a guest
                    </button>

                    <button onClick={() => setShowGuestModal(true)} className="lg:hidden flex flex-row justify-center bg-[#3FABE1] text-white font-medium text-[0.9rem] py-[0.8rem] mt-[1rem] rounded-lg gap-2">
                        <img src="/images/auth_images/anonymous.svg" alt="Anonymous Icon" />
                        Report as a guest
                    </button>
                </div>

            </div>
            {/* Only shows on mobile */}
            {showGuestModal && (
            <GuestReportModal onClose={() => setShowGuestModal(false)} />
            )}
        </section>
    );
}

export default AuthPage;
