import React, { useState } from 'react';
import './Navbar.css'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className = "navbar">
            <div className='navbar-logo'>
            <div className="navbar-logo-title">Course Project at UMSL</div>
            <div className="navbar-logo-subtitle">Every Student's Work Has a Story</div>
            </div>
            <ul className={`navbar-links ${menuOpen ? 'open': ''}`}>
              <li><a href="/">Home</a></li>
                <li><a href="/contact">Contact</a> </li>
            </ul>
            <button className='hamburger' onClick={() => {setMenuOpen(!menuOpen)}}>
                ☰
            </button>
        </nav>
    );
}

export default Navbar;