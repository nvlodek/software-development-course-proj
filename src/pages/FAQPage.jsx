import React from 'react';
import './FAQPage.css';

function FAQPage() {

    const faqs = [
        {
            question: "1. What is the difference between creating an editor and creating an assignment?",
            answer: (
                <>
                    <p className="faqpage-p">
                        With a custom editor link you cannot provide assignment information or custom instructions within the editor.
                        If you need assignment details or directions inside the editor, create an assignment instead.
                    </p>
                </>
            )
        },
        {
            question: "2. Is it required to create a custom editor for my course?",
            answer: (
                <>
                    <p className="faqpage-p">
                        No. You do not have to create a custom editor to use Process Feedback in your class.
                        Students can simply go to{" "}
                        <a href="https://write.processfeedback.org" target="_blank" rel="noreferrer" className="faqpage-link">
                            https://write.processfeedback.org
                        </a>{" "}
                        and complete their writing there.
                    </p>
                    <p className="faqpage-p">
                        That said, when students see your institution's color theme and your course name in the sidebar,
                        the tool stops feeling like 'another random website' and starts feeling like part of your course environment.
                    </p>
                </>
            )
        },
        {
            question: "3. If a student copy-pastes, will the writing process show it?",
            answer: (
                <p className="faqpage-p">
                    Yes. A writing process report shows all copy-paste events larger than 25 characters (by default).
                    In the report, you can see what was pasted and when it was pasted. A writing process report has a
                    dedicated section called Paste Events. Check out our{" "}
                    <a href="/404" className="faqpage-link">sample writing process report</a>.
                </p>
            )
        },
        {
            question: "4. Does Process Feedback analyze AI usage?",
            answer: (
                <p className="faqpage-p">
                    Process Feedback works regardless of whether or not students are allowed to use generative AI tools.
                    While it doesn't automatically detect AI usage, the data it provides can help you see how and when AI might have been used.
                    Please refer to our guide on{" "}
                    <a href="/404" className="faqpage-link">identifying AI-assisted writing patterns</a>.
                </p>
            )
        },
        {
            question: "5. Besides English, what languages are supported?",
            answer: (
                <p className="faqpage-p">
                    Process Feedback is designed to work automatically with most languages, including languages like French and Spanish.
                    If a language uses special characters as sentence terminators or word separators, you can specify them in the Settings
                    so the writing process report is meaningful.
                </p>
            )
        },
        {
            question: "6. Does Process Feedback work with Microsoft Word?",
            answer: (
                <p className="faqpage-p">
                    Not yet. For Process Feedback to work, students need to write in Google Docs or use our online writing/coding editor.
                    We are actively working on developing additional extensions, including one for Microsoft Word.
                </p>
            )
        },
        {
            question: "7. Reviewing students' process can be time-consuming! Is there a way to make it easier?",
            answer: (
                <p className="faqpage-p">
                    It can be, but you have options. You can have students do much of the reviewing themselves by assigning short reflection assignments.
                    If you're looking for examples, check out our{" "}
                    <a href="/404" className="faqpage-link">Reflection Prompts</a> to guide their self-review.
                    You can also have students submit their writing process data ZIP files so you can load them all up in the{" "}
                    <a href="/404" className="faqpage-link">teacher dashboard</a> and explore them at once.
                </p>
            )
        },
        {
            question: "8. Will students feel anxious about being tracked?",
            answer: (
                <>
                    <p className="faqpage-p">
                        Whether or not students feel anxious often depends on how you introduce Process Feedback,
                        as well as your teaching context and grade level.
                    </p>
                    <p className="faqpage-p">
                        Ideally, you'll encourage students to review their own work and complete reflection assignments
                        so they stay in control of their learning. It's also important to let them know in advance that you'll
                        be asking them to share their writing process. For more details, please see our{" "}
                        <a href="/404" className="faqpage-link">Teacher Guides</a>.
                    </p>
                </>
            )
        },
        {
            question: "9. Does Process Feedback detect plagiarism?",
            answer: (
                <>
                    <p className="faqpage-p">
                        Process Feedback does not directly detect plagiarism. However, it can help teachers investigate suspicious cases by providing detailed information about a student's work. Our main focus is on showing the underlying data rather than interpreting it. We're aware that there are already many tools dedicated to plagiarism detection. We believe, however, that prevention is more important than detection. Detecting plagiarism often leads to punitive measures and difficult conversations.
                    </p>
                    <p className="faqpage-p">
                        By contrast, Process Feedback can discourage plagiarism at the outset, especially if students are asked to{" "}
                        <a href="/404" className="faqpage-link">reflect on their process</a>{" "}
                        and see how their work evolves over time. Also, you can refer to our guide on{" "}
                        <a href="/404" className="faqpage-link">identifying AI-assisted writing patterns</a>.
                    </p>
                </>
            )
        },
        {
            question: "10. If I notice a student copy-pasted, how should I grade them?",
            answer: (
                <>
                    <p className="faqpage-p">
                        Copy-pasting text or code itself may or may not be a concern depending on the context and an instructor's requirements. Sometimes a student may copy-paste their own text from elsewhere, so students should not be penalized simply for copy-pasting.
                    </p>
                    <p className="faqpage-p">
                        However, <strong>students can be penalized for not following directions</strong>. If the requirement in your assignment is to use the Process Feedback editor throughout their writing or coding process and not copy-paste at all, you have the rubric in place to grade accordingly.
                    </p>
                </>
            )
        },
        {
            question: "11. Does Process Feedback work with LMS platforms like Canvas or Blackboard?",
            answer: (
                <>
                    <p className="faqpage-p">
                        Yes. We have developed an extension specifically for LMSs.
                    </p>
                    <p className="faqpage-p">
                        Regardless of which LMS you use, students can always write in Google Docs or in Process Feedback's Writing Editor, download their writing process report as a PDF, and upload it to your LMS. A process report includes the student's final text along with charts and summaries that show their writing process. Students can also share a link to their process report.
                    </p>
                    <p className="faqpage-p">
                        For detailed instructions on how to integrate Process Feedback into your course, please read our{" "}
                        <a href="/404" className="faqpage-link">Teacher Guides</a>.
                    </p>
                </>
            )
        },
        {
            question: "12. What technical support is available for teachers and students?",
            answer: (
                <p className="faqpage-p">
                    Process Feedback has a live chat feature. Sometimes our support team may not be available right away.
                    You are welcome to{" "}
                    <a href="/404" className="faqpage-link">email us anytime</a>.
                </p>
            )
        },
        {
            question: "13. What value does Process Feedback add to good teaching?",
            answer: (
                <p className="faqpage-p">
                    Process Feedback illuminates the otherwise hidden stages of a student's work, enabling teachers to see the steps taken.
                    By tracking drafts, edits, and patterns of learning, it helps teachers offer more personalized, timely, and constructive guidance
                    to their students. In doing so, it fosters a supportive classroom environment that celebrates effort, encourages reflection,
                    and develops deeper, lifelong learning skills. Process Feedback aims to{" "}
                    <a href="/404" className="faqpage-link">help teachers become great</a>, in the AI era.
                </p>
            )
        },
        {
            question: "14. How should I use Process Feedback extension in my class?",
            answer: (
                <p className="faqpage-p">
                    How you introduce the extension to your students can make a big difference. Process Feedback isn't just an academic integrity tool;
                    it's designed to help students reflect on and think critically about their writing process. For ideas and best practices,
                    check out our{" "}
                    <a href="/404" className="faqpage-link">Teacher Guides</a>.
                </p>
            )
        },
        {
            question: "15. Does the process report show author contributions?",
            answer: (
                <p className="faqpage-p">
                    Yes. The report displays the percentage contribution of each collaborator based on the number of changes made.
                    Most users find it more helpful to turn on 'More Options' and view the graph version of the information which shows
                    collaboration timings as well.
                </p>
            )
        },
        {
            question: "16. Will it work on older Google Docs?",
            answer: (
                <p className="faqpage-p">
                    Absolutely. Google stores the edit history for all Docs by default. Our extension retrieves, cleans, and processes this data
                    to create an interactive report. That means it works even on documents written years ago — even 12 years back.
                </p>
            )
        },
        {
            question: "17. What are the limitations of the Google Docs extension?",
            answer: (
                <p className="faqpage-p">
                    While the extension has been successfully used by thousands of teachers and students, it hasn't been thoroughly tested on extremely
                    large documents (for example, those with 100,000+ changes or characters). That said, typical student writing is well within safe limits.
                    Note that text styling in the generated report may not be perfectly accurate yet — we're actively working to improve this.
                    If you run into any issues, feel free to reach out to us.
                </p>
            )
        },
        {
            question: "18. Is the Google Docs extension compatible with Canvas, Blackboard, and other LMS platforms?",
            answer: (
                <p className="faqpage-p">
                    Yes. Students can download their writing process report as a PDF or save their report online to generate a report link
                    and submit it just like any other assignment. Please read more in the{" "}
                    <a href="/404" className="faqpage-link">student submission guide</a>.
                </p>
            )
        },
        {
            question: "19. I have edit access to the document but it still shows 'No Edit Access.' What should I do?",
            answer: (
                <p className="faqpage-p">
                    You may have multiple accounts in your Chrome or Edge profile. Reload the page and make sure you're using the primary account
                    you want to run the extension with.
                </p>
            )
        },
        {
            question: "20. Our institution is FERPA-conscious. How does the extension ensure student privacy?",
            answer: (
                <p className="faqpage-p">
                    By default, our extension does not collect any data from students. Unless students explicitly choose to save their report online
                    to generate a permanent link, no data is collected. You are welcome to review the privacy policy, and we are happy to work with your institution.
                </p>
            )
        },
        {
            question: "21. Does Process Feedback work with Google Classroom?",
            answer: (
                <p className="faqpage-p">
                    Yes. The Process Feedback for Google Docs extension is designed to work with Google Classroom.
                </p>
            )
        },
        {
            question: "22. Do students need accounts to use it?",
            answer: (
                <p className="faqpage-p">
                    No. Students can use Process Feedback's extensions or its editor without creating accounts.
                </p>
            )
        },
        {
            question: "23. Can I use Process Feedback for just one assignment?",
            answer: (
                <p className="faqpage-p">
                    Yes. Many teachers start with a single low-stakes assignment.
                </p>
            )
        },
        {
            question: "24. Do students see their own process data?",
            answer: (
                <p className="faqpage-p">
                    Yes. Transparency is intentional and central to Process Feedback. Students can see all of the same process data that teachers see.
                </p>
            )
        },
        {
            question: "25. Can I use Process Feedback to give online exams?",
            answer: (
                <p className="faqpage-p">
                    Yes. Process Feedback can be used for assignments or exams. However, it is critical to inform students in advance that you will be assessing their process, not just the final outcome. Please see our{" "}
                    <a href="/404" className="faqpage-link">Teacher Guides</a> for recommended practices.
                </p>
            )
        },
        {
            question: "26. Do I have to grade my students' writing process reports?",
            answer: (
                <p className="faqpage-p">
                    No. Many teachers use the process report for reflection or discussion rather than grading. In some cases, it can support conversations about revision expectations or writing strategies, but how (or whether) it is used for assessment is always the teacher's choice.
                </p>
            )
        },
        {
            question: "27. Can students download their source code from the online compiler?",
            answer: (
                <p className="faqpage-p">
                    Yes. Students can download a ZIP file containing their source code from the sidebar.
                </p>
            )
        },
        {
            question: "28. Can students use voice typing in the Process Feedback editor or assignment page?",
            answer: (
                <p className="faqpage-p">
                    Yes. Students can use voice typing in the Process Feedback editor or assignment page. Voice-typed text is typically inserted in larger chunks rather than character-by-character. As a result, these insertions <strong>often appear as paste events</strong> in the process report. The report reflects when text was added, but it does not record audio input or speech.
                </p>
            )
        },
        {
            question: "29. How does voice typing appear in Google Docs writing process reports?",
            answer: (
                <p className="faqpage-p">
                    When students use voice typing in Google Docs, the resulting text is captured through Google Docs’ revision history. Voice-typed content often appears as larger blocks of inserted text and <strong>may be flagged as paste events labeled as “possibly voice-typed.”</strong> The report shows what text was added and when, but it does not capture audio or speech.
                </p>
            )
        },
        {
            question: "30. What happens if a student clicks the assignment link again or opens it on another device?",
            answer: (
                <>
                    <p className="faqpage-p">
                        If a student clicks the assignment link again on the same device, they can resume their work where they left off. If they open the assignment link on a different device, a new session will start.
                    </p>
                    <p className="faqpage-p">
                        To continue work on a different device, students should copy the document edit link from their original session and open that link directly on the new device, rather than clicking the assignment link again.
                    </p>
                </>
            )
        },
        {
            question: "31. How can I continue my work on another device using the Process Feedback editor?",
            answer: (
                <>
                    <p className="faqpage-p">
                        Process Feedback does not automatically save your document online. To continue your work on another device:
                    </p>
                    <p className="faqpage-p">
                        1. Use the <strong>Save Online</strong> option in the sidebar.<br/>
                        2. After it is saved, either choose <strong>Email to Myself</strong> to receive the document edit link, or copy the document edit link directly (not the report link).<br/>
                        3. Open that edit link on your other device to continue working.
                    </p>
                </>
            )
        },
        {
            question: "32. We have large classes. How can Process Feedback support teachers?",
            answer: (
                <>
                    <p className="faqpage-p">
                        Process Feedback offers a <a href="/404" className="faqpage-link">teacher dashboard</a> where you can load hundreds of writing process reports at once. This allows you to explore and compare students' processes together.
                    </p>
                    <p className="faqpage-p">
                        You can also have students complete short reflection assignments to review their own writing process reports based on <a href="/404" className="faqpage-link">reflection prompts</a> and share insights with you or their peers.
                    </p>
                </>
            )
        },
        {
            question: "33. What special metrics do teachers see that students don't?",
            answer: (
                <p className="faqpage-p">
                    Transparency is a key idea at Process Feedback. There are no special features that are available only to teachers for observing students' behavior. Students can see what teachers can see.
                </p>
            )
        },
        {
            question: "34. Can I donate to support Process Feedback?",
            answer: (
                <p className="faqpage-p">
                    We are committed to keeping Process Feedback free for teachers and students and do not accept financial donations from teachers and students. You can support us: 1) by providing feedback to help us improve the application so new teachers and students find it intuitive to use, or 2) by introducing Process Feedback to other teachers, schools, and organizations or suggesting us ideas to grow it in ways that can help more teachers and students.
                </p>
            )
        }
    ];

    return (
        <div className='faqpage-landscape'>
            <h2 className='faqpage-header'>Frequently Asked Questions</h2>

            <div className='faqpage-outer-border'>
                {faqs.map((faq, index) => (
                    <div key={index} className='faqpage-expandable'>
                        <div
                            className="faqpage-expandable__title-bar"
                            onClick={(e) => {
                                e.currentTarget.parentElement.classList.toggle("faqpage-expandable--open");
                            }}
                        >
                            <span className="faqpage-expandable__title">
                                {faq.question}
                            </span>
                            <ion-icon
                                className="faqpage-expandable__icon"
                                name="chevron-down-outline"
                            ></ion-icon>
                        </div>

                        <div className="faqpage-expandable__content-wrapper">
                            <div className="faqpage-expandable__content">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FAQPage;