import './processFeed.css'
import React, {useEffect, useRef, useState} from "react";
import photo from "../../assets/images/what-is-pf.svg.svg"


function ProcessFeed() {
    const sectionRef = useRef(null);
    const [highlight, setHighlight] = useState(false);

    const headerRef = useRef(null);
    const firstRef = useRef(null);
    const imgRef = useRef(null);
    const secRef = useRef(null);

    const [visible, setVisible] = useState({
        header: false,
        first: false,
        img: false,
        secRef: false,
    });


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHighlight(true);
                    observer.disconnect(); // ← never triggers again
                }
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const createObserver = (ref, key) => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setVisible(prev => ({...prev, [key]: true}));
                        observer.disconnect();
                    }
                },
                {threshold: 0.3 }
            );

            if (ref.current) observer.observe(ref.current);
        };

        createObserver(headerRef, "header");
        createObserver(firstRef, "first");
        createObserver(imgRef, "img");
        createObserver(secRef, "secRef");


    }, []);


    return (
        <div className="processFeed">
        <div className='processFeed-wrapper'>
            <h1 ref={headerRef} className={`centered_header fade ${visible.header ? "show": ""}`}>
                What is Process Feedback?
            </h1>
            <p
                ref={firstRef}
                className={`firstp fade ${visible.first ? "show": ""}`}
            >
                AI detectors are unreliable and don't help students learn. Process Feedback takes a different <br/>
                approach: <i>instead of guessing, just look at what actually happened.</i> As students write, it captures their
                editing time, revision patterns, copy paste events, and AI usage. The result? A clear picture of how
                the work was created along with evidence that can start honest conversations about learning.
            </p>
            <img
                ref = {imgRef}
                className={`main-img fade ${visible.img ? "show" : ""}`}
                src={photo}
                alt = 'Process Feedback'
            />
            <p
                ref = {secRef}
                className={`secondp fade ${visible.secRef ? "show" : ""}`}>
                Our approach shifts the conversation from <i>Did you cheat?</i> to <i>How did you learn?</i> Students can <br/>
                demonstrate their effort transparently. Teachers can identify who needs help before deadlines, not <br />
                after. And when AI is involved, it reveals exactly when and how. This turns fear into an opportunity <br/>
                to teach responsible use.
            </p>
            <div ref={sectionRef} className="quote-section">
                <div className="quote-mark top">“</div>
                <p className={`quote-text ${highlight ? "highlight-text" : ""}`}>
                    Process Feedback is incredibly helpful in helping hold students
                    accountable to academic integrity. I don't know what I would do without
                    it!
                </p>
                <div className="quote-footer">
                    <span className='align'>★★★★★ 5.0 rating · Jan 2026</span>
                    <span className='align'> Verified Chrome Web Store Review</span>
                </div>
                <div className="quote-mark bottom">”</div>
            </div>
        </div>
        </div>
    );
}

export default ProcessFeed;