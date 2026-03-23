import React, { useEffect, useRef, useState} from "react";
import { FaChartBar } from "react-icons/fa";
import { SiGooglechrome } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa"
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
                        View Sample Student Report
                        <FaChartBar className = "btn-icon"/>
                    </button>
                    <button className="btn-primary">
                        Try it in Google Docs
                        <SiGooglechrome className = "btn-icon"/>
                    </button>
                </div>

                {/* Stars */}
                <div className="hero-stars">
                    <span>⭐⭐⭐⭐⭐</span>
                    <p id="p1">Loved by students and teachers!</p>
                </div>

                {/* Bullet Points */}
                <div className="hero-bullets">
                    <div className="bullet-column">
                        <p><FaArrowRight className="arrow"/> See copy-paste events, editing time, etc.</p>
                        <p><FaArrowRight className="arrow"/> Encourage students to think and reflect</p>
                        <p><FaArrowRight className="arrow"/> Identify why students struggle to write</p>
                    </div>
                    <div className="bullet-column">
                        <p><FaArrowRight className="arrow"/> Prevent plagiarism through transparency</p>
                        <p><FaArrowRight className="arrow"/> Promote academic integrity meaningfully</p>
                        <p><FaArrowRight className="arrow"/> Explore how students use AI</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;