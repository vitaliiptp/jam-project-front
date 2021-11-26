import { Link } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import { MainContext } from '../../App';
//import Button from 'react-bootstrap/Button';
import './navStyle.css';
import logo from '../../small_logo.png';

function Navbar({ setLoginModal, setRegisterModal, logout }) {
  const { userName } = useContext(MainContext);
  const [open, setOpen] = useState(false);

  return (
    <div className='NavigationContainer'>
      <Link to='/' className='d-flex align-items-center'>
        <img src={logo} />
        <div className='logo px-3'>Jam Connect</div>
      </Link>
      <ul className={open ? 'nav-active' : 'nav-links'}>
        <Link to='/about'>
          <li>About</li>
        </Link>
        {userName && (
          <Link to='/profile'>
            <li>Profile</li>
          </Link>
        )}
        {userName && (
          <Link to='/search'>
            <li>Search</li>
          </Link>
        )}
        {!userName && <li onClick={() => setLoginModal(true)}>Log in</li>}
        {!userName && (
          <li href='' onClick={() => setRegisterModal(true)}>
            Sign up
          </li>
        )}

        {userName && (
          <div className='rounded-circle border border-light p-2 px-3 mx-4 text-center'>
            <p className='p-0 m-0' style={{ color: '#ff66c4' }}>
              Hi {userName}
            </p>
          </div>
        )}
        {userName && <li onClick={logout}>Log out</li>}
      </ul>
      <div className='burger' onClick={() => setOpen(!open)}>
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </div>
    </div>
  );
}

export default Navbar;
