import './FAQ.css'
import React, { useState, useEffect, useRef } from "react";

function FAQ () {
    const faqRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2}
        );

        if (faqRef.current) {
            observer.observe(faqRef.current);
        };

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref = { faqRef }
            className={`FAQ-landscape ${isVisible ? "show" : ""}`}
        >
        <h2 className='FAQ-header'>Frequently Asked Questions</h2>
        <div className='outer-border'>
        <div className='expandable'>
            <div className="expandable__title-bar"
                onClick={(e) => {
                e.currentTarget.parentElement.classList.toggle("expandable--open");
            }}
            >
                <span className="expandable__title">1. If a student copy-pastes, will the writing process report show it?</span>
                <ion-icon className="expandable__icon" name="chevron-down-outline"></ion-icon>
            </div>
            <div className="expandable__content-wrapper">
                <div className="expandable__content">
                    <p className="faqp">Yes. A writing process report shows all copy-paste events larger than 25 characters (by default).
                        In the report, you can see what was pasted and when it was pasted. A writing process report has a
                    dedicated section called Paste events. Check out our <a className='FAQ_link' href='/404'>sample writing process report.</a>
                    </p>
                </div>
            </div>
        </div>
        <div className='expandable'>
            <div className="expandable__title-bar"
                 onClick={(e) => {
                     e.currentTarget.parentElement.classList.toggle("expandable--open");
                 }}
            >
                <span className="expandable__title"> 2. Does Process Feedback analyze AI usage? </span>
                <ion-icon className="expandable__icon" name="chevron-down-outline"></ion-icon>
            </div>
            <div className="expandable__content-wrapper">
                <div className="expandable__content">
                    <p className="faqp">
                        Process feedback works regardless of whether or not students are allowed to use generative AI tools.
                        While it doesn't automatically detect AI usage, the data it provides can help you see how and when AI
                        might have been used. Please refer to our guide on <a className='FAQ_link' href='/404'>identifying AI-assisted writing patterns.</a>
                    </p>
                </div>
            </div>
        </div>
            <div className='expandable'>
                <div className="expandable__title-bar"
                     onClick={(e) => {
                         e.currentTarget.parentElement.classList.toggle("expandable--open");
                     }}
                >
                    <span className="expandable__title"> 3. Besides English, what languages are supported? </span>
                    <ion-icon className="expandable__icon" name="chevron-down-outline"></ion-icon>
                </div>
                <div className="expandable__content-wrapper">
                    <div className="expandable__content">
                        <p className="faqp">
                            Process Feedback is designed to work automatically with most languages, including languages
                            like French and Spanish. If a language uses special characters as sentence terminators or word separators,
                            you can specify them in the Settings so the writing process report is meaningful.
                        </p>
                    </div>
                </div>
            </div>
            <div className='expandable'>
                <div className="expandable__title-bar"
                     onClick={(e) => {
                         e.currentTarget.parentElement.classList.toggle("expandable--open");
                     }}
                >
                    <span className="expandable__title"> 4. Does Process Feedback work with Microsoft Word?</span>
                    <ion-icon className="expandable__icon" name="chevron-down-outline"></ion-icon>
                </div>
                <div className="expandable__content-wrapper">
                    <div className="expandable__content">
                        <p className="faqp">
                            Not yet. For Process Feedback to work, students need to write in Google
                            Docs or use our online writing/coding editor. We are actively working on
                            developing additional extensions, including one for Microsoft Word.
                        </p>
                    </div>
                </div>
            </div>
            <div className='expandable'>
                <div className="expandable__title-bar"
                     onClick={(e) => {
                         e.currentTarget.parentElement.classList.toggle("expandable--open");
                     }}
                >
                    <span className="expandable__title">5. Reviewing students' process can be time-consuming! Is there a way to make it easier?</span>
                    <ion-icon className="expandable__icon" name="chevron-down-outline"></ion-icon>
                </div>
                <div className="expandable__content-wrapper">
                    <div className="expandable__content">
                        <p className="faqp">
                            It can be, but you have options. You can have students do much of the reviewing themselves
                            by assigning short reflection assignments. If you're looking for examples, check out our <a href='/404' className="FAQ_link">Reflection Prompts</a>
                            to guide their self-review. You can also have students submit their writing process data ZIP files so you can load them all
                            up in the <a href="/404" className="FAQ_link">teacher dashboard</a> and explore them at once.
                        </p>
                    </div>
                </div>
            </div>
            <div className='expandable'>
                <div className="expandable__title-bar"
                     onClick={(e) => {
                         e.currentTarget.parentElement.classList.toggle("expandable--open");
                     }}
                >
                    <span className="expandable__title">6. Will students feel anxious about being tracked?</span>
                    <ion-icon className="expandable__icon" name="chevron-down-outline"></ion-icon>
                </div>
                <div className="expandable__content-wrapper">
                    <div className="expandable__content">
                        <p className="faqp">
                            Whether or not students feel anxious often depends on how you
                            introduce Process Feedback, as well as your teaching context and grade
                            level.
                        </p>
                        <p className="faqp">
                            Ideally, you'll encourage students to review their own work and complete
                            reflection assignments so they stay in control of their learning. It's also
                            important to let them know in advance that you'll be asking them to share
                            their writing process. For more details, please see our <a href='/404' className="FAQ_link">Teacher Guides</a> for
                            an example announcement you can share with your class.
                        </p>
                    </div>
                </div>
            </div>
            <div className='expandable'>
                <div className="expandable__title-bar"
                     onClick={(e) => {
                         e.currentTarget.parentElement.classList.toggle("expandable--open");
                     }}
                >
                    <span className="expandable__title">7. Does Process Feedback detect plagiarism? </span>
                    <ion-icon className="expandable__icon" name="chevron-down-outline"></ion-icon>
                </div>
                <div className="expandable__content-wrapper">
                    <div className="expandable__content">
                        <p className='faqp'>
                            Process Feedback does not directly detect plagiarism. However, it can help
                            teachers investigate suspicious cases by providing detailed information
                            about a student's work. Our main focus is on showing the underlying data
                            rather than interpreting it. We're aware that there are already many tools
                            dedicated to plagiarism detection. We believe, however, that prevention is
                            more important than detection. Detecting plagiarism often leads to
                            punitive measures and difficult conversations.
                        </p>
                        <p className="faqp">
                            By contrast, Process Feedback can discourage plagiarism at the outset,
                            especially if students are asked to <a className="FAQ_link" href='./404'> reflect on their process </a>
                            and see how their work evolves over time. Also, you can refer to our guide on
                            <a className="FAQ_link"> identifying AI-assisted writing patterns.</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className='expandable'>
                <div className="expandable__title-bar"
                     onClick={(e) => {
                         e.currentTarget.parentElement.classList.toggle("expandable--open");
                     }}
                >
                    <span className="expandable__title">8. If I notice a student copy-pasted, how should I grade them?</span>
                    <ion-icon className="expandable__icon" name="chevron-down-outline"></ion-icon>
                </div>
                <div className="expandable__content-wrapper">
                    <div className="expandable__content">
                        <p className="faqp">
                            Copy-pasting text or code itself may or may not be a concern depending
                            on the context and an instructor's requirements. Sometimes a student
                            may copy-paste their own text from elsewhere, so students should not be
                            penalized simply for copy-pasting.
                        </p>
                        <p className="faqp">
                            However, <strong>students can be penalized for not following directions.</strong> If the
                            requirement in your assignment is to use the Process Feedback editor
                            throughout their writing or coding process and not copy-paste at all, you
                            have the rubric in place to grade accordingly.
                        </p>
                    </div>
                </div>
            </div>
            <div className='expandable'>
                <div className="expandable__title-bar"
                     onClick={(e) => {
                         e.currentTarget.parentElement.classList.toggle("expandable--open");
                     }}
                >
                    <span className="expandable__title">9. Does Process Feedback work with LMS platforms like Canvas or Blackboard?</span>
                    <ion-icon className="expandable__icon" name="chevron-down-outline"></ion-icon>
                </div>
                <div className="expandable__content-wrapper">
                    <div className="expandable__content">
                        <p className="faqp">
                            Yes. We have developed an extension specifically for LMSs.
                        </p>
                        <p className="faqp">
                            Regardless of which LMS you use, students can always write in Google
                            Docs or in Process Feedback's Writing Editor, download their writing
                            process report as a PDF, and upload it to your LMS. A process report
                            includes the student's final text along with charts and summaries that
                            show their writing process. Students can also share a link to their process report.
                        </p>
                        <p className="faqp">
                            For detailed instructions on how to integrate Process Feedback into your
                            course, please read our <a className="FAQ_link">Teacher Guides.</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className='expandable'>
                <div className="expandable__title-bar"
                     onClick={(e) => {
                         e.currentTarget.parentElement.classList.toggle("expandable--open");
                     }}
                >
                    <span className="expandable__title">10. What technical support is available for students and teachers?</span>
                    <ion-icon className="expandable__icon" name="chevron-down-outline"></ion-icon>
                </div>
                <div className="expandable__content-wrapper">
                    <div className="expandable__content">
                        <p className="faqp">
                            Process Feedback has a live chat feature. Sometimes our support team
                            may not be available right away. You are welcome to <a href='/404' className='FAQ_link'>email us anytime.</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className='expandable'>
                <div className="expandable__title-bar"
                     onClick={(e) => {
                         e.currentTarget.parentElement.classList.toggle("expandable--open");
                     }}
                >
                    <span className="expandable__title">11. What value does Process Feedback add to good teaching?</span>
                    <ion-icon className="expandable__icon" name="chevron-down-outline"></ion-icon>
                </div>
                <div className="expandable__content-wrapper">
                    <div className="expandable__content">
                        <p className='faqp'>
                            Process Feedback illuminates the otherwise hidden stages of a student's
                            work, enabling teachers to see the steps taken. By tracking drafts, edits,
                            and patterns of learning, it helps teachers offer more personalized, timely,
                            and constructive guidance to their students. In doing so, it fosters a
                            supportive classroom environment that celebrates effort, encourages
                            reflection, and develops deeper, lifelong learning skills. Process Feedback aims to
                            <a href='/404' className='FAQ_link'>help teachers become great </a>, in the AI era.
                        </p>
                    </div>
                </div>
            </div>
            <div className='expandable'>
                <div className="expandable__title-bar"
                     onClick={(e) => {
                         e.currentTarget.parentElement.classList.toggle("expandable--open");
                     }}
                >
                    <span className="expandable__title">12. We have large classes. How can Process Feedback support teaching?</span>
                    <ion-icon className="expandable__icon" name="chevron-down-outline"></ion-icon>
                </div>
                <div className="expandable__content-wrapper">
                    <div className="expandable__content">
                        <p className='faqp'>
                            Process Feedback offers a <a href='/404' className='FAQ_link'>teacher dashboard</a> where you can load
                            hundreds of writing process reports at once. This allows you to explore
                            and compare students' processes together
                        </p>
                        <p className="faqp">
                            You can also have students complete short reflection assignments to
                            review their own writing process reports based on <a href='/404' className='FAQ_link'> reflection prompts</a> and
                            share insights with you or their peers.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default FAQ;