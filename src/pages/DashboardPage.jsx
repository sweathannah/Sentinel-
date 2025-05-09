import { useEffect, useState } from "react";
import { dashboardRequests } from "../../Services";

function DashboardPage() {



  console.log('user logged in')
    return (
      <section className="flex flex-col px-[2rem] gap-[1.5rem]">
        <article className="justify-between flex flex-row flex-wrap">
          <div className="bg-[#FFFFFF] flex flex-col items-start p-[1rem] border-[2px] border-solid border-[#DDDDDD]    shadow-lg rounded-lg min-w-[25rem] hover:bg-gradient-to-r hover:from-[#B42318] hover:to-[#A80000] hover:text-[#F7F7F7] text-[#000000] transform hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer">
            <img src="images/dashboard_images/report.svg" alt="Report icon" className="mb-[1rem]" />
            <h4 className="font-[500] text-[1.13rem]">Report incident</h4>
            <p className="font-[400] text-[0.875rem] mt-[0.2rem]">Submit a new safety report</p>
          </div>
          <div className="bg-[#FFFFFF] flex flex-col items-start p-[1rem] border-[2px] border-solid border-[#DDDDDD]    shadow-lg rounded-lg min-w-[25rem] 
            hover:bg-gradient-to-r hover:from-[#B42318] hover:to-[#A80000] 
            hover:text-[#F7F7F7] text-[#000000] 
            transform hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer">
            
            <img src="images/dashboard_images/route.svg" alt="Route icon" className="mb-[1rem]" />
            <h4 className="font-[500] text-[1.13rem]">Find safe route</h4>
            <p className="font-[400] text-[0.875rem] mt-[0.2rem]">Get the safest path to your destination</p>
          </div>
          <div className="bg-[#FFFFFF] flex flex-col items-start p-[1rem] border-[2px] border-solid border-[#DDDDDD]    shadow-lg rounded-lg min-w-[25rem] 
            hover:bg-gradient-to-r hover:from-[#B42318] hover:to-[#A80000] 
            hover:text-[#F7F7F7] text-[#000000] 
            transform hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer">
            
            <img src="images/dashboard_images/alert.svg" alt="Report icon" className="mb-[1rem]" />
            <h4 className="font-[500] text-[1.13rem]">Emergency alert</h4>
            <p className="font-[400] text-[0.875rem] mt-[0.2rem]">Activate emergency response</p>
          </div>

        </article>
        <article className="flex flex-row flex-wrap gap-[1rem]">
          <div className="flex flex-row flex-wrap gap-[1rem] w-[50%]">
            <div className="p-[1rem] bg-[#FFFFFF] flex flex-col items-start border-[2px] border-solid border-[#DDDDDD]    shadow-sm rounded-lg min-w-[18rem]">
            <img src="/images/dashboard_images/blue_report.svg" alt="Blue report icon" />
            <h4 className="font-[400] text-[#000000] text-[0.8rem] pt-[0.8rem] w-[7rem]">Active Reports this month</h4>
            <p className="text-[#444444] font-[700] text-[1.5rem] pt-[0.3rem]">12</p>
            </div>
            <div className="p-[1rem] bg-[#FFFFFF] flex flex-col items-start border-[2px] border-solid border-[#DDDDDD]    shadow-sm rounded-lg min-w-[18rem]">
              <img src="/images/dashboard_images/badge.svg" alt="Blu badge" />
              <h4 className="font-[400] text-[#000000] text-[0.8rem] pt-[0.8rem] w-[7rem]">Resolved cases this month</h4>
              <p className="text-[#444444] font-[700] text-[1.5rem] pt-[0.3rem]">48</p>
            </div>
            <div className="p-[1rem] bg-[#FFFFFF] flex flex-col items-start border-[2px] border-solid border-[#DDDDDD]  shadow-sm rounded-lg min-w-[18rem]">
              <img src="/images/dashboard_images/send_icon.svg" alt="" />
              <h4 className="font-[400] text-[#000000] text-[0.8rem] pt-[0.8rem] w-[9rem]">Safe routes created this month</h4>
              <p className="text-[#444444] font-[700] text-[1.5rem] pt-[0.3rem]">126</p>
            </div>
            <div className="p-[1rem] bg-[#FFFFFF] flex flex-col items-start border-[2px] border-solid border-[#DDDDDD]  shadow-sm rounded-lg min-w-[18rem]">
              <img src="/images/dashboard_images/blue_alert.svg" alt="Blue alert icon" />
              <h4 className="font-[400] text-[#000000] text-[0.8rem] pt-[0.8rem] w-[9rem]">Emergency alerts this month</h4>
              <p className="text-[#444444] font-[700] text-[1.5rem] pt-[0.3rem]">4</p>
            </div>
          </div>
          <div className="bg-[#FFFFFF] rounded-[0.5rem] py-[1.34rem] px-[1.5rem] shadow-sm">
            <h3>Live campus alerts</h3>
          </div>
        </article>
      </section>
    );
  }
  
  export default DashboardPage;
  