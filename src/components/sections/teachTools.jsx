import './teachTools.css'
import React, { useEffect, useRef, useState } from "react";

function TeachTools() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {threshold: 0.2}
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="teachTools" ref={sectionRef}>
            <h2 className={`teachTools-title fade-element ${isVisible ? "show title" : ""}`}>Our Tools for Teachers</h2>
            <div className = "teachTools-content">
                <p className={`teachTools-description fade-element ${isVisible ? "show paragraph" : ""}`} >
                    Ask students to submit their writing process reports, or instead, have them complete an additional self-<br/>
                    reflection assignment. For large classes, our <a href='/404' className="teachTools-link">teacher dashboard</a> provides a summary of all your <br/>
                    student's writing processes in one place.
                </p>
                <div className={`card-container fade-element ${isVisible ? "show cards" : ""}`}>
                    <div className="card">
                        <h3 className="card-title">Editor for Your Students</h3>
                        <ul className="list-group">
                            <li>Takes two minutes</li>
                            <li>Use it for entire team</li>
                        </ul>
                    <div className="card-btn">About Editors<span>↗</span></div>
                    </div>
                    <div className="card">
                        <h3 className="card-title">About Assignments</h3>
                        <ul className="list-group">
                            <li>Teacher dashboard</li>
                            <li>Automatic process feedback</li>
                        </ul>
                        <div className="card-btn">About Assignments <span>↗</span></div>
                    </div>
                    <div className="card">
                        <h3 className="card-title">Google Docs Extension</h3>
                        <ul className="list-group">
                            <li>Easy to install</li>
                            <li>No need to preinstall</li>
                        </ul>
                        <div className="card-btn">About Extension <span>↗</span></div>
                    </div>
                    <div className="card">
                        <h3 className="card-title">Extension for LMS</h3>
                        <ul className="list-group">
                            <li>Works in discussion boards</li>
                            <li>Canvas, D2L, etc.</li>
                        </ul>
                        <div className="card-btn">About Extension <span>↗</span></div>
                    </div>

                </div>

                <p className="addInfo">
                    <strong>Not sure where to start?</strong> Learn how to try Process Feedback in a class by reading our <a href='/404' className="teachTools-bold-link">Teacher Guides.</a>
                </p>
            </div>
        </div>
    );
}

export default TeachTools;