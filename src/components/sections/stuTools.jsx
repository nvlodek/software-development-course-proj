import './stuTools.css';
import React, { useEffect, useRef, useState } from "react";

function StudentTools() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="stuTools" ref={sectionRef}>
            <h2 className={`stuTools-title fade-element ${isVisible ? "show title" : ""}`}>
                Our Tools for Students
            </h2>

            <div className="stuTools-content">
                <p className={`stuTools-description fade-element ${isVisible ? "show paragraph" : ""}`}>
                    Process Feedback works for writing, coding, Google Docs, Canvas, and more.
                    It shows typing time, breaks, and other writing-process data to help students reflect on how they worked.
                </p>

                <div className={`card-container fade-element ${isVisible ? "show cards" : ""}`}>

                    <div className="card">
                        <h3 className="card-title">Online Document Editor</h3>
                        <ul>
                            <li>No account needed</li>
                            <li>No monitoring</li>
                        </ul>
                        <div className="card-btn">Start Writing</div>
                    </div>

                    <div className="card">
                        <h3 className="card-title">Online Compiler</h3>
                        <ul>
                            <li>AI explains errors</li>
                            <li>Supports Python, Java, C++, and more</li>
                        </ul>
                        <div className="card-btn">Start Coding</div>
                    </div>

                    <div className="card">
                        <h3 className="card-title">Google Docs Extension</h3>
                        <ul>
                            <li>Easy to install</li>
                            <li>No need to preinstall</li>
                        </ul>
                        <div className="card-btn">Install</div>
                    </div>

                    <div className="card">
                        <h3 className="card-title">Process Feedback Extension</h3>
                        <ul>
                            <li>Runs locally</li>
                            <li>Student-centered</li>
                        </ul>
                        <div className="card-btn">Install</div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default StudentTools;