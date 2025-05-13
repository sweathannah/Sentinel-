import { useEffect, useState } from "react";
import { dashboardRequests } from "../../Services";

function DashboardPage() {



  console.log('user logged in')
    return (
      <section className="flex flex-col px-[2rem] gap-[1.5rem] bg-[#F7F7F7]">
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
        <article className="flex flex-row gap-[1rem]">
          {/* ANALYSIS */}
          <div className="flex flex-col w-full">
            <div className="flex flex-row flex-wrap gap-[1.2rem]">
              <div className="p-[1rem] bg-[#FFFFFF] flex flex-col items-start border-[2px] border-solid border-[#DDDDDD] h-fit shadow-sm rounded-lg min-w-[19rem]">
                <img src="/images/dashboard_images/blue_report.svg" alt="Blue report icon" />
                <h4 className="font-[400] text-[#000000] text-[0.8rem] pt-[0.8rem] w-[7rem]">Active Reports this month</h4>
                <p className="text-[#444444] font-[700] text-[1.5rem] pt-[0.3rem]">12</p>
              </div>
              <div className="p-[1rem] bg-[#FFFFFF] flex flex-col items-start border-[2px] border-solid border-[#DDDDDD] h-fit shadow-sm rounded-lg min-w-[19rem]">
                <img src="/images/dashboard_images/badge.svg" alt="Blu badge" />
                <h4 className="font-[400] text-[#000000] text-[0.8rem] pt-[0.8rem] w-[7rem]">Resolved cases this month</h4>
                <p className="text-[#444444] font-[700] text-[1.5rem] pt-[0.3rem]">48</p>
              </div>
              <div className="p-[1rem] bg-[#FFFFFF] flex flex-col items-start border-[2px] border-solid border-[#DDDDDD]  shadow-sm h-fit rounded-lg min-w-[19rem]">
                <img src="/images/dashboard_images/send_icon.svg" alt="" />
                <h4 className="font-[400] text-[#000000] text-[0.8rem] pt-[0.8rem] w-[9rem]">Safe routes created this month</h4>
                <p className="text-[#444444] font-[700] text-[1.5rem] pt-[0.3rem]">126</p>
              </div>
              <div className="p-[1rem] bg-[#FFFFFF] flex flex-col items-start border-[2px] border-solid border-[#DDDDDD] shadow-sm rounded-lg h-fit min-w-[19rem]">
              <img src="/images/dashboard_images/blue_alert.svg" alt="Blue alert icon" />
              <h4 className="font-[400] text-[#000000] text-[0.8rem] pt-[0.8rem] w-[9rem]">Emergency alerts this month</h4>
              <p className="text-[#444444] font-[700] text-[1.5rem] pt-[0.3rem]">4</p>
            </div>
            </div>
            <div className="pt-[1.4rem]">
              <div className="flex flex-row justify-between mb-[1rem]">
                <h3 className="font-[500] text-[#000000] text-[1.125rem]">Recent reports</h3>
                <a href="#" className="font-[400] text-[#2545FF] text-[1.125rem] underline mr-10">See all</a>
              </div>
              <div className="flex flex-row gap-[1.1rem]">
                <div className="p-[1rem] py-[0.1rem] bg-[#FFFFFF] flex flex-col items-start border-[2px] border-solid border-[#DDDDDD] h-fit shadow-sm rounded-lg min-w-[19rem]">
                  <h4 className="font-[400] text-[#000000] text-[0.8rem] pt-[0.8rem] w-[13rem]">
                    Lost backpack at Science Library
                  </h4>
                  <p className="font-[400] text-[0.7rem] text-[#1E1E1E] mt-[0.6rem]">Theft - 5 mins ago</p>
                  <span className="bg-[#ECFDF3] rounded-full px-[0.75rem] py-[0.25rem] text-[#444444] text-[0.75rem] mt-[1rem]">Security Notified</span>
                </div>
                <div className="p-[1rem] py-[0.1rem] bg-[#FFFFFF] flex flex-col items-start border-[2px] border-solid border-[#DDDDDD] h-fit shadow-sm rounded-lg min-w-[19rem]">
                  <h4 className="font-[400] text-[#000000] text-[0.8rem] pt-[0.8rem] w-[13rem]">
                    Suspicious vehicle parked behind Cafeteria
                  </h4>
                  <p className="font-[400] text-[0.7rem] text-[#1E1E1E] mt-[0.6rem]">Theft - 5 mins ago</p>
                  <span className="bg-[#ECFDF3] rounded-full px-[0.75rem] py-[0.25rem] text-[#444444] text-[0.75rem] mt-[1rem]">Security Notified</span>
                </div>
              </div>
            </div>
          </div>
          {/* LIVE ALERTS */}
          <div className="bg-[#FFFFFF] rounded-[0.5rem] py-[1.34rem] px-[1.5rem] shadow-sm flex flex-col w-[80%] gap-[0.75rem]">
            <div className="flex flex-row justify-between mb-[0.75rem]">
              <h3 className="text-[#000000] font-[600] text-[1.125rem]">Live campus alerts</h3>
              <p className="font-[500] text-[#515151] text-[1rem]">View all</p>
            </div>
            <div className="bg-[#ECFDF3] border-[1px] border-[#ECFDF3] border-solid p-[1rem] rounded-lg flex flex-col gap-[0.7rem]">
              <div className="gap-[1rem] flex flex-row items-center">
                <img src="/images/dashboard_images/exclam.svg" alt="Blue exclamation mark" />
                <h5 className="font-[500] text-[#1E1E1E] text-[0.875rem] ">Avoid North Gate - Ongoing protest reported</h5>
              </div>
              <div className="px-[2.8rem] flex flex-row gap-[9rem]">
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
              <div className="px-[2.8rem] flex flex-row gap-[9rem]">
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
                  Lights out around Block C walkway. Use alternative route
                </h5>
              </div>
              <div className="px-[2.8rem] flex flex-row gap-[9rem]">
                <p className="font-[500] text-[#515151] text-[0.75rem]">10 mins ago</p>
                <span className="bg-[#027A4833] rounded-full px-[0.75rem] py-[0.25rem] text-[#027A48] font-[400] text-[0.7rem]">
                  Low
                </span>
              </div>
            </div>
            <div className="bg-[#ECFDF3] border-[1px] border-[#ECFDF3] border-solid p-[1rem] rounded-lg flex flex-col gap-[0.7rem]">
              <div className="gap-[1rem] flex flex-row items-center">
                <img src="/images/dashboard_images/exclam.svg" alt="Blue exclamation mark" />
                <h5 className="font-[500] text-[#1E1E1E] text-[0.875rem] ">
                  Lights out around Block C walkway. Use alternative route
                </h5>
              </div>
              <div className="px-[2.8rem] flex flex-row gap-[9rem]">
                <p className="font-[500] text-[#515151] text-[0.75rem]">10 mins ago</p>
                <span className="bg-[#027A4833] rounded-full px-[0.75rem] py-[0.25rem] text-[#027A48] font-[400] text-[0.7rem]">
                  Low
                </span>
              </div>
            </div>
          </div>
        </article>
      </section>
    );
  }
  
  export default DashboardPage;
  