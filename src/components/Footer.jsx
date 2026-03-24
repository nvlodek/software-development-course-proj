import React from 'react';
import './Footer.css'
import {FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaCopyright} from 'react-icons/fa';
import {GoDotFill} from "react-icons/go";

const footerSections = [
    {
        heading: 'Teacher Tools',
        links: [
            {label: 'Create an Editor', href: '/404'},
            {label: 'Create an Assignment', href: '/404'},
            {label: 'Google Docs Extension', href: '/404'}
        ],
    },
    {
        heading: 'Student Tools',
        links: [
            {label: 'Writing Editor', href: '/404'},
            {label: 'Online Compiler', href: '/404'},
            {label: 'Google Docs Extension', href: '/404'},
            {label: 'Process Feedback Extension', href: '/404'},
        ],
    },
    {
        heading: 'Institutions',
        links: [
            {label: 'Canvas Users', href: '/404'},
            {label: 'D2L Users', href: '/404'},
            {label: 'Moodle Users', href: '/404'},
            {label: 'Blackboard Users', href: '/404'},
            {label: 'Google Docs Users', href: '/404'},
            {label: 'LTI Access', href: '/404'},
        ],
    },
    {
        heading: 'About',
        links: [
            {label: 'About the Project', href: '/404'},
            {label: 'Related Research', href: '/404'},
            {label: 'Blog Articles', href: '/404'},
            {label: 'Teams', href: '/404'},
        ],
    },
    {
        heading: 'Teacher Guides',
        links: [
            { label: 'Samples', href: '/404' },
            { label: 'Upcoming Webinar', href: '/404' },
            { label: 'Guides & Tutorials', href: '/404' },
        ],
    },
    {
        heading: 'Student Guides',
        links: [
            { label: 'Why Use It', href: '/404' },
            { label: 'Online Course', href: '/404' },
            { label: 'Student Guides', href: '/404' },
        ],
    },
    {
        heading: 'General',
        links: [
            { label: 'Pricing', href: '/404' },
            { label: 'Institutional Docs', href: '/404' },
            { label: 'FAQs', href: '/404' },
        ],
    },
    {
        heading: 'Contact Us',
        links: [
            { label: 'Contact Us', href: '/404' },
            { label: 'Schedule a Meeting', href: '/404' },
        ],
    },
];

function Footer() {
    return (
        <footer className="footer">
            {/* Main Grid */}
            <div className = "footer-grid">
                {footerSections.map((sec) => (
                    <div key={sec.heading} className = "footer-column">
                        <h4 className="footer-heading">{sec.heading}</h4>
                        <ul>
                            {sec.links.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href}>{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Bottom Bar */}
            <div className = "footer-bottom">
                <div className= "footer-bottom-left">
                    <span>No copyrights; </span>
                    <a href="https://copyleft.org" target="_blank" rel="noreferrer">Copyleft</a>
                    <span> <FaCopyright className="cpyrght"/> 2025, Process Feedback, LLC <GoDotFill/></span>
                    <a href="/404">Privacy Policy</a>
                    <span><GoDotFill/></span>
                    <a href="/404">Terms of Use</a>
                </div>
                <div className="footer-social">
                    <a href="/404" target="_blank" rel="noreferrer" className="social-icon facebook">
                        <FaFacebook/>
                    </a>
                    <a href="/404" target="_blank" rel="noreferrer" className="social-icon">
                        <FaTwitter/>
                    </a>
                    <a href="/404" target="_blank" rel="noreferrer" className="social-icon">
                        <FaLinkedin/>
                    </a>
                    <a href="/404" target="_blank" rel="noreferrer" className="social-icon">
                        <FaYoutube/>
                    </a>
                </div>
            </div>
            {/* Attribution */}
            <div className="footer-attribution">
                Content from <a href="https://www.processfeedback.org" target="_blank" rel="noreferrer">
                www.processfeedback.org</a>
            </div>
        </footer>
    );
}
export default Footer;