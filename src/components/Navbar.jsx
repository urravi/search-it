import React from 'react';
import Popup from './Popup';

function Navbar() {
    return (
        <nav id="navbar-0" >
            <div className="navbar">
                <h1>SEARCH.<span>it</span> </h1>
                <div className="menu">
                    <ul className="navbar-items">
                        <li className="navbar-link center"><a href="./">What's New</a></li>
                        <li className="navbar-link green"><a href="./">Free Listing</a></li>
                        <li className="navbar-link"><a href="./">Advertise</a></li>
                        <li className="navbar-link"><a href="./">Contact Us</a></li>
                        <li className="navbar-link icon" id="login" onClick={window['popScreen']}><a href="/"> Log In<i className="far fa-user"></i></a></li>
                    </ul>
                </div>
            </div>
            <Popup />
        </nav>
    )
};
export default Navbar;
