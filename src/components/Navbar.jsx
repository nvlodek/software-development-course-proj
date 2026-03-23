import React, { useState } from 'react';
import './Navbar.css'
import logo from '../assets/images/UMSL Project logo design.png'



const navLinks = [
    { label: 'Home', href:'/'},
    { label: 'Student Tools', dropdown: [
            { label: 'Start Writing', href: '/404', newTab: true},
            { label: 'Start Coding', href: '/404', newTab: true},
            { label: 'Extension for Google Docs', href: '/404', newTab: false},
            { label: 'Process Feedback Extension', href: '/404', newTab: false},
            { label: 'Student Guides', href: '/404', newTab: false},
        ],
    },
    { label: 'Teacher Tools', dropdown: [
            { label: 'Create an Editor', href: '/404', newTab: false},
            { label: 'Create an Assignment', href: '/404', newTab: false},
            { label: 'Extension for Google Docs', href: '/404', newTab: false},
            { label: 'Extension for LMS', href: '/404', newTab: false},
            { label: 'Upcoming Webinar', href: '/404', newTab: true},
            { label: 'Teacher Guides', href: '/404', newTab: false},
        ],
    },
    { label: 'Institutions', dropdown: [
            {label: 'Canvas Users', href: '#'},
            {label: 'D2L Users', href: '#'},
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
            <a href="/" className="navbar-logo">
                <img src={logo} alt="course project logo" className="navbar-logo-img" />
                <div className="navbar-logo-subtitle">
                    Every Student's Work Has a Story
                </div>
            </a>

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
                        {link.dropdown && activeDropdown === link.label && (
                            <ul className='dropdown'>
                                {link.dropdown.map((item) => (
                                    <li key={item.label}>
                                        <a  href = {item.href}
                                        target = {item.newTab ? '_blank' : '_self'}
                                        rel = {item.newTab ? 'noreferrer' : undefined}>
                                            {item.label}
                                    </a>
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