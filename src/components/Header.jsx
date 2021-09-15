import React from 'react';

function Header() {
    return (
        <header id="header-0">
            <div className="search">
                <select name="locations" id="locations">
                    <option value="Delhi">Delhi</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Patna">Patna</option>
                    <option value="Patna">Hyderabad</option>
                </select>
                <input type="search" value="Real Estate" />
                <i className="fas fa-search"></i>
            </div>
            <div className="text">
                <h2>Real Estate</h2>
                <p>Never been so Hassle-free with us.</p>
                <button><a href="./section.html">EXPLORE <i className="fas fa-chevron-right"></i></a></button>
            </div>
        </header>
    )
}

export default Header;
