import React,{useState} from 'react';
import { AZlogo } from '../../Images';
import './Navbar.css';
const Navbar=()=>
{
  const [navbarlinks,setnavbarlinks]=useState(false);
    return (
      <>
        <nav className='navbar'>
          <img src={AZlogo} className='navbar_logo' alt='logo' />
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
        </nav>
      </>
    );
}

export default Navbar;