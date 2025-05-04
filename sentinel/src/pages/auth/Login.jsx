import './Login.css';
import React, { useState } from 'react'
// import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { authRequests } from '../../../Services';
import OTPInput from 'react-otp-input';

const Login = () => {
  
    const navigate = useNavigate()
    const [ sendOtp, setSendOtp ] = useState(false)
    const [ otp, setOtp ] = useState('')
    const [ otpError, setOtpError ] = useState(false)
    const [ email, setEmail ] = useState('')
    const [ isEmail, setIsEmail ] = useState(false)
    const [ btnDisable, setBtnDisable ] = useState(false)
    const userId = JSON.parse(localStorage.getItem('sb-nggzvtkbaoxtucfcgjfm-auth-token'))
    const urlParams = new URLSearchParams(window.location.search)
    const user_type = urlParams.get('user_type')
  
  
  
    
    const fireOtp = async () => {
      setSendOtp(true)
      console.log(email)
      await authRequests.signupWithEmail(email).then((response) => {
        console.log(response)
        setSendOtp(true)
      }).catch((error) => {
        console.log(error.message)
      });
      
    }
  
  
    const handleCountryPhFormat = (e) => {
      setEmail(e.target.value);
      validateEmail(e.target.value)
    }
  
    const handleOtpChange = (value) => {
      setOtp(value)
      validateOtp(value)
      // setValidateOTP(value.len)
    }
  
    const validateEmail = (email) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setIsEmail(regex.test(email));
      
      if(regex.test(email)) {
        setBtnDisable(true)
      } else {
        setBtnDisable(false)
      }
      return;
    }
  
    const validateOtp = (value) => {
      value.length === 6 && otpRequest(value)
    }
  
    const otpRequest = async (otpCode) => {
      console.log('otp', otp)
      await authRequests.verifyEmailOTP({otpCode, email}).then((response) => {
        console.log(response.data)
        response.data.user && navigate(`/dashboard?user_type=${user_type}&id=${userId.user.id}`)
        
        setSendOtp(true)
        setOtpError(false)
      }).catch((error) => {
        console.log(error.message)
        setOtpError(true)
      });
      
    }
  
    return (
      
    <div className='VerifyPhone pb-3'>
      <div className="card">

        <div className="card-header mb-[1.4rem]">
          <h2 className="card-heading bg-gradient-to-r from-[#4A3391] to-[#001ECA] bg-clip-text text-transparent mb-[0.7rem]">Log in</h2> 
          <h3 className="card-subheading mb-[1.4rem]">Welcome back to Sentinel</h3>
        </div> 
        
        {!sendOtp && <div className="card-body mb-[1.4rem]">
          <h2 className="card-body-heading text-[#444444] mb-[0.7rem]">Email</h2> 
          <div className="ph-no-input-container flex">
            
    
            <input
              type="email"
              id="Email"
              name="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => { handleCountryPhFormat(e) }}
              className="w-full text-[#515151] font-normal text-[0.875rem] p-2 rounded mt-0 mb-2 focus:outline-none focus:shadow-none focus:border-none"
            />

          </div>
        </div>}

        
        {sendOtp && <div className="card-body2 mb-[1.4rem]">
          <h2 className="card-body2-heading bg-gradient-to-r from-[#4A3391] to-[#001ECA] bg-clip-text text-transparent mb-[0.7rem]">Verify Email</h2> 
          <h3 className="card-body2-subheading mb-[1.4rem] rounded p-3">A verification code has been sent to {email}</h3>

          <div className="otp-heading mb-[.7rem]">Enter the Code</div>

          <div className="otp-module-container">
            <OTPInput 
              value={otp}
              onChange={handleOtpChange}
              numInputs={6}
              renderSeparator={<span> </span>}
              renderInput={(props) => <input {...props} />}
              inputStyle={`${otpError ? 'otp-inputs2' : 'otp-inputs'}`}
              shouldAutoFocus={true}
              className={'otp-inner-container'}
            />
            <div className="otp-input-sec-phase flex">
              <button className="otp-resend-btn">Resend code</button>
            </div>
          </div>
        </div>}

        <div className="card-footer ">

          <div className="ctas mb-[1.4rem]">
            

            {!sendOtp && <div className="btn-container mb-[1.4rem]">
              <button className="btn btn-ph-nav bg-[#2545FF] text-[#FFFFFF] border border-solid border-[#2545FF] text-[0.8rem] py-[0.9rem] rounded-lg font-medium" 
              onClick={() => {sendOtp && isEmail ? navigate(`/register?user_type=${user_type}`, {navigate: true}) : fireOtp()}} 
              disabled={!btnDisable ? true : false}>
                Send code
              </button>
            </div>}

          </div>

          
            <div className="acc-conditions">Already a user? <Link to={'/login'}>Log In</Link></div>

        </div>

      </div>
    </div>
    )
}

export default Login