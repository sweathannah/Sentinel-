import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
import './Register.css';
import { useForm } from 'react-hook-form';
import { authRequests } from '../../../../../Services';

const Register = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm()
  const userId = JSON.parse(localStorage.getItem('sb-nggzvtkbaoxtucfcgjfm-auth-token'))
  const urlParams = new URLSearchParams(window.location.search)
  const user_type = urlParams.get('user_type')

  const onSubmit = async (data) => {
    console.log({...data, user_type})
    await authRequests.setProfile({...data, user_type}).then((response) => {
      console.log(response)
      navigate(`/dashboard?user_type=${user_type}&id=${userId.user.id}`)
    }).catch((error) => {
      console.log(error.message)
    });
  } 

  return (
    <div className='Register pb-3'>
      <form className="card" onSubmit={handleSubmit(onSubmit)}>

        <div className="card-header mb-[1.4rem]">
          <h2 className="card-heading bg-gradient-to-r from-[#4A3391] to-[#001ECA] bg-clip-text text-transparent mb-[0.7rem]">Create account</h2> 
          <h3 className="card-subheading mb-[1.4rem]">Join your campus safety community today</h3>
        </div>

        {errors.first_name && errors.last_name && errors.password && <div className="error-table mb-[1.4rem]">
          {errors.first_name && <div>{errors.first_name.message}</div>}
          {errors.last_name && <div>{errors.last_name.message}</div>}
          {errors.password && <div>{errors.password.message}</div>}
        </div>}

        <div className="card-body">
          <div className="form-input mb-[1.4rem]">
            <label htmlFor="" className="reg-label">First Name</label>
            <input type="text" {...register('first_name', { required: 'First Name is required'} )} className="reg-inputs form-controls" placeholder='Enter your first name' />
          </div>
          
          <div className="form-input mb-[1.4rem]">
            <label htmlFor="" className="reg-label">Last Name</label>
            <input type="text" {...register('last_name', { required: 'Last Name is required'} )} className="reg-inputs form-controls" placeholder='Enter your last name' />
          </div>
          
          <div className="form-input mb-[1.4rem]">
            <label htmlFor="" className="reg-label">Password</label>
            <input type="password" {...register('password', { required: 'Password is required'} )} className="reg-inputs form-controls" placeholder='Min of 8 digits' />
          </div>
          
          {/* <div className="form-input mb-[1.4rem]">
            <label htmlFor="" className="reg-label">Confirm Password</label>
            <input type="password" {...register('confirm_password', { required: 'This is required'} )} className="reg-inputs form-controls" placeholder='Confirm Password' />
          </div>
          {errors.confirm_password && <span>{errors.confirm_password.message}</span>} */}
        </div>

        <div className="card-footer ">
          
          <div className="btn-container mb-[1.4rem]">
              <button className="btn bg-[#2545FF] text-[#FFFFFF] border border-solid border-[#2545FF] text-[0.8rem] py-[0.8rem] rounded-lg font-medium " onClick={() => navigate("/register#", {navigate: true})}>
                  Sign up
              </button>
          </div>

        </div>

        <div className="acc-conditions">Already a user? <Link to={'/login'}>Log In</Link></div>
      </form>
    </div>
  )
}

export default Register