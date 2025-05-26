import { useEffect, useState } from "react";
import { dashboardRequests } from "../../Services";
import EmergencyAlert from "../components/emergency/EmergencyAlert1";
import { EmergencyAlertIcon, ReportIncidentIcon, SafeRoutesIcon } from '../components/icons/SvgIcons';
import Slider from "react-slick";

function DashboardPage() {
  console.log('user logged in');
  const [showAlert, setShowAlert] = useState(false);
  return (
    <section className="flex flex-col lg:px-[2rem] px-[1rem] gap-[1.5rem] bg-[#FFFFFF]">
      {/* Emergency alert cards */}
      <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1.5rem] justify-items-center">
        {/* Emergency alert card */}
        <div onClick={() => setShowAlert(true)} className="bg-[#FFFFFF] w-full max-w-[25.5rem] flex flex-col items-start justify-between p-[1rem] border-[2px] border-solid border-[#DDDDDD] shadow-lg rounded-xl hover:bg-gradient-to-r hover:from-[#F5281C] hover:to-[#A80000] hover:text-[#F7F7F7] text-[#000000] transform hover:scale-[1.03] transition-all duration-300 ease-in-out cursor-pointer hover:shadow-inner">
          <div className="text-[#2545FF]">
            <EmergencyAlertIcon className="mb-[1rem] w-8 h-8" />
          </div>
          <div>
            <h4 className="font-[500] text-[1.13rem]">Emergency alert</h4>
            <p className="font-[400] text-[0.65rem] mt-[0.2rem]">Activate emergency response</p>
          </div>
        </div>
        {/* Report incident card */}
        <div className="bg-[#FFFFFF] w-full max-w-[25.5rem] flex flex-col justify-between items-starts p-[1rem] border-[2px] border-solid border-[#DDDDDD] shadow-lg rounded-lg hover:bg-gradient-to-r hover:from-[#F5281C] hover:to-[#A80000] hover:text-[#F7F7F7] text-[#000000] transform hover:scale-[1.03] transition-all duration-300 ease-in-out cursor-pointer hover:shadow-inner">
          <div className="text-[#2545FF]">
            <ReportIncidentIcon className="mb-[1rem] w-8 h-8" />
          </div>
          <div>
            <h4 className="font-[500] text-[1.13rem]">Report incident</h4>
            <p className="font-[400] text-[0.65rem] mt-[0.2rem]">Submit a new safety report</p>
          </div>
        </div>
        {/* Find safe route card */}
        <div className="bg-[#FFFFFF] w-full max-w-[25.5rem] flex flex-col justify-between items-start p-[1rem] border-[2px] border-solid border-[#DDDDDD] shadow-lg rounded-lg hover:bg-gradient-to-r hover:from-[#F5281C] hover:to-[#A80000] hover:text-[#F7F7F7] text-[#000000] transform hover:scale-[1.03] transition-all duration-300 ease-in-out cursor-pointer hover:shadow-inner">
          <div className="text-[#2545FF]">
            <SafeRoutesIcon className="mb-[1rem] w-8 h-8" />
          </div>
          <div>
            <h4 className="font-[500] text-[1.13rem]">Find safe route</h4>
            <p className="font-[400] text-[0.65rem] mt-[0.2rem]">Get the safest path to your destination</p>
          </div>
        </div>
        {/* Counseling card */}
        <div className="bg-[#FFFFFF] w-full max-w-[25.5rem] flex flex-col justify-between items-start p-[1rem] border-[2px] border-solid border-[#DDDDDD] shadow-lg rounded-xl hover:bg-gradient-to-r hover:from-[#F5281C] hover:to-[#A80000] hover:text-[#F7F7F7] text-[#000000] transform hover:scale-[1.03] transition-all duration-300 ease-in-out cursor-pointer hover:shadow-inner">
          <div className="text-[#2545FF]">
            <EmergencyAlertIcon className="mb-[1rem] w-8 h-8" />
          </div>
          <div>
            <h4 className="font-[500] text-[1.13rem]">Counseling</h4>
            <p className="font-[400] text-[0.65rem] mt-[0.2rem]">Submit a new safety report</p>
          </div>
        </div>

      {/* Show Emergency Alert Modal */}
      {showAlert && <EmergencyAlert onClose={() => setShowAlert(false)} />}
      </article>

      <article className="grid grid-cols-1 lg:grid-cols-3 gap-[1rem]">
        {/* ANALYSIS */}
        <div className="flex flex-col w-full lg:col-span-2 gap-[1.5rem]">
          <h3 className="font-[600] text-[#212121] text-[1rem]">Campus safety overview</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[1rem]">
            <div className="p-[1rem] bg-[#F5F6FF] flex flex-col items-start border-[1px] border-solid border-[#DDDDDD] h-fit shadow-sm rounded-lg w-full">
              <img src="/images/dashboard_images/blue_report.svg" alt="Blue report icon" />
              <h4 className="font-[400] text-[#000000] text-[0.8rem] pt-[0.8rem] w-[7rem]">Active Reports</h4>
              <p className="text-[#444444] font-[700] text-[1.5rem] pt-[0.3rem]">12<span className="text-[0.75rem] font-[400]"> this month</span></p>
            </div>
            <div className="p-[1rem] bg-[#F5F6FF] flex flex-col items-start border-[1px] border-solid border-[#DDDDDD] h-fit shadow-sm rounded-lg w-full">
              <img src="/images/dashboard_images/badge.svg" alt="Blu badge" />
              <h4 className="font-[400] text-[#000000] text-[0.8rem] pt-[0.8rem] w-[7rem]">Resolved cases</h4>
              <p className="text-[#444444] font-[700] text-[1.5rem] pt-[0.3rem]">48<span className="text-[0.75rem] font-[400]"> this month</span></p>
            </div>
            <div className="p-[1rem] bg-[#F5F6FF] flex flex-col items-start border-[1px] border-solid border-[#DDDDDD] h-fit shadow-sm rounded-lg w-full">
              <img src="/images/dashboard_images/send_icon.svg" alt="" />
              <h4 className="font-[400] text-[#000000] text-[0.8rem] pt-[0.8rem] w-[9rem]">Safe routes created</h4>
              <p className="text-[#444444] font-[700] text-[1.5rem] pt-[0.3rem]">126<span className="text-[0.75rem] font-[400]"> this month</span></p>
            </div>
            <div className="p-[1rem] bg-[#F5F6FF] flex flex-col items-start border-[1px] border-solid border-[#DDDDDD] h-fit shadow-sm rounded-lg w-full">
              <img src="/images/dashboard_images/blue_alert.svg" alt="Blue alert icon" />
              <h4 className="font-[400] text-[#000000] text-[0.8rem] pt-[0.8rem] w-[9rem]">Emergency alerts</h4>
              <p className="text-[#444444] font-[700] text-[1.5rem] pt-[0.3rem]">
                4<span className="text-[0.75rem] font-[400]"> this month</span>
              </p>
            </div>
          </div>

          {/* LIVE ALERTS */}
          <div className="bg-[#FFFFFF] rounded-[0.5rem] py-[1.34rem] px-[1.5rem] shadow-sm flex flex-col w-full gap-[0.75rem] lg:col-span-1 border-[1px] border-solid border-[#DDDDDD]">
            <div className="flex flex-row justify-between mb-[0.75rem]">
              <h3 className="text-[#000000] font-[600] text-[1.125rem]">Live campus alerts</h3>
              <p className="font-[500] text-[#2545FF] text-[1rem]">View all</p>
            </div>
            <div className="bg-[#ECFDF3] border-[1px] border-[#ECFDF3] border-solid p-[1rem] rounded-lg flex flex-col gap-[0.7rem]">
              <div className="gap-[1rem] flex flex-row items-center">
                <img src="/images/dashboard_images/exclam.svg" alt="Blue exclamation mark" />
                <h5 className="font-[500] text-[#1E1E1E] text-[0.875rem] ">Avoid North Gate - Ongoing protest reported</h5>
              </div>
              <div className="px-[2.8rem] flex flex-row justify-between"> {/* Adjusted for better spacing */}
                <p className="font-[500] text-[#515151] text-[0.75rem]">2 mins ago</p>
                <span className="bg-[#B4231833] rounded-full px-[0.75rem] py-[0.25rem] text-[#B42318] font-[400] text-[0.7rem]">
                  High
                </span>
              </div>
            </div>
            <div className="bg-[#ECFDF3] border-[1px] border-[#ECFDF3] border-solid p-[1rem] rounded-lg flex flex-col gap-[0.7rem]">
              <div className="gap-[1rem] flex flex-row items-center">
                <img src="/images/dashboard_images/exclam.svg" alt="Blue exclamation mark" />
                <h5 className="font-[500] text-[#1E1E1E] text-[0.875rem] ">
                  Suspicious individual seen near Science Building entrance
                </h5>
              </div>
              <div className="px-[2.8rem] flex flex-row justify-between"> {/* Adjusted for better spacing */}
                <p className="font-[500] text-[#515151] text-[0.75rem]">5 mins ago</p>
                <span className="bg-[#FBBC0533] rounded-full px-[0.75rem] py-[0.25rem] text-[#FFCC00] font-[400] text-[0.7rem]">
                  Medium
                </span>
              </div>
            </div>
            <div className="bg-[#ECFDF3] border-[1px] border-[#ECFDF3] border-solid p-[1rem] rounded-lg flex flex-col gap-[0.7rem]">
              <div className="gap-[1rem] flex flex-row items-center">
                <img src="/images/dashboard_images/exclam.svg" alt="Blue exclamation mark" />
                <h5 className="font-[500] text-[#1E1E1E] text-[0.875rem] ">
                  Fight occurring around Hostel
                </h5>
              </div>
              <div className="px-[2.8rem] flex flex-row justify-between"> {/* Adjusted for better spacing */}
                <p className="font-[500] text-[#515151] text-[0.75rem]">10 mins ago</p>
                <span className="bg-[#027A4833] rounded-full px-[0.75rem] py-[0.25rem] text-[#027A48] font-[400] text-[0.7rem]">
                  Low
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-[1.4rem] border-[1px] border-solid border-[#DDDDDD] rounded-[0.5rem] py-[1.34rem] px-[1.5rem]">
          <div className="flex flex-row justify-between items-center text-center mb-[1rem]">
            <h3 className="font-[600] text-[#212121] text-[1.125rem]">Recent reports</h3>
            <a href="#" className="font-[500] text-[#2545FF] text-[0.8rem]">View all</a>
          </div>
          <div className="grid grid-cols-1 gap-[1.1rem]">
            <div class="p-[1rem] py-[0.4rem] bg-[#F8F8F8] flex flex-col justify-between border-[2px] border-solid border-[#DDDDDD] h-fit shadow-sm rounded-lg w-full">
              <div>
                <h4 class="font-[400] text-[#1E1E1E] text-[0.85rem] pt-[0.8rem]">
                  Lost backpack at Science Library
                </h4>
                <p class="font-[400] text-[0.7rem] text-[#1E1E1E] mt-[0.2rem]">Theft - 5 mins ago</p>
              </div>
              <div class="flex justify-end mt-[1rem]"> 
                <span class="bg-[#ECFDF3] w-fit rounded-full px-[0.75rem] py-[0.25rem] text-[#444444] text-[0.75rem]">Security Notified</span>
              </div>
            </div>
            <div class="p-[1rem] py-[0.4rem] bg-[#F8F8F8] flex flex-col justify-between border-[2px] border-solid border-[#DDDDDD] h-fit shadow-sm rounded-lg w-full">
              <div>
                <h4 class="font-[400] text-[#1E1E1E] text-[0.85rem] pt-[0.8rem]">
                  Suspicious individual seen near Science Building entrance
                </h4>
                <p class="font-[400] text-[0.7rem] text-[#1E1E1E] mt-[0.2rem]">Theft - 15 mins ago</p>
              </div>
              <div class="flex justify-end mt-[1rem]"> 
                <span class="bg-[#ECFDF3] w-fit rounded-full px-[0.75rem] py-[0.25rem] text-[#444444] text-[0.75rem]">Issue Resolved</span>
              </div>
            </div>
            <div class="p-[1rem] py-[0.4rem] bg-[#F8F8F8] flex flex-col justify-between border-[2px] border-solid border-[#DDDDDD] h-fit shadow-sm rounded-lg w-full">
              <div>
                <h4 class="font-[400] text-[#1E1E1E] text-[0.85rem] pt-[0.8rem]">
                  Lost backpack at Science Library
                </h4>
                <p class="font-[400] text-[0.7rem] text-[#1E1E1E] mt-[0.2rem]">Theft - 5 mins ago</p>
              </div>
              <div class="flex justify-end mt-[1rem]"> 
                <span class="bg-[#ECFDF3] w-fit rounded-full px-[0.75rem] py-[0.25rem] text-[#444444] text-[0.75rem]">Security Notified</span>
              </div>
            </div>
            
          </div>
        </div>
      </article>
    </section>
  );
}

export default DashboardPage;