import React, { useEffect, useRef, useState} from "react";
import { FaChartBar} from "react-icons/fa";
import { SiGooglechrome} from "react-icons/si";
import './Hero.css'

function Hero() {
    const [visible, setVisible] = useState(false);
    const heroRef = useRef(null);

    useEffect (() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2}
        );
        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        return () => observer.disconnect();
    });

    return (
        <section ref={heroRef} className="hero">
            {/* Static Heading */}
            <h1 className="hero-title">Course Project at UMSL</h1>

            {/* Animated Content */}
            <div className={`hero-content ${visible ? 'visible' : ''}`}>
                <p className={"hero-subtitle"}>
                    Process Feedback is a learning-first alternative to plagiarism or AI detection. It enables teachers and students to see
                    the writing process or AI use, and to discuss how the learning process can be improved.
                </p>

                {/* Buttons */}
                <div className="hero-buttons">
                    <button className="btn-primary">
                        <FaChartBar className = "btn-icon"/>
                        View Sample Student Report</button>
                    <button className="btn-primary">
                        <SiGooglechrome className = "btn-icon"/>
                        Try it in Google Docs</button>
                </div>

                {/* Stars */}
                <div className="hero-stars">
                    <span>⭐⭐⭐⭐⭐</span>
                    <p>Loved by students and teachers!</p>
                </div>

                {/* Bullet Points */}
                <div className="hero-bullets">
                    <div className="bullet-column">
                        <p><span className="arrow">→</span> See copy-paste events, editing time, etc.</p>
                        <p><span className="arrow">→</span> Encourage students to think and reflect</p>
                        <p><span className="arrow">→</span> Identify why students struggle to write</p>
                    </div>
                    <div className="bullet-column">
                        <p><span className="arrow">→</span> Prevent plagiarism through transparency</p>
                        <p><span className="arrow">→</span> Promote academic integrity meaningfully</p>
                        <p><span className="arrow">→</span> Explore how students use AI</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;