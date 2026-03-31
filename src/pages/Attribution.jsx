import React from 'react';
import './Attribution.css';

function Attribution() {
    return (
        <div className="attribution-page">
            <div className="attribution-hero">
                <h1>Content Attribution</h1>
            </div>
            <div className="attribution-content">
                <section>
                    <p>
                        This website is a course project created by students at the University of
                        Missouri–St. Louis (UMSL) for academic purposes only. It is not affiliated
                        with, endorsed by, or representative of Process Feedback, LLC.
                    </p>
                    <p>
                        All text content, images, and illustrations used on this website are from{' '}
                        <a href="https://www.processfeedback.org" target="_blank" rel="noopener noreferrer">
                            www.processfeedback.org
                        </a>
                        {' '}and are used solely for educational purposes as part of a software engineering
                        course project.
                    </p>
                    <p>
                        The original website and all its content are the property of Process Feedback, LLC.
                        No ownership of the original content is claimed or implied by this project.
                    </p>
                    <div className="attribution-links">
                        <h2>Original Website</h2>
                        <p>
                            <a href="https://www.processfeedback.org" target="_blank" rel="noopener noreferrer">
                                www.processfeedback.org
                            </a>
                        </p>
                    </div>
                    <div className="attribution-links">
                        <h2>Project Team</h2>
                        <p>Noah Vlodek, Rishav Karki, Zane Buchanan</p>
                        <p>Software Engineering — University of Missouri–St. Louis</p>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Attribution;