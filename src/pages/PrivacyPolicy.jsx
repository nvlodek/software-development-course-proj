import React, {useEffect, useRef, useState} from "react";
import './PrivacyPolicy.css'

function PrivacyPolicy() {
    const [visible, setVisible] = useState(false);
    const policyRef = useRef(null);

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
        if (policyRef.current) {
            observer.observe(policyRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="outerPrivacyPolicy">
            <div className="PrivacyPolicy-header" ref={policyRef}>
                <h2 className={`header ${visible ? "fade-in" : "hidden"}`}>
                    Privacy Policy
                </h2>

                <h4 className={`title ${visible ? "fade-in" : "hidden"}`}>
                    Process Feedback's privacy policy
                </h4>

                <p className="date">
                    Effective date: March 15, 2026
                </p>
            </div>
            <div className="PrivacyPolicy">
            <div className="key-points">
                    <h3 className="header-title">Key Points (TL;DR;)</h3>
                    <ul className="key-points-list">
                        <li className="key-item">
                            Users retain ownership of all content they create or upload. Process Feedback only processes or stores
                            content when users explicitly save or share reports or when required under an institutional agreement.
                            Read more in Section 4.
                        </li>
                        <li className="key-item">
                            Process Feedback uses personally identifiable information only to operate and support its services, comply
                            with legal obligations, and fulfill user- or institution-requested purposes. Read more in section 5.
                        </li>
                        <li className="key-item">
                            Process Feedback does not user Google Analytics or similar tracking tools within its core editor pages or
                            report-viewing pages. Limited analytics may be used on the public website and support services. Read m
                            more in section 7.
                        </li>
                    </ul>
            </div>
            <div className="privacy-policy-sections">
                <h1 className="section-header">1. Introduction</h1>
                <h2 className="subsection-header">a) Web site owner</h2>
                <p className="subsection-description">
                    Process Feedback, LLC ("PF") operates and owns the processfeedback.org Web Site. For any privacy-
                    related inquiries or concerns, you can contact PF via email at <a className='link' href="mailto:contact@processfeedback.org">contact@processfeedback.org</a>. This
                    privacy notice outlines PF's information practices concerning the PF Web Site, detailing the types of
                    personally identifiable information requested, how this information is utilized, and the parties with
                    whom it may be shared. Please note that other PF websites may be governed by privacy notices
                    with differing information practices.
                </p>
                <h2 className='subsection-header'>b) Anonymous web site visits</h2>
                <p className="subsection-description">
                    You can freely visit the PF Web Site without the need to disclose personal information. However,
                    please be aware that certain non-personal data, such as cookies or analytics data, may be collected
                    for the purpose of optimizing site functionality and improving user experience. This includes the use
                    of analytics tools that track aggregate user data to understand website usage patterns and trends.
                </p>
                <h1 className="section-header">2. Product categories and data handling</h1>
                <p className="subsection-description">
                    Unless explicitly stated and voluntarily initiated by the user, Process Feedback applications do not
                    automatically transmit and store any writing, code, or document content from any tool, extension,
                    or service. This includes all browser extensions, web editors, compiler tools, and any future Process
                    Feedback products.
                </p>
                <h2 className="subsection-header">a) Browser extensions (for Google Docs, online editors, LMSs, etc.)</h2>
                <p className="subsection-description">
                    Process Feedback provides several browser extensions such as "Process Feedback for Google Docs."
                    These extensions access only the content of the active document or page the user is viewing or
                    editing. They do not access other Google Drive files, browsing history, emails, or unrelated data.
                    These extensions operate locally within the user's browser by default.
                </p>
                <p className="subsection-description">
                    Process Feedback extensions transmit and store data only when a user chooses to use the "Share
                    this Report" feature. If requested, Process Feedback can disable this specific "Share this Report"
                    feature for specific email domains, ensuring that users from that domain cannot use the feature and
                    are prevented from submitting or transmitting any data to Process Feedback servers. Institutions
                    may request such domain-level blocking of the data sharing feature, preventing data submission
                    from designated domains. For example, we can block all users from ".pf.edu" domain from
                    accessing this feature.
                </p>
                <p className="subsection-description">
                    When a user opts to share data, the following data may be securely stored on Process Feedback-
                    managed servers for the purpose of generating or delivering the requested report.
                </p>
                <ul className="subsection-list">
                    <li className="subsection-item">Name and Address</li>
                    <li className="subsection-item">Document identifiers</li>
                    <li className="subsection-item">Document name or metadata</li>
                    <li className="subsection-item">Writing-process information: text changes, insertions, deletions, paste actions, timestamps,
                        revision metadata, contributor identifiers</li>
                    <li className="subsection-item">IP address and system metadata required for secure transmission</li>
                </ul>
                <p className="subsection-description">Users may delete their shared documents or reports at any time via the report page interface.</p>
                <h2 className = "subsection-header">b) Online editors</h2>
                <p className="subsection-description">
                    Process Feedback provides built-in editors that allow users to write, revise, and analyze their
                    working process directly within the Process Feedback application. These editors collect only the
                    information necessary to provide the requested functionality, such as:
                </p>
                <ul className="subsection-list">
                    <li className="subsection-item">Writing activity</li>
                    <li className="subsection-item">Revision patterns</li>
                    <li className="subsection-item">User-entered text, code, or uploaded files</li>
                    <li className="subsection-item">Typing metrics, pause durations, pause events, and document changes</li>
                    <li className="subsection-item">Optional user-provided metadata (assignment name, class information, etc.)</li>
                </ul>
                <p className="subsection-description">
                    All writing and activity data remains on the user's device and is not transmitted to Process Feedback
                    servers unless the user chooses to save or share a writing-process report. When a user saves or
                    exports a report, only the information included in that report is stored on Process Feedback-
                    managed servers. Users may delete their stored documents or reports at any time.
                </p>
                <h2 className = "subsection-header">c) Online Compilers</h2>
                <p className="subsection-description">
                    Process Feedback provides an online code-execution environment ("Online Compiler") for
                    educational use. When a user submits code for execution, the following information may be
                    processed:
                </p>
                <ul className="subsection-list">
                    <li className="subsection-item">The code the user chooses to run</li>
                    <li className="subsection-item">Input provided by the user</li>
                    <li className="subsection-item">Execution output, errors, and performance logs</li>
                    <li className="subsection-item">Language and runtime selection</li>
                    <li className="subsection-item">System metadata required for security and rate limiting (e.g., IP address)</li>
                </ul>
                <p className="subsection-description">No source code, execution logs, or compiled artifacts are shared with third parties.</p>
                <h2 className="subsection-header">d) Use of generative AI</h2>
                <p className="subsection-description">
                    Process Feedback does not offer any generative AI feature when users access it via browser
                    extensions such as "Process Feedback for Google Docs" or "Process Feedback."
                </p>
                <p className="subsection-description">
                    When users utilize Process Feedback's Online Editor or Online Compiler, they can access
                    safeguarded and constrained versions of generative AI tools. These tools are not configured for
                    open, two-way conversational interaction. Instead, they provide targeted, function-specific
                    assistance, such as offering options for correcting grammar, suggesting teacher-approved feedback
                    options, or generating explanations for code or execution errors.
                </p>
                <ul className="subsection-list">
                    <li className="subsection-item">The interaction with the generative AI (the prompt sent and the direct response received) is
                        processed ephemerally and is not logged or stored on Process Feedback-managed servers.</li>
                    <li className="subsection-item">However, outputs of the AI tool become a part of the document's content and are then logged
                        as revision events.</li>
                    <li className="subsection-item">
                        The document's history and all revision events, including those resulting from AI-assisted
                        changes, are retained on the user's device or stored on Process Feedback-managed servers only
                        if the user explicitly saves or shares a writing-process report.
                    </li>
                    <li className="subsection-item">
                        Users retain full ownership of their data (including text, code, and documents), and this data is
                        strictly prohibited from being used for any kind of AI model training. All prompts and outputs
                        are handled in accordance with our data minimization and privacy policies.
                    </li>
                </ul>
                <h1 className="section-header">3. Support chat across all products</h1>
                <p className="subsection-description">
                    Process Feedback also offers a customer support chat to assist users. When a user initiates a
                    support chat, the chat service provider may collect standard website analytics and chat-related
                    metadata (e.g., IP address, browser information, pages visited, and chat content). No Google Docs
                    data or student writing data is automatically transmitted through this support feature. The specific
                    chat service provider used may change over time.
                </p>
                <h1 className="section-header">4. Personal information that may be collected</h1>
                <h2 className="subsection-header">a) Identifying information</h2>
                <p className="subsection-description">
                    In order to access designated services and/or restricted features within the processfeedback.org
                    website, PF may request a user to provide certain personal identifying information, which may
                    include: name, title of the document or coding project, affiliation, email address, and personal
                    written/typed content. PF may request additional information necessary to secure and maintain
                    user data online. Users of the processfeedback.org website retain ownership of all content that they
                    upload, post, or otherwise make available on the site. Users are responsible for maintaining the
                    links to the content they have created. PF does not have the ability to retrieve this information for
                    users.
                </p>
                <h2 className="subsection-header">b) Information from children</h2>
                <p className="subsection-description">
                    Process Feedback is committed to protecting the privacy of students and young users. Our services
                    are designed for educational institutions and students aged 13 and above. In jurisdictions where the
                    minimum age of digital consent is 13 (such as the United States under COPPA), students who are at
                    least 13 years old may use our services and provide personal data without requiring parental
                    consent. In jurisdictions where a higher age threshold applies (such as 16 under the GDPR), we act
                    as a data processor on behalf of the educational institution (the data controller). In such cases, it is
                    the responsibility of the institution to ensure that any required consents, including parental
                    consents where applicable, have been obtained prior to a student's use of our services. We do not
                    knowingly collect personal data from children under the applicable age of digital consent without
                    the appropriate authorization. If we become aware that we have inadvertently received such data,
                    we will take steps to delete it. Please note that in order for us to process the request for the removal
                    of a user's information, the parent or guardian will need to provide sufficient information to identify
                    the child's account or data. We do not use personally identifying information collected from children
                    for marketing or promotional purposes, and we do not disclose such information to any third party
                    for any purpose whatsoever. If you are a parent or guardian and believe that your child has provided
                    us with personal data without your consent, please contact us at <a href="mailto:contact@processfeedback.org" target='_blank' className="link">contact@processfeedback.org</a>.
                </p>
                <h2 className="subsection-header">d) Links to other web sites</h2>
                <p className="subsection-description">
                    PF Web site may contain links to, or information from, other web sites. PF is not responsible for the
                    privacy practices or the content of those other Web sites.
                </p>
                <h1 className="section-header">5. Uses made of the information</h1>
                <h2 className="subsection-header">a) Limited uses identified</h2>
                <p className="subsection-description">
                    PF will only use your personal identifiable information for the purposes for which it is submitted,
                    unless we obtain your prior consent for other uses. These purposes include but are not limited to:
                    replying to inquiries, handling complaints, providing operational notices, and maintaining program
                    records. We will not use your personal identifiable information for any other purpose without
                    your explicit consent.
                </p>
                <h2 className="subsection-header">b) Marketing uses</h2>
                <p className="subsection-description">
                    PF shall refrain from utilizing the information you provide for direct marketing objectives or
                    disseminating such information for direct marketing endeavors without your explicit consent.
                    Nonetheless, aggregated and anonymized statistics obtained from user data may be disseminated
                    for analytical or statistical intents.
                </p>
                <h2 className="subsection-header">c) Stored information uses</h2>
                <p className="subsection-description">
                    PF stores and retains the information entered on the PF website and uploaded to PF servers for a
                    duration of around six (6) months. During this period, you have the option to download the stored
                    information at any time. We strongly recommend downloading the information as a precaution
                    against potential server failures.
                </p>
                <h1 className="section-header">6. Disclosure of the information</h1>
                <h2 className="subsection-header">a) Within the corporate organization</h2>
                <p className="subsection-description">
                    PF may share your personal information within the PF corporate organization, and may transfer the
                    information to countries in the world where PF conducts business. In such countries, PF will still
                    handle user personal information in the manner described herein. Notwithstanding the foregoing,
                    where PF has executed a separate written Data Privacy Agreement (DPA) or Addendum with an
                    institution, the terms of that agreement will supersede this section and govern the data retention,
                    deletion, and disposal requirements.
                </p>
                <h2 className="subsection-header">b) Mergers and acquisitions</h2>
                <p className="subsection-description">
                    Process Feedback may, for sound business reasons, choose to sell, buy, merge, or otherwise
                    reorganize its businesses. In the event of such a transaction, the transfer of company assets may
                    involve the limited disclosure of user information, including PII, to prospective or actual purchasers
                    for the purpose of due diligence. PF will only disclose the minimum necessary PII required for the
                    transaction and will do so under strict confidentiality agreements. Notwithstanding the foregoing,
                    where PF has executed a separate written Data Privacy Agreement (DPA) or Addendum with an
                    institution, the terms of that agreement will supersede this section and govern the disclosure of any
                    Personally Identifiable Information (PII) related to that contract. Disclosure of such PII will be
                    handled solely in accordance with the executed DPA, which typically requires prior written notice to
                    the institution.
                </p>
                <h2 className="subsection-header">c) Agents</h2>
                <p className="subsection-description">
                    PF employs or engages other companies and individuals to perform business functions on behalf of
                    PF. These persons are provided with personal identifying information required to perform their
                    functions, but are prohibited by contract from using the information for other purposes. These
                    persons engage in a variety of functions which include, but are not limited to, fulfilling orders,
                    delivering packages, removing repetitive information from user lists, analyzing data, providing
                    marketing assistance, processing credit card payments, and providing user services.
                </p>
                <h2 className="subsection-header">d) Disclosure to governmental authorities</h2>
                <p className="subsection-description">
                    Under certain circumstances, personal information may be subject to disclosure pursuant to a
                    judicial or other government subpoenas, warrants, or orders.
                </p>
                <h1 className="section-header">7. Use of computer tracking technologies</h1>
                <h2 className="subsection-header">a) Tracking of personal information</h2>
                <p className="subsection-description">
                    PF and its third-party components may utilize cookies, local storage (such as Session Storage or
                    IndexedDB), and other technologies to collect identifiable and personal information. A cookie, an
                    alphanumeric identifier, can be transferred to a user's hard drive via their browser. Once stored on
                    the user's computer, the cookie serves as an anonymous tag identifying the computer, not the user.
                    Cookies and other local storage mechanisms may be sent by PF or its third-party vendors. Users
                    have the option to configure their browsers to receive notifications before accepting cookies,
                    allowing them to decide whether to accept them. Users may also clear stored data in their browser
                    settings. However, disabling or clearing this data may result in certain websites and PF features not
                    functioning properly.
                </p>
                <h2 className="subsection-header">b) Use of cookies</h2>
                <p className="subsection-description">
                    PF and its third-party components may utilize cookies to collect identifiable and personal
                    information through various technologies. A cookie, an alphanumeric identifier, can be transferred
                    to a user's hard drive via their browser. Once stored on the user's computer, the cookie serves as an
                    anonymous tag identifying the computer, not the user. Cookies may be sent by PF or its third-party
                    vendors. Users have the option to configure their browsers to receive notifications before accepting
                    cookies, allowing them to decide whether they accept them. However, disabling cookies may result
                    in certain websites not functioning properly.
                </p>
                <h2 className="subsection-header">c) Use of web beacon technologies</h2>
                <p className="subsection-description">
                    PF may also use Web beacons or other technologies to better tailor its Web site(s) to provide better
                    user service. If these technologies are in use, when a visitor accesses these pages of the Web site, a
                    non-identifiable notice of that visit is generated, which may be processed by PF or by its suppliers.
                    Web beacons usually work in conjunction with cookies. If user does not want cookie information to
                    be associated with user's visits to these pages, user can set its browser to turn off cookies; however,
                    Web beacon and other technologies will still detect visits to these pages, but the notices
                    they generate cannot be associated with other non-identifiable cookie information and are disregarded.
                </p>
                <h2 className="subsection-header">d) Collection of non-identifiable information</h2>
                <p className="subsection-description">
                    PF may collect non-identifiable information from user visits to the PF website(s) to improve user
                    service. This may include traffic analysis, such as tracking the domains from which users visit or the
                    number of visitors, measuring visitor activity on PF website(s), website and system administration,
                    user analysis, and business decision-making. Additionally, non-identifiable information may
                    encompass data such as screen size, type of browser, operating system, and device type. This
                    information, often referred to as "clickstream data," may be utilized by PF or its contractors to
                    analyze trends and statistics, thereby enhancing the overall user experience.
                </p>
                <h2 className='subsection-header'>e) Collection of personal information</h2>
                <p className="subsection-description">
                    PF collects personal identifying information from users during various interactions, including the
                    use of online storage and initiating chats. This information is primarily used and analyzed at an
                    aggregate level, not at an individual level, to help PF understand trends and patterns. While
                    individual-level review of this information is not typical, in the event of system errors or debugging
                    processes, PF may access and utilize personal information to diagnose and resolve technical issues.
                    Additionally, when users initiate chats, personal information may be collected as part of the chat
                    interaction to provide support and assistance.
                </p>
                <h2 className="subsection-header">f) Use of analytics on the public website</h2>
                <p className="subsection-description">
                    PF utilizes Google Analytics solely on its public-facing website, <a href="http://www.processfeedback.org" target="_blank" className="link">http://www.processfeedback.org</a>,
                    for the purpose of understanding visitor interactions and enhancing the user experience. This analytics
                    data is collected in an aggregate form and does not include personally identifiable information.
                </p>
                <h2 className="subsection-header">g) No analytics on core application</h2>
                <p className="subsection-description">
                    PF does not employ Google Analytics or any other similar tracking or analytics tools within its core
                    application. For example, the Chrome extension page at <a href="https://app.processfeedback.org/gdocs" className="link" target="_blank">http://app.processfeedback.org/gdocs</a> or
                    the online editor at <a href="https://app.processfeedback.org/writing" className='link' target="_blank">http://app.processfeedback.org/writing</a> do not incorporate any
                    analytics technologies.
                </p>
                <h1 className="section-header">8. Information Security</h1>
                <h2 className="subsection-header">a) Commitment to online security</h2>
                <p className="subsection-description">
                    PF employs physical, electronic, and managerial procedures to safeguard the security and integrity
                    of personal information.
                </p>
                <h2 className="subsection-header">b) No liability for acts of third parties</h2>
                <p className="subsection-description">
                    PF will exercise all reasonable efforts to safeguard the confidentiality of user personal information.
                    However, transmissions protected by industry standard security technology and implemented by
                    human beings cannot be made absolutely secure. Consequently, PF shall not be liable for
                    unauthorized disclosure of personal information due to no fault of PF, including but not limited to
                    errors in transmission and unauthorized acts of PF staff and/or third parties.
                </p>
                <h1 className="section-header">9. Privacy policy changes and opt-out rights</h1>
                <h2 className="subsection-header">a) Changes to the privacy policy</h2>
                <p className="subsection-description">
                    PF reserves the right to change its privacy policy at any time. When PF makes changes to its privacy
                    policy, we will post the updated policy on our website and update the effective date. For material
                    changes, we will take reasonable steps to notify users in a timely and effective manner, including by
                    requiring users to acknowledge and agree to the updated Privacy Policy before continuing to use
                    Process Feedback and, where appropriate, by sending a notification email to the email address
                    associated with the user's account or the applicable school board, district, or institutional account.
                    We encourage you to review our privacy policy periodically to stay informed about how we protect
                    your information. Notwithstanding the foregoing, where PF has executed a separate written Data
                    Privacy Agreement (DPA) or Addendum with an institution, the terms of that agreement will
                    supersede this section and govern the amendment process for any material change concerning the
                    privacy, security, use, or disclosure of data covered by that contract. Such material changes will
                    require advance written notice to the institution.
                </p>
                <h2 className="subsection-header">b) Opt-out right</h2>
                <p className="subsection-description">
                    Users have the right at any time to cease permitting personal information to be collected, used, or
                    disclosed by PF and/or by any third parties with whom PF has shared and/or transferred such
                    personal information. The right of cancellation may be exercised by contacting PF via email at
                    <a href="mailto:contact@processfeedback.org" className="link" target="_blank">contact@processfeedback.org</a>. In order to facilitate the deletion of personal information, users must
                    provide all necessary details as requested by PF. Upon receipt of the request and necessary
                    information, PF will promptly delete the user's personal information from its database
                </p>
                <h1 className="section-header">10. Access rights to data</h1>
                <h2 className="subsection-header">a) Information maintained by PF</h2>
                <p className="subsection-description">
                    Upon the user's request, PF will provide a reasonable description of the personally identifiable
                    information that PF maintains in its database. Users can contact PF via email at
                    <a href="mailto:contact@processfeedback.org" className="link" target="_blank">contact@processfeedback.org</a> to request this information. It's important to note that PF cannot
                    access or delete user content without specific identification of the data being stored. Therefore,
                    individual users and non-DPA accounts must submit their requests from the email address
                    associated with the content and are advised to maintain a copy of the identification details
                    associated with their content. These details will be necessary when making requests to remove their
                    content from PF's database. Notwithstanding the foregoing, for data subject to a signed Data
                    Privacy Agreement (DPA) with an institution, PF will accept and execute deletion instructions
                    submitted in writing by the institution (the Data Controller).
                </p>
                <h2 className="subsection-header">b) Your California privacy rights</h2>
                <p className="subsection-description">
                    California's privacy laws require a company to provide notice to California users of their rights to
                    receive information on which entities their information was shared for marketing purposes. While
                    PF may not collect personal information for direct marketing purposes, we acknowledge your rights
                    as a California resident under California Civil Code Section 1798.83. If you have any questions or
                    concerns regarding PF's handling of personal information, you may contact us at
                    <a href="mailto:contact@processfeedback.org" className="link" target="_blank">contact@processfeedback.org</a>. While we may not have direct marketing practices, we are committed
                    to providing transparency regarding your personal information. If applicable, within 30 days of
                    receiving such a request, PF will provide information regarding the categories of personal
                    information that may be disclosed to third parties for their direct marketing purposes, if any, along
                    with the names and addresses of these third parties. Please note that in order to fulfill your request,
                    we may require you to provide necessary identification or verification details. This request may be
                    made no more than once per calendar year. Additionally, PF reserves its right not to respond to
                    requests submitted other than to the specified email address.
                </p>
                <h1 className="section-header">11. Data breach response</h1>
                <p className="subsection-description">
                    In the event of a security incident or data breach involving personal information, Process Feedback
                    will promptly investigate the incident, contain the breach, and assess its scope and impact. We will
                    notify affected individuals and relevant authorities without undue delay. When we have a valid email
                    address on file, we will provide notice by direct email to the email address associated with the
                    affected user's account and, where applicable, to the email address associated with the relevant
                    school, board, district, or institutional account or designated contact. Our breach response plan
                    includes measures to mitigate harm, prevent recurrence, and protect the integrity and
                    confidentiality of personal information.
                </p>
                <h1 className="section-header">12. Educational use and data processing</h1>
                <p className="subsection-description">
                    When Process Feedback is used in an educational setting, we act as a Data Processor on behalf of
                    the school or institution, which serves as the Data Controller. This means:
                </p>
                <ul className="subsection-list">
                    <li className="subsection-item">
                        We process personal data solely on the instructions of the school or institution.
                    </li>
                    <li className="subsection-item">
                        We do not use personal data for any purpose other than to provide our services as agreed with
                        the institution.
                    </li>
                    <li className="subsection-item">
                        We maintain appropriate technical and organizational measures to protect the security and confidentiality of personal data.We maintain appropriate technical and organizational measures to protect the security and
                        confidentiality of personal data.
                    </li>
                </ul>
                <h2 className="section-header">13. For school users</h2>
                <p className="subsection-description">
                    When used under a school agreement, our handling of student data is governed by applicable
                    student privacy laws and a signed Data Privacy Agreement.
                </p>
                <h1 className="section-header">14. Accountability</h1>
                <h2 className="subsection-header">a) Questions, problems, or complaints</h2>
                <p className="subsection-description">
                    If you have a question about this policy statement or a complaint about PF's compliance with this
                    privacy policy, you may contact PF by email at <a href="mailto:contact@processfeedback.org" className="link" target="_blank">contact@processfeedback.org</a>.
                </p>
                <h2 className="subsection-header">b) Terms of use</h2>
                <p className="subsection-description">
                    By choosing to use PF's services, you hereby acknowledge and accept PF's practices as described in
                    this Privacy Policy. Any dispute over privacy between you and PF is subject to the provisions of this
                    notice and to PF's Terms of Service Agreement, which is hereby incorporated by reference. You can
                    review the Terms of Service Agreement at <a href="https://processfeedback.org/terms/" target="_blank" className="link">processfeedback.org/terms</a>.
                </p>
                <div className="policy-buttons">
                    <button className="btn-primary">
                        <a href="https://processfeedback.org/terms/" className="btn-link" target="_blank">
                            Read: Terms and Conditions </a>
                    </button>
                    <button className="btn-primary">
                        <a href="https://processfeedback.org/docs/institutions/" className="btn-link" target="_blank">
                        Read: Docs and Institutions
                        </a>
                    </button>
                </div>
                <p style={{ textAlign: "center" }}>
                    Links used from real Process Feedback website.
                </p>
            </div>
            </div>
        </div>
    );
}

export default PrivacyPolicy;
