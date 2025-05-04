import React from 'react'
import './UserType.css'
import { useNavigate } from 'react-router-dom'

const UserType = () => {
  
  const navigate = useNavigate()

  return (
    <div className='UserType pb-3'>
      <div className="card">

        <div className="card-header mb-[1.4rem]">
          <h2 className="card-heading bg-gradient-to-r from-[#4A3391] to-[#001ECA] bg-clip-text text-transparent mb-[0.7rem]">Create account</h2> 
          <h3 className="card-subheading mb-[1.4rem]">Join your campus safety community today</h3>
        </div>
        
        <div className="card-body mb-[1.4rem]">
          <h2 className="card-body-heading bg-gradient-to-r from-[#4A3391] to-[#001ECA] bg-clip-text text-transparent mb-[0.7rem]">Before we proceed,</h2> 
          <h3 className="card-body-subheading mb-[1.4rem]">Who are you?</h3>
        </div>

        <div className="card-footer ">

          <div className="ctas mb-[1.4rem]">

            <div className="btn-container">
              <button className="btn bg-[#2545FF] text-[#FFFFFF] border border-solid border-[#2545FF] text-[0.8rem] py-[0.8rem] rounded-lg font-medium " onClick={() => navigate("/verify-email?user_type=student", {navigate: true})}>
                  I am a student
              </button>
            </div>

            <div className="btn-container mb-[1.4rem]">
              <button className="btn border border-solid border-[#2545FF] text-[#2545FF] text-[0.8rem] py-[0.9rem] rounded-lg font-medium mt-[0.8rem]" onClick={() => navigate("/verify-email?user_type=security_personnel", {navigate: true})}>
                  I am a Security personnel
              </button>
            </div>

          </div>

          
          <div className="btn-container">
            <button className="btn border border-solid border-[#2545FF] text-[#2545FF] text-[0.8rem] py-[0.9rem] rounded-lg font-medium flex flex-row gap-1 items-center justify-center" onClick={() => navigate("/", {navigate: true})}>
                <img src="/images/auth_images/arrow_left.svg" alt="Arrow left" className="w-5 h-5" />
                Go back
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default UserType