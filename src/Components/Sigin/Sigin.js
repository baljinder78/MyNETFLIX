import React, { useRef } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import {login} from "../../api/index"
function Sigin({handleLogin}) {
   const email = useRef({});
   const password = useRef({});
  let history=useNavigate();
  const handleSubmit=()=>
  {

    if (
      !email.current.value ||
      !password.current.value
    ) {
      alert('all field are mandatory');
    } else {
      const formdata = {
        email: email.current.value,
        password: password.current.value,
      };

      const siginuser = async () => {
        const { data } = await login({ formdata });
        console.log(data)
        if (data === 'False') {
          alert('something went wrong');
        } else {
          localStorage.setItem('token', data);
          history('/home');
          handleLogin();
        }
      };

      siginuser();
    }
  }


  return (
    <div className='signin_area'>
      <h1 className='box_title'>Sign in</h1>
      <label className='inp_lable'>Email</label>
      <input type='email' placeholder='Enter your email' className='inp' ref={email}/>
      <label className='inp_lable'>Password</label>
      <input type='password' placeholder='Enter password' className='inp' ref={password}/>
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
