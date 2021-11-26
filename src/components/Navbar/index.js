import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import './navStyle.css';

function Navbar () {

    const [open, setOpen] = useState(false);

    return (
        <div className='NavigationContainer'>
            <Link to="/">
                <div className="logo">Let's Jam</div>
            </Link>
            <ul className={open ? "nav-active" : "nav-links"}>
                <Link to="/about"><li>About</li></Link>
                <Link to="/register"><li>Register</li></Link>
                <Link to="/login"><li>Login</li></Link>
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