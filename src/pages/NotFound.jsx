import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
    return (
        <div className="notfound-container">
            <section className="notfound-section">
                {/* Replace src with actual 404 image later */}
                <div className="notfound-illustration">
                    <div className="notfound-illustration-placeholder">
                        <span>404 Error Illustration</span>
                    </div>
                </div>
                <h2 className="notfound-heading">Page Not Found</h2>
                <p className="notfound-text">
                    We can't find the page you were looking for.
                </p>
                <div className="notfound-btn-wrapper">
                    <Link to="/" className="notfound-btn">
                        Return Home
                        <svg className="notfound-arrow" fill="currentColor" viewBox="0 0 448 512" aria-hidden="true">
                            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h306.7L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                        </svg>
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default NotFound;