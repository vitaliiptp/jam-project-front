import {Link} from 'react-router-dom';
import React, { useState, useContext } from 'react';
import { MainContext } from '../../App';
import Button from 'react-bootstrap/Button';
import './navStyle.css';

function Navbar ({setLoginModal, setRegisterModal, logout}) {
    const { userName } = useContext(MainContext);
    const [open, setOpen] = useState(false);

    return (
        <div className='NavigationContainer'>
            <Link to="/">
                <div className="logo">Let's Jam</div>
            </Link>
            <ul className={open ? "nav-active" : "nav-links"}>
                <Link to="/about"><li>About</li></Link>
                {!userName && (
          <Button
            variant='dark'
            style={{ color: '#b2edef' }}
            onClick={() => setLoginModal(true)}
          >
            Log in
          </Button>
        )}
        {!userName && (
          <Button
            variant='dark'
            style={{ color: '#b2edef' }}
            onClick={() => setRegisterModal(true)}
          >
            Sign up
          </Button>
        )}

        {userName && (
          <div className='rounded-circle border border-light p-2 text-center'>
            <p className='p-0 m-0' style={{ color: '#ff66c4' }}>
              Hi {userName}
            </p>
          </div>
        )}
        {userName && (
          <Button variant='dark' onClick={logout}>
            Not {userName}? Log out
          </Button>
        )}
            </ul>
            <div className="burger" onClick={() => setOpen(!open)}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </div>
    )
}

export default Navbar;