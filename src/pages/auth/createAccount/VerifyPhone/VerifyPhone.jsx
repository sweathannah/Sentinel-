import React, { useState } from 'react'
import './VerifyPhone.css'
import { useNavigate, Link } from 'react-router-dom';
import OTPInput from 'react-otp-input';
import { authRequests } from '../../../../../Services';

const VerifyPhone = () => {

  const navigate = useNavigate()
  const [ sendOtp, setSendOtp ] = useState(false)
  const [ otp, setOtp ] = useState('')
  const [ phoneNo, setPhoneNo ] = useState('')
  const [ isChecked, setIsChecked ] = useState(false)
  const [ phoneNumber, setPhoneNumber ] = useState(false)
  const [ btnDisable, setBtnDisable ] = useState(false)
  const [ phNumber, setPhNumber ] = useState('')


  const handleRadioChange = () => {
    setIsChecked(!isChecked)
  }

  const handleCountryPhFormat = (e) => {
    
    if(e.target.value.length === 11) {
      console.log(e.target.value)
      setPhoneNumber(true)
      setPhNumber(`+234${e.target.value.substring(1)}`)
    } else if(e.target.length ===14) {
      console.log(e.target.value)
      setPhoneNumber(true)
      setPhNumber(e.target.value)
    } else {
      setPhoneNumber(false)
    }
  }

  const fireOtp = async () => {
    
    await authRequests.signUpWithPhone(phNumber).then((response) => {
      console.log(response)
      setSendOtp(true)
    }).catch((error) => {
      console.log(error.message)
    });
    
  }

  return (
    <div className='VerifyPhone pb-3'>
      <div className="card">

        <div className="card-header mb-[1.4rem]">
          <h2 className="card-heading bg-gradient-to-r from-[#4A3391] to-[#001ECA] bg-clip-text text-transparent mb-[0.7rem]">Create account</h2> 
          <h3 className="card-subheading mb-[1.4rem]">Join your campus safety community today</h3>
        </div> 
        
        {!sendOtp && <div className="card-body mb-[1.4rem]">
          <h2 className="card-body-heading text-[#444444] mb-[0.7rem]">Phone Number</h2> 
          <div className="ph-no-input-container flex">
            
            <button className="ph-country-dropdown-container flex" >
              <img className='ngn' src="/images/auth_images/NGN-logo.png" alt="NGN" />
              <span className='p-3 flex'>
                <img className='drop' src="/images/auth_images/Drop-toggle.png" alt="Drop Icon" />
              </span>
            </button>
    
            <input
              type="text"
              id="Phone"
              name="Phone"
              placeholder="Enter your Phone Number"
              value={phoneNo}
              onChange={(e) => { setPhoneNo(`${e.target.value}`); isChecked && e.target.value.length === 11 || e.target.value.length === 14 ? setBtnDisable(true) : setBtnDisable(false); handleCountryPhFormat(e)}}
              className="w-full text-[#515151] font-normal text-[0.875rem] p-2 rounded mt-0 mb-2 focus:outline-none focus:shadow-none focus:border-none"
            />

          </div>
        </div>}

        
        {sendOtp && <div className="card-body2 mb-[1.4rem]">
          <h2 className="card-body2-heading bg-gradient-to-r from-[#4A3391] to-[#001ECA] bg-clip-text text-transparent mb-[0.7rem]">Verify Phone number</h2> 
          <h3 className="card-body2-subheading mb-[1.4rem] rounded p-3">A verification code has been sent to your phone number</h3>

          <div className="otp-heading mb-[.7rem]">Enter the Code</div>

          <div className="otp-module-container">
            <OTPInput 
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span> </span>}
              renderInput={(props) => <input {...props} />}
              inputStyle={'otp-inputs'}
              shouldAutoFocus={true}
              className={'otp-inner-container'}
            />
            <div className="otp-input-sec-phase flex">
              <button className="otp-resend-btn">Resend SMS</button>
            </div>
          </div>
        </div>}

        <div className="card-footer ">

          <div className="ctas mb-[1.4rem]">
            

            <div className="btn-container mb-[1.4rem]">
              <button className="btn btn-ph-nav bg-[#2545FF] text-[#FFFFFF] border border-solid border-[#2545FF] text-[0.8rem] py-[0.9rem] rounded-lg font-medium" 
              onClick={() => {sendOtp && phoneNumber ? navigate("/register", {navigate: true}) : fireOtp()}} 
              disabled={!btnDisable ? true : false}>
                  {!sendOtp ? `Send code` : 'Next'}
              </button>
            </div>

            {!sendOtp && <div className="policy-agreement-container mb-[1.4rem]">
              <div className="flex items-start">
                <input type="radio" className='radio mt-1' checked={isChecked} onChange={handleRadioChange} />
                <div className="agreement texts ps-3">
                  I have read, understand and agree to <Link to='/'>Terms and Conditions</Link> & <Link to='/'>Privacy Policy</Link> 
                </div>
              </div>
            </div>}

          </div>

          
          <div className="btn-container">
            <button className="btn border border-solid border-[#2545FF] text-[#2545FF] text-[0.8rem] py-[0.9rem] rounded-lg font-medium flex flex-row gap-1 items-center justify-center" 
            onClick={() => {sendOtp ? setSendOtp(false) : navigate("/user-board", {navigate: true})}}>
              <img src="/images/auth_images/arrow_left.svg" alt="Arrow left" className="w-5 h-5" />
                Go back
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default VerifyPhone