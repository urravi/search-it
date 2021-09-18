import React from 'react';
import Popup from './Popup';
import {Link} from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
    const [popupButton, setButton]= useState(false);

    return (
        <nav id="navbar-0" >
            <div className="navbar">
                <Link to='./home'><h1>SEARCH.<span>it</span> </h1></Link>
                <div className="menu">
                    <ul className="navbar-items">
                        <li className="navbar-link center"><a href="./">What's New</a></li>
                        <li className="navbar-link green"><a href="./">Free Listing</a></li>
                        <li className="navbar-link"><a href="./">Advertise</a></li>
                        <li className="navbar-link"><a href="./">Contact Us</a></li>
                        <li className="navbar-link icon" onClick={() => setButton(true)}><Link to="./home"> Log In<i className="far fa-user"></i></Link></li>
                    </ul>
                </div>
            </div>
        <Popup trigger={popupButton} setTrigger={setButton} />
        </nav>
    )
};
export default Navbar;
