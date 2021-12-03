import React,{useEffect, useState} from 'react';
import { logo } from '../../Images';

import './Navbar.css';
const Navbar=({login})=>
{
  const [navbarlinks, setnavbarlinks] = useState(false);
  // const [isLogedin, setLogin] = useState(login);  
  useEffect(() => {
    
  // let login=localStorage.getItem("login")
  // if(login)
  // {
  //   setLogin(true)
  // }
  // else{
  //   setLogin(false)
  // }
  }, [login])
  
  return (
    <>
      <nav className='navbar'>
        
      {console.log(login)}
        <img src={logo} className='navbar_logo' alt='logo' />
        {!login ? (
          <button className='button_'>Signin</button>
        ) : (
          <>
            <ul
              className='navbar_links'
              style={{
                transform: navbarlinks ? 'translateX(0px)' : '',
              }}>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Movies</a>
              </li>
              <li>
                <a>TvShows</a>
              </li>
              <li>
                <a>Series</a>
              </li>
              <li>
                <a>contact us</a>
              </li>
            </ul>
            <img
              onClick={() => setnavbarlinks(!navbarlinks)}
              alt='burger'
              className='navbar_bars'
              src='https://img.icons8.com/material-outlined/24/DFDFDF/menu--v3.png'
            />
          </>
        )}
      </nav>
    </>
  );
}

export default Navbar;