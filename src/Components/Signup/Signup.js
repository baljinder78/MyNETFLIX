import React, { useRef } from 'react';
import { register } from '../../api/index';
import { Link, useNavigate } from 'react-router-dom';
function Signup({ handleLogin }) {
  const email = useRef({});
  const username = useRef({});
  const password = useRef({});

  let history = useNavigate();
  const handleSubmit = () => {
    if (
      !username.current.value ||
      !email.current.value ||
      !password.current.value
    ) {
      alert('all field are mandatory');
    } else {
      const formdata = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };

      const siginuser = async () => {
        const {data}=await register({formdata});
        if(data==="False")
        {
          alert("something went wrong");
        }
        else{
          localStorage.setItem('token', data);
          history('/home');
          handleLogin();
        }
        
      };

      siginuser()
      
    }
  };
  return (
    <div className='signin_area'>
      <h1 className='box_title'>Sign up</h1>
      <label className='inp_lable'>Username</label>
      <input
        type='email'
        placeholder='Enter your name'
        className='inp'
        ref={username}
      />
      <label className='inp_lable'>Email</label>
      <input
        type='email'
        placeholder='Enter your email'
        className='inp'
        ref={email}
      />
      <label className='inp_lable'>Password</label>
      <input
        type='password'
        placeholder='Enter password'
        className='inp'
        ref={password}
      />

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
