import React from 'react';
import { Link,useNavigate } from 'react-router-dom';

function Sigin({handleLogin}) {
  let history=useNavigate();
  const handleSubmit=()=>
  {
    history('/home');
    handleLogin();
  }


  return (
    <div className='signin_area'>
      <h1 className='box_title'>Sign in</h1>
      <label className='inp_lable'>Email</label>
      <input type='email' placeholder='Enter your email' className='inp' />
      <label className='inp_lable'>Password</label>
      <input type='password' placeholder='Enter password' className='inp' />
      <button className='button_ s_btn' onClick={handleSubmit}>Sign in</button>
      <p className='not_member'>
        {' '}
        not a member yet?{' '}
        <Link to='/signup'>
          <span className='no_mem'>Create account</span>
        </Link>
      </p>
    </div>
  );
}

export default Sigin;
