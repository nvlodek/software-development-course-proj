import React, { useState, useEffect, useRef } from 'react';
import './Contact.css';

// Replace with your actual Formspree endpoint
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

// Placeholder component for illustrations (replace src with actual images later)
function Illustration({ src, alt, className = '', placeholderClass = '' }) {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);

    if (!src || error) {
        return (
            <div className={`contact-illustration-placeholder ${placeholderClass}`}>
                <span>{alt || 'Illustration'}</span>
            </div>
        );
    }

    return (
        <>
            {!loaded && (
                <div className={`contact-illustration-placeholder ${placeholderClass}`}>
                    <span>Loading...</span>
                </div>
            )}
            <img
                src={src}
                alt={alt}
                className={className}
                onLoad={() => setLoaded(true)}
                onError={() => setError(true)}
                style={loaded ? {} : { display: 'none' }}
                loading="lazy"
            />
        </>
    );
}

// Generate decorative oval elements for the hero background
function HeroOvals() {
    const ovals = [];
    const count = 30;
    for (let i = 0; i <= count; i++) {
        const t = i / count;
        const width = 160 - (130 * t);
        const top = 30 + (75 * t);
        const left = -30 + (65 * t);
        const opacity = t;
        const r = Math.round(231 - (52 * t));
        const g = Math.round(237 - (26 * t));
        const b = Math.round(251 + (3 * t));
        ovals.push(
            <div
                key={i}
                className="contact-hero-oval"
                style={{
                    width: `${width}%`,
                    top: `${top}%`,
                    left: `${left}%`,
                    backgroundColor: `rgb(${r}, ${g}, ${b})`,
                    opacity: opacity
                }}
            />
        );
    }
    return ovals;
}

function FacebookIcon() {
    return (
        <svg viewBox="0 0 320 512">
            <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
        </svg>
    );
}

function TwitterIcon() {
    return (
        <svg viewBox="0 0 512 512">
            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
        </svg>
    );
}

function LinkedInIcon() {
    return (
        <svg viewBox="0 0 448 512">
            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
        </svg>
    );
}

function YoutubeIcon() {
    return (
        <svg viewBox="0 0 576 512">
            <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
        </svg>
    );
}

function SendIcon() {
    return (
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M2.3 11.3l18.6-9.3a1 1 0 0 1 1.4 1.4l-9.3 18.6a1 1 0 0 1-1.9-.2l-1.1-6.1-6.1-1.1a1 1 0 0 1-.2-1.9zm7.9 2.7l1 5.4 6.7-13.4-13.4 6.7 5.4 1a1 1 0 0 1 .3.2z" />
        </svg>
    );
}

function CheckIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
        </svg>
    );
}

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        emailRetype: '',
        subject: '',
        message: '',
        _gotcha: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [copyStatus, setCopyStatus] = useState({ show: false, type: '', message: '' });

    const sectionRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        sectionRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const addSectionRef = (el) => {
        if (el && !sectionRefs.current.includes(el)) {
            sectionRefs.current.push(el);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCopyEmail = async () => {
        const email = 'contact@processfeedback.org';
        try {
            await navigator.clipboard.writeText(email);
            setCopyStatus({
                show: true,
                type: 'success',
                message: 'Email address copied. Open your email, paste the address, and send your message.'
            });
        } catch {
            try {
                const textArea = document.createElement('textarea');
                textArea.value = email;
                textArea.style.position = 'fixed';
                textArea.style.opacity = '0';
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                setCopyStatus({
                    show: true,
                    type: 'success',
                    message: 'Email address copied. Open your email, paste the address, and send your message.'
                });
            } catch {
                setCopyStatus({
                    show: true,
                    type: 'error',
                    message: 'Copy failed. Please manually copy contact@processfeedback.org.'
                });
            }
        }

        setTimeout(() => {
            setCopyStatus({ show: false, type: '', message: '' });
        }, 10000);
    };

    const validateForm = () => {
        if (!formData.name.trim()) {
            setStatus({ type: 'error', message: 'Please enter your name.' });
            return false;
        }
        if (!formData.email.trim()) {
            setStatus({ type: 'error', message: 'Please enter your email address.' });
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setStatus({ type: 'error', message: 'Please enter a valid email address.' });
            return false;
        }
        if (!formData.emailRetype.trim()) {
            setStatus({ type: 'error', message: 'Please retype your email address.' });
            return false;
        }
        if (formData.email !== formData.emailRetype) {
            setStatus({ type: 'error', message: 'Emails do not match!' });
            return false;
        }
        if (!formData.subject.trim()) {
            setStatus({ type: 'error', message: 'Please enter a subject.' });
            return false;
        }
        if (!formData.message.trim()) {
            setStatus({ type: 'error', message: 'Please enter a message.' });
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);
        setStatus({ type: 'info', message: 'Sending your message...' });

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    _gotcha: formData._gotcha
                })
            });

            if (response.ok) {
                setStatus({
                    type: 'success',
                    message: `Thanks! We will contact you at ${formData.email}.`
                });
                setIsSuccess(true);
            } else {
                throw new Error('Submission failed');
            }
        } catch {
            setStatus({
                type: 'error',
                message: 'Sending failed! Please email us directly at contact@processfeedback.org.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-page">
            {/* HERO */}
            <div className="contact-hero">
                <HeroOvals />
                <div className="contact-hero-content">
                    <h1>Contact Us</h1>
                    <p>Reach out to us with your questions or feedback</p>
                </div>
            </div>

            {/* SEND US AN EMAIL */}
            <div className="contact-section email-section contact-animate" ref={addSectionRef}>
                <section>
                    <h2>Send us an email</h2>
                    <div className="contact-section-inner">
                        <div className="email-text">
                            <p>
                                We can be reached at{' '}
                                <a href="mailto:contact@processfeedback.org" target="_blank" rel="noopener noreferrer">
                                    contact@processfeedback.org
                                </a>
                                , which is <strong>our preferred method</strong> of communication.
                                Please email us directly with your email account.
                            </p>
                            <div className="copy-email-wrapper">
                                <button type="button" className="copy-email-btn" onClick={handleCopyEmail}>
                                    Copy Email Address
                                </button>
                                {copyStatus.show && (
                                    <p className={copyStatus.type === 'success' ? 'copy-success-msg' : 'copy-error-msg'}>
                                        {copyStatus.message}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="contact-illustration">
                            <Illustration src={null} alt="Vector illustration of contact us" />
                        </div>
                    </div>
                </section>
            </div>

            {/* SEND US A MESSAGE (FORM) */}
            <div className="contact-section message-section contact-animate" ref={addSectionRef}>
                <section>
                    <h2>Send us a message</h2>
                    <p className="form-description">
                        Use this form below to send us a message. Please double check your email
                        address before submitting the form because that is where we will reply.
                        Also, sometimes our reply to you could land in your spam folder. Please
                        check back with us by emailing us if you don't hear from us.
                    </p>
                    <div className="contact-section-inner">
                        <div className="form-illustration contact-illustration">
                            <Illustration src={null} alt="Vector illustration of mail inbox in phone" placeholderClass="form-illustration-placeholder" />
                        </div>
                        <div className="contact-form-card">
                            <form className="contact-form" onSubmit={handleSubmit} method="post">
                                <div className="form-row">
                                    <label>Your name <span className="required">*</span></label>
                                    <input name="name" required placeholder="John Doe" value={formData.name} onChange={handleChange} readOnly={isSuccess} disabled={isSuccess} />
                                </div>
                                <div className="form-row">
                                    <label>Your email <span className="required">*</span></label>
                                    <input name="email" type="email" required placeholder="you@university.edu" value={formData.email} onChange={handleChange} readOnly={isSuccess} disabled={isSuccess} />
                                </div>
                                <div className="form-row">
                                    <label>Retype email <span className="required">*</span></label>
                                    <input name="emailRetype" type="email" required placeholder="you@university.edu" value={formData.emailRetype} onChange={handleChange} readOnly={isSuccess} disabled={isSuccess} />
                                </div>
                                <div className="form-row">
                                    <label>Subject <span className="required">*</span></label>
                                    <input name="subject" required placeholder="Topic of your message" value={formData.subject} onChange={handleChange} readOnly={isSuccess} disabled={isSuccess} />
                                </div>
                                <div className="form-row message-row">
                                    <label>Message <span className="required">*</span></label>
                                    <textarea name="message" required placeholder="Share us your question or feedback" rows="5" value={formData.message} onChange={handleChange} readOnly={isSuccess} disabled={isSuccess} />
                                </div>

                                {/* Honeypot - spam prevention */}
                                <div className="form-honeypot">
                                    <label htmlFor="_gotcha">Don't fill this out</label>
                                    <input id="_gotcha" name="_gotcha" type="text" value={formData._gotcha} onChange={handleChange} tabIndex="-1" autoComplete="off" />
                                </div>

                                <button type="submit" className="contact-submit-btn" disabled={isSubmitting || isSuccess}>
                                    <span>{isSuccess ? 'Message Sent' : isSubmitting ? 'Sending...' : 'Send Message'}</span>
                                    {isSuccess ? <CheckIcon /> : <SendIcon />}
                                </button>

                                {status.message && (
                                    <div className={`form-status ${status.type}`}>
                                        {status.message}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </section>
            </div>

            {/* SCHEDULE A MEETING */}
            <div className="contact-section meeting-section contact-animate" ref={addSectionRef}>
                <section>
                    <h2>Schedule a meeting with the founder</h2>
                    <div className="contact-section-inner">
                        <div className="email-text">
                            <p>
                                If you'd like to ask a question or share your thoughts with the
                                founder of the project,{' '}
                                <a href="https://www.badriadhikari.com" target="_blank" rel="noopener noreferrer">
                                    Dr. Badri Adhikari
                                </a>
                                , you're welcome to schedule a meeting with him.
                            </p>
                            <div className="copy-email-wrapper">
                                <a href="https://cal.com/badri/30min?user=badri" target="_blank" rel="noopener noreferrer" className="schedule-btn">
                                    Schedule a Meeting
                                </a>
                            </div>
                        </div>
                        <div className="contact-illustration">
                            <Illustration src={null} alt="Icon of calendar" />
                        </div>
                    </div>
                </section>
            </div>

            {/* CAREERS */}
            <div className="contact-section careers-section contact-animate" ref={addSectionRef}>
                <section>
                    <h2>Careers at Process Feedback</h2>
                    <div className="contact-section-inner">
                        <div className="contact-illustration">
                            <Illustration src={null} alt="Icon of planning a tree" />
                        </div>
                        <div>
                            <p>
                                We are always looking for volunteers and students who are passionate
                                about solving meaningful problems.
                            </p>
                            <p style={{ marginTop: '16px' }}>
                                If you're interested in contributing, please email us with the
                                subject line 'Interested to contribute to Process Feedback'. Be
                                sure to include at least one idea for how you think Process Feedback
                                could be improved.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            {/* FOLLOW US */}
            <div className="follow-section" ref={addSectionRef}>
                <section>
                    <div className="follow-card contact-animate" ref={addSectionRef}>
                        <div className="follow-card-inner">
                            <div className="follow-illustration contact-illustration">
                                <Illustration src={null} alt="Vector illustration of follow us" placeholderClass="follow-illustration-placeholder" />
                            </div>
                            <div className="follow-text">
                                <div style={{ padding: '0 16px', textAlign: 'center' }}>
                                    <h2>Don't miss our updates</h2>
                                    <p>
                                        Follow us on social media to stay updated on new features and
                                        improvements happening at Process Feedback.
                                    </p>
                                    <div className="social-links">
                                        <a href="https://www.facebook.com/processfeedback" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-link"><FacebookIcon /></a>
                                        <a href="https://x.com/processfeedback" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-link"><TwitterIcon /></a>
                                        <a href="https://www.linkedin.com/company/process-feedback/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link"><LinkedInIcon /></a>
                                        <a href="https://www.youtube.com/@ProcessFeedback" target="_blank" rel="noopener noreferrer" aria-label="Youtube" className="social-link"><YoutubeIcon /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Contact;