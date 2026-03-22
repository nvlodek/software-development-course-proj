import React, { useState } from 'react';
import './Navbar.css'


const navLinks = [
    { label: 'Home', href:'/'},
    { label: 'Student Tools', dropdown: [
            { label: 'Start Writing', href: '#'},
            { label: 'Start Coding', href: '#'},
            { label: 'Extension for Google Docs', href: '#'},
            { label: 'Process Feedback Extension', href: '#'},
            {label: 'Student Guides', href: '#'},
        ],
    },
    { label: 'Teacher Tools', dropdown: [
            { label: 'Create an Editor', href: '#'},
            { label: 'Create an Assignment', href: '#'},
            { label: 'Extension for Google Docs', href: '#'},
            { label: 'Extension for LMS', href: '#'},
            { label: 'Upcoming Webinar', href: '#'},
            { label: 'Teacher Guides', href: '#'},
        ],
    },
    { label: 'Institutions', dropdown: [
            {label: 'Canvas Users', href: '#'},
            {label: 'DTL Users', href: '#'},
            {label: 'Moodle Users', href: '#'},
            {label: 'Blackboard Users', href: '#'},
            {label: 'Google Docs Users', href: '#'},
            {label: 'LTI Access', href: '#'},
            {label: 'Institutional Docs', href: '#'},
        ],
    },
    { label: 'About', dropdown: [
            { label: 'About the Project', href: '#'},
            { label: 'Related Research', href: '#'},
            { label: 'Team', href: '#'},
            { label: 'Contact Us', href: '#'},
        ],
    },
];

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    return (
        <nav className = "navbar">
            {/* Logo */}
            <div className='navbar-logo'>
            <div className="navbar-logo-title">[INSERT CUSTOM GROUP LOGO HERE]</div>
            <div className="navbar-logo-subtitle">Every Student's Work Has a Story</div>
            </div>
            {/* Desktop links */}
            <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                {navLinks.map((link) =>
                    <li
                       key={link.label}
                       className={`nav-item ${link.dropdown ? 'has-dropdown': ''}`}
                       onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                       onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <a href={link.href || '#'}>
                            {link.label} {link.dropdown && <span className="arrow">V</span>}
                        </a>
                        {link.dropdown && activeDropdown == link.label && (
                            <ul className='dropdown'>
                                {link.dropdown.map((item) => (
                                    <li key={item.label}>
                                        <a href={item.href}>{item.label}</a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                )}
            </ul>
            {/* Hamburger */}
            <button className='hamburger' onClick={() => {setMenuOpen(!menuOpen)}}>
                ☰
            </button>
        </nav>
    );
}

export default Navbar;