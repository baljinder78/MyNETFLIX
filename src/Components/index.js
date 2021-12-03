import React, { useState } from 'react';
import Navbar from './Navbar/Navbar.jsx';
import Movies from "./Movies/Movies";
import AboutMovie from './Allinfo/Alldetail';
import Welcome from './Welcome/Welcome.js';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Footer from './Footer/Footer.js';
import Signup from './Signup/Signup.js';
import Signin from './Sigin/Sigin.js';

const App = () => {

  const [isLogin,setIslogin]=useState(false);
  const handleLogin=()=>
  {
    // alert("hi")
    
    setIslogin(true);
  }



  return (
    <>
<Router>
  {console.log(isLogin)}
    <Navbar login={isLogin}/>
  <Routes>
    <Route exact path="/" element={<Welcome/>}/>
    <Route exact path="/home" element={<Movies/>}/>
    <Route exact path="/signup" element={<Signup handleLogin={handleLogin} />}/>
    <Route exact path="/signin" element={<Signin handleLogin={handleLogin}/>}/>
    <Route exact path="/allinfo/:id" element={<AboutMovie/>}/>
  </Routes>
  <Footer/>
</Router>
    {/* <h1>hi</h1> */}
      {/* <Navbar /> */}
      {/* <Movies/> */}
      {/* <AboutMovie/> */}
    </>
  );
};

export default App;
