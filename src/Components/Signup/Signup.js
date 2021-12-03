import React from 'react';

import { Link,useNavigate } from 'react-router-dom';
function Signup({ handleLogin }) {
  let history = useNavigate();
  const handleSubmit = () => {
    history('/home');
    handleLogin();
  };
  return (
    <div className='signin_area'>
      <h1 className='box_title'>Sign up</h1>
      <label className='inp_lable'>Username</label>
      <input type='email' placeholder='Enter your name' className='inp' />
      <label className='inp_lable'>Email</label>
      <input type='email' placeholder='Enter your email' className='inp' />
      <label className='inp_lable'>Password</label>
      <input type='password' placeholder='Enter password' className='inp' />

      <button className='button_ s_btn' onClick={handleSubmit}>
        Sign up
      </button>

      <p className='not_member'>
        Already a member yet?{' '}
        <Link to='/signin'>
          <span className='no_mem'>Sign in</span>
        </Link>
      </p>
    </div>
  );
}

export default Signup;
