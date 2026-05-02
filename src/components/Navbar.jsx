import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/images/UMSL Project logo design.png';

const navLinks = [
    { label: 'Home', href: '/' },
    {
        label: 'Student Tools',
        dropdown: [
            { label: 'Start Writing', href: '/404', newTab: true },
            { label: 'Start Coding', href: '/404', newTab: true },
            { label: 'For Google Docs', href: '/404' },
            { label: 'For Visual Studio Code', href: '/404' },
            { label: 'For Microsoft Word', href: '/404' },
            { label: 'Process Feedback Extension', href: '/404' },
            { label: 'Student Guides', href: '/404' },
        ],
    },
    {
        label: 'Teacher Tools',
        dropdown: [
            { label: 'Create an Editor', href: '/404' },
            { label: 'Create an Assignment', href: '/404' },
            { label: 'Extension for Google Docs', href: '/404' },
            { label: 'Extension for LMS', href: '/404' },
            { label: 'Upcoming Webinar', href: '/404', newTab: true },
            { label: 'Teacher Guides', href: '/404' },
        ],
    },
    {
        label: 'Institutions',
        dropdown: [
            { label: 'Canvas Users', href: '/404' },
            { label: 'D2L Users', href: '/404' },
            { label: 'Moodle Users', href: '/404' },
            { label: 'Blackboard Users', href: '/404' },
            { label: 'Google Docs Users', href: '/404' },
            { label: 'LTI Access', href: '/404' },
            { label: 'Institutional Docs', href: '/404' },
        ],
    },
    {
        label: 'About',
        dropdown: [
            { label: 'About the Project', href: '#' },
            { label: 'Related Research', href: '#' },
            { label: 'Team', href: '#' },
            { label: 'Contact Us', href: '/contact' },
        ],
    },
];

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleMenu = () => {
        const newState = !menuOpen;
        setMenuOpen(newState);
        document.body.style.overflow = newState ? 'hidden' : '';
    };

    return (
        <nav className="navbar">
            <a href="/" className="navbar-logo">
                <img src={logo} alt="logo" className="navbar-logo-img fade-in" />
                <div className="navbar-logo-subtitle">
                    Every Student's Work Has a Story
                </div>
            </a>

            <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                {navLinks.map((link) => (
                    <li
                        key={link.label}
                        className="nav-item"
                        onMouseEnter={() => !menuOpen && link.dropdown && setActiveDropdown(link.label)}
                        onMouseLeave={() => !menuOpen && setActiveDropdown(null)}
                        onClick={() => {
                            if (menuOpen && link.dropdown) {
                                setOpenMobileDropdown(
                                    openMobileDropdown === link.label ? null : link.label
                                );
                            }
                        }}
                    >
                        <a href={link.href || '#'}>
                            {link.label}
                            {link.dropdown && (
                                <span className={`nav-arrow ${menuOpen && openMobileDropdown === link.label ? 'flipped' : ''}`}></span>
                            )}
                        </a>
                        {link.dropdown && (menuOpen ? openMobileDropdown === link.label : activeDropdown === link.label) && (
                            <ul className="dropdown">
                                {link.dropdown.map((item) => (
                                    <li key={item.label}>
                                        <a href={item.href} target={item.newTab ? '_blank' : '_self'} rel={item.newTab ? 'noreferrer' : undefined}>
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>

            <button className="hamburger" onClick={toggleMenu}>
                {menuOpen ? '✕' : '☰'}
            </button>
        </nav>
    );
}

export default Navbar;