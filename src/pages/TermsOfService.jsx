import React, {useEffect, useRef, useState} from "react";
import './TermsOfService.css'

function TermsOfService() {
    const [visible, setVisible] = useState(false);
    const termsRef = useRef(null);

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
        if (termsRef.current) {
            observer.observe(termsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="outerTermsOfService">
            <div className="TermsOfService-header" ref={termsRef}>
                <h2 className={`header ${visible ? "fade-in" : "hidden"}`}>
                    Terms
                </h2>
                <h4 className={`title ${visible ? "fade-in" : "hidden"}`}>
                    Terms and conditions of using Process Feedback
                </h4>
                <p className="termsdate">
                    Effective date: March 15, 2026
                </p>
            </div>
            <div className="TermsKeyPoints">
                <h3 className="TOS-header-title">Key Points (TL;DR;)</h3>
                <ul className="Terms-kplist">
                    <li className="keypoint">
                        Process Feedback's original content is generally available under open, copyleft-style licenses (such as CC
                        BY-SA 4.0), allowing reuse and adaptation with attribution and share-alike requirements. Read more in
                        Section 7.
                    </li>
                    <li className="keypoint">
                        Users retain ownership of all content they submit to Process Feedback, while granting Process Feedback a
                        limited permission to host, display, analyze, and use that content as necessary to operate, maintain, and
                        improve the platform and to study its impact. Read more in Section 7.
                    </li>
                    <li className="keypoint">
                        Process Feedback provides multiple tools, including browser extensions, web-based editors, and code-
                        execution environments. Content is accessed or stored only when users choose to save, export, or share
                        information. Read more in Section 18.
                    </li>
                    <li className="keypoint">
                        If a user's access is governed by a signed Data Privacy Agreement (DPA) with an institution, the DPA
                        controls the subject matter it covers and prevails over these Terms in the event of a conflict. Read more in
                        the introductory DPA paragraph.
                    </li>
                </ul>
            </div>
            <div className='Terms-sections'>
                <p className='Terms-paragraph'>
                    This Agreement is a legal agreement between you and Process Feedback, LLC (hereinafter referred
                    to as "Website Owner"), the owner and developer of processfeedback.org. By accessing or using any
                    service provided on processfeedback.org, you become a client ("Client") and you agree to be bound by all of the terms (the "Terms") set forth in this Agreement as long as you remain a Client. If you do not agree to the terms, please do not use any processfeedback.org service.
                </p>
                <p className='Terms-paragraph'>
                    The Terms are subject to change at any time. When Processfeedback.org makes changes to these
                    Terms, we will post the updated Terms on this page and update the effective date. For material
                    changes, we will take reasonable steps to notify users in a timely and effective manner, including by
                    requiring users to acknowledge and agree to the updated Terms before continuing to use Process
                    Feedback and, where appropriate, by sending a notification email to the email address associated
                    with the user's account or the applicable school board, district, or institutional account. The most
                    current version of this Agreement, which supersedes all previous versions, can be reviewed at <a href='./TermsOfService.jsx' target='_blank' rel='noreferrer' className='terms-link'>processfeedback.org/terms</a>. Notwithstanding the foregoing, for terms covered by a signed Data
                    Privacy Agreement (DPA) with an institution (the Data Controller), the applicable DPA will govern,
                    and in the event of any conflict between these Terms and a valid, executed DPA, the DPA shall
                    prevail solely with respect to the subject matter covered by the DPA.
                </p>
                <h1 className='termsHeader'>1. Limitations of liability and indemnification</h1>
                <p className='Terms-paragraph'>
                    Client agrees that processfeedback.org, its subsidiaries, affiliates, licensors, licensees, service
                    providers, employees, agents, officers, and directors will not be liable for any incidental, direct,
                    indirect, punitive, actual, consequential, special, exemplary, or other damages, including loss of
                    revenue or income, pain and suffering, emotional distress, or similar damages, even if
                    Processfeedback.org has been advised of the possibility of such damages, such damages were
                    reasonably foreseeable or Processfeedback.org was grossly negligent. In no event will the collective
                    liability of Processfeedback.org and its subsidiaries, affiliates, licensors, service providers, content
                    providers, employees, agents, officers, and directors, regardless of the form of action (whether in
                    contract, tort, or otherwise), exceed the total amount paid by users, if any, to access or use the
                    services provided by Processfeedback.org. This limitation applies whether the claim is based on
                    contract, negligence, or any other legal theory. Processfeedback.org shall not be liable for any
                    indirect, incidental, consequential, special, or punitive damages arising out of or in connection with
                    the use of its services, including but not limited to the interactions, contributions, or engagement of
                    users. Some jurisdictions do not permit the exclusion or limitation of liability for consequential or
                    incidental damages, and, as such, some portion of the above limitation may not apply to Client. In
                    such jurisdictions, the liability of Processfeedback.org, its subsidiaries, affiliates, licensors, licensees,
                    service providers, employees, agents, officers, and directors will be limited to the greatest extent
                    permitted by law.
                </p>
                <p className='terms-paragraph'>
                    Client agrees to indemnify and hold Processfeedback.org, its subsidiaries, affiliates, licensors,
                    service providers, employees, agents, officers, directors, and contractors (the "Indemnified Parties")
                    harmless from any breach of the terms of this agreement by Client. Client agrees that the
                    Indemnified Parties will have no liability in connection with any such breach or unauthorized use of
                    Processfeedback.org or any information obtained from or through Processfeedback.org, and Client
                    agrees to indemnify any and all resulting loss, damages, judgments, awards, costs, expenses, and
                    attorneys' fees of the Indemnified Parties in connection therewith. Client will also indemnify and
                    hold the Indemnified Parties harmless from and against any claims brought by third parties arising
                    out of Client's use of Processfeedback.org and any information accessed from this website.
                </p>
                <h1 className='termsHeader'>2. Responsibility for use of website</h1>
                <p className='Terms-paragraph'>
                    You understand and agree that you are solely responsible for your actions and decisions to meet
                    other people whom you meet online by virtue of the services provided on processfeedback.org. You
                    understand that processfeedback.org and Website Owner do not perform psychological testing or
                    background checks on the individuals who may use the processfeedback.org services. You
                    understand and agree that you must take all reasonable precautions before meeting others through
                    the service provided by processfeedback.org, which includes, but is not limited to: exchanging email
                    first before giving out any personal information and meeting in a public place. You further
                    understand and agree that you remain liable for any data and information you enter into the
                    website or upload to website servers. You warrant that such data and information is not malicious
                    and will not cause harm or loss.
                </p>
                <h1 className='termsHeader'>3. Do not rely on Processfeedback.org</h1>
                <p className='Terms-paragraph'>
                    Opinions, advice, translations, statements, or other comments should not necessarily be relied upon
                    and are not to be construed as professional advice from processfeedback.org or Website Owner.
                    Processfeedback.org and Website Owner do not guarantee the accuracy or completeness of any of
                    the information provided and are not responsible for any loss resulting from your reliance on such
                    information.
                </p>
                <h1 className="termsHeader">4. Warning re: offensive information</h1>
                <p className='Terms-paragraph'>
                    It is possible that other processfeedback.org Clients will post or send obscene or offensive materials
                    on the site or to you via email. It is also possible that, by using your email address, other people
                    may, through other means outside the control of processfeedback.org, have access to personal
                    information about you. Processfeedback.org, Website Owner, its employees, agents, affiliates,
                    licensees, web hosting services, and any third-party tools or services utilized are not responsible for
                    these transmissions or for the release of such information by others about you.
                </p>
                <h1 className="termsHeader">5. Right to monitor</h1>
                <p className='Terms-paragraph'>
                    Processfeedback.org and Website Owner reserve the right, but are not obligated, to monitor
                    materials posted in any public area and shall have the right to remove any information deemed
                    offensive by our staff. Notwithstanding the foregoing, you remain solely responsible for your use of
                    any information contained on the site. You are responsible for any activities that occur while using
                    Processfeedback.org, whether through direct interaction or third-party authentication. If you
                    become aware of any unauthorized access to your account, data, or any other breach of security,
                    please contact Processfeedback.org immediately. It is your responsibility to ensure the security of
                    your data, account, and any associated information. Processfeedback.org is not responsible or liable
                    for any loss or damage arising from your failure to comply with the provisions of this Agreement.
                </p>
                <h1 className="termsHeader">6. Confidentiality</h1>
                <p className='Terms-paragraph'>
                    It is agreed that all personal information given to Processfeedback.org or Website Owner will be
                    kept confidential by Processfeedback.org and Website Owner, with the following exceptions: 1) you
                    actively choose to post your personal information for others to see; (2) you send a message to
                    another client, which may disclose your personal information to that client; (3) users share or
                    exchange personal information with each other through the site; or (4) you have harassed another
                    person via any service provided by Processfeedback.org, in which case the confidentiality clause
                    contained in this Agreement is rendered null and void.
                </p>
                <p className='Terms-paragraph'>
                    Any access credentials, including unique URLs, generated for this website are for the Client's
                    individual use only. You will be responsible for the security of your access credentials. From time to
                    time, Processfeedback.org may require that you take measures to enhance the security of your
                    access credentials. You are prohibited from using any services or facilities provided in connection
                    with this website to compromise its security or tamper with any of its systems, resources, and/or
                    accounts. The use or distribution of tools designed for compromising security (e.g., password
                    crackers, rootkits, Trojan horses, or network probing tools) is strictly prohibited. If you become
                    involved in any violation of system security, Processfeedback.org reserves the right to take
                    necessary actions, including releasing your details to system administrators at other websites
                    and/or the authorities, to assist in resolving security incidents. Processfeedback.org reserves the
                    right to investigate suspected violations of this Agreement and to fully cooperate with any law
                    enforcement authorities or court order requesting or directing Processfeedback.org to disclose the
                    identity of anyone posting any data, email messages, or publishing or otherwise making available
                    any materials that are believed to violate this Agreement.
                </p>
                <p className='Terms-paragraph'>
                    It is our policy to release a Client's personal identifying information and any other information when
                    we reasonably believe such disclosure is appropriate to comply with applicable law, to enforce any
                    of our contracts or agreements, to protect the rights, property or safety of our users and customers,
                    in response to a governmental authority request or legal process, or for purposes of fraud
                    protection. By accepting this Agreement, you waive all rights and agree to hold processfeedback.org
                    and Website Owner harmless from any claims resulting from any action taken by
                    processfeedback.org during or as a result of its investigations and/or from any actions taken as a
                    consequence of investigations by either processfeedback.org or law enforcement authorities.
                </p>
                <h1 className='termsHeader'>7. Ownership, copyleft, and licensing</h1>
                <p className='Terms-paragraph'>
                    Processfeedback.org and the Website Owner retain ownership of the platform, its name, branding,
                    and original contributions (including code, design, and documentation). However, consistent with
                    our copyleft philosophy, we encourage open use, adaptation, and remixing of our content-provided
                    that: a) you give proper attribution to Process Feedback, b) you do not imply Process Feedback
                    endorses your use, and c) you share your remixed or adapted versions under similar open terms.
                </p>

                <p className='Terms-paragraph'>
                    Unless otherwise noted, all original content created by Process Feedback is available under a
                    Creative Commons Attribution-ShareAlike 4.0 International License (CC BY-SA 4.0) or an equivalent
                    license. This allows you to use and remix our content for your own purposes, even commercially, as
                    long as you credit us and allow others to do the same with your version.
                </p>
                <p className='Terms-paragraph'>
                    You may not copy or reproduce the Process Feedback brand name, logo, or interface design in ways
                    that could mislead others into thinking your service is affiliated with or endorsed by us.
                </p>
                <p className='Terms-paragraph'>
                    By posting or submitting any content to Processfeedback.org, you represent that you have the right
                    to share it and grant us permission to display, analyze, and use it to improve the platform and
                    research its impact. You retain all rights to your content.
                </p>
                <h1 className='termsHeader'>8. No warranties</h1>
                <p className='Terms-paragraph'>
                    The use of Processfeedback.org and any service it provides is at your sole risk. The website services
                    are provided on an "as is" and "as available" basis. Processfeedback.org expressly disclaims all
                    warranties of any kind, whether express or implied, including, but not limited to, the implied
                    warranties of merchantability, fitness for a particular purpose, and non-infringement.
                    Processfeedback.org makes no warranty that (1) the services will meet your requirements, (2) the
                    services will be uninterrupted, timely, secure, or error-free, (3) the results of using the services will
                    be accurate or reliable, (4) the quality of services will meet your expectations, or (5) that any errors
                    in the software utilized by the services will be corrected.
                </p>
                <h1 className='termsHeader'>9. Obtaining permission to view someone else's process</h1>
                <p className='Terms-paragraph'>
                    Users are responsible for ensuring they have the necessary permissions from the document owner
                    before viewing a process report or process data. Processfeedback.org and the Website Owner will
                    not be liable for any unauthorized access or use. Users must ensure compliance with all applicable
                    laws and regulations regarding data privacy and permissions.
                </p>
                <h1 className='termsHeader'>10. Jurisdiction</h1>
                <p className='Terms-paragraph'>
                    Any dispute, controversy, or claim arising out of or related in any manner to this Agreement which
                    cannot be amicably resolved by the parties shall be solely and finally settled by arbitration
                    administered by the American Arbitration Association in accordance with its commercial arbitration
                    rules. Judgment on the award rendered by the arbitrator(s) may be entered in any court having
                    jurisdiction thereof. The arbitration shall take place before a panel of one (1) arbitrator sitting in
                    Missouri, County of St. Louis. The language of the arbitration shall be English. The arbitrators will be
                    bound to adjudicate all disputes in accordance with the laws of the State of Missouri. The decision of
                    the arbitrators shall be in writing with written findings of fact and shall be final and binding on the
                    parties. The arbitrator shall be empowered to award money damages, subject to the limitations set
                    forth in Section 1 of this Agreement, but shall not be empowered to award direct, indirect,
                    incidental, special, or consequential damages or specific performance. Each party shall bear its own
                    costs relating to the arbitration proceedings irrespective of its outcome. This section provides the
                    sole recourse for the settlement of any disputes arising out of, in connection with, or related to this
                    Agreement. Notwithstanding the foregoing, any action seeking injunctive relief shall be submitted
                    to the courts and shall not be subject to this provision.
                </p>
                <h1 className='termsHeader'>11. Severability</h1>
                <p className='Terms-paragraph'>
                    In the event that any provision of this Agreement is found to be invalid, illegal, or unenforceable, the
                    validity, legality, and enforceability of the remaining provisions shall not in any way be affected or
                    impaired. The parties hereby agree that any such invalid, illegal, or unenforceable provision shall be
                    severed from this Agreement, and the remainder of the Agreement shall continue in full force and
                    effect.
                </p>
                <h1 className='termsHeader'>12. Certification</h1>
                <p className='Terms-paragraph'>
                    By accessing and using Processfeedback.org, you certify that you are at least 13 years of age. If you
                    are under 13 years old, you are not permitted to access or use our services. If you are under 18
                    years old, you agree to use Processfeedback.org under the direct supervision of your parent or legal
                    guardian, who becomes the Client and assumes responsibility for your use of Processfeedback.org.
                    Users who are 18 years of age or older can use Processfeedback.org independently. Process
                    Feedback does not require users to create accounts, and no personal information is made public by
                    default. In using the site, you understand and agree that limited, non-identifiable information
                    related to your activity (such as usage statistics) may be visible to educators or others authorized by
                    your institution. You may choose to share or publish your own reports or outputs generated
                    by the platform at your discretion.
                </p>
                <h1 className='termsHeader'>13. Communication and support services</h1>
                <p className='Terms-paragraph'>
                    Processfeedback.org may utilize a chat feature provided by a third-party service that allows users to
                    request support and assistance from our team. By utilizing the chat feature, you agree to adhere to
                    the terms outlined in this agreement. While we strive to make the chat feature available to assist
                    you during our business hours, please note that its availability and functionality may be subject to
                    the terms and conditions of the third-party service provider. Processfeedback.org is not responsible
                    for any interruptions, technical issues, or other problems related to the chat feature provided by the
                    third party. Additionally, during chat interactions, please be aware that information shared may be
                    collected and stored by both Processfeedback.org and the third-party chat provider for the purpose
                    of providing support and improving our services. We are committed to protecting your privacy and
                    will handle your information in accordance with our privacy policy.
                </p>
                <h1 className='termsHeader'>14. Downloading content in bulk</h1>
                <p className='Terms-paragraph'>
                    Using any software other than a visual or text-based web browser to download content from
                    Processfeedback.org or using automated processes to download content in bulk from
                    Processfeedback.org is strictly prohibited.
                </p>
                <h1 className='termsHeader'>15. Automated access</h1>
                <p className='Terms-paragraph'>
                    The use of artificial intelligence (AI) agents designed or intended to simulate human user behavior
                    (such as unauthorized load testing, automated account creation, or generating false usage metrics)
                    on Processfeedback.org is strictly prohibited. This includes, but is not limited to, agents used for the
                    purpose of bulk content extraction, unauthorized monitoring, or circumventing usage limitations.
                </p>
                <h1 className='termsHeader'>16. Entire agreement</h1>
                <p className='Terms-paragraph'>
                    This Agreement constitutes the entire agreement among the parties relating to the subject matter
                    hereof, and supersedes all prior or contemporaneous communications and proposals, whether
                    electronic, oral, or written, between you and processfeedback.org and Website Owner with respect
                    to processfeedback.org and any service it provides. Notwithstanding the foregoing, you may also be
                    subject to additional terms and conditions, posted policies, guidelines, or rules that may apply when
                    you use processfeedback.org or any of its services.
                </p>
                <h1 className='termsHeader'>17. Waiver</h1>
                <p className='Terms-paragraph'>
                    The failure of Processfeedback.org or Website Owner to exercise or enforce any right or provision of
                    this Agreement shall not operate as a waiver of such right or provision. Any waiver of this
                    Agreement by Website or Website Owner must be in writing and signed by an authorized
                    representative of the Website Owner.
                </p>
                <h1 className='termsHeader'>18. Description of Services</h1>
                <p className='Terms-paragraph'>
                    Process Feedback provides multiple tools, including browser extensions, web-based editors, and
                    code-execution environments. Users are responsible for ensuring they have the appropriate rights
                    to analyze, submit, or process any text or code they choose to use within these tools. Process
                    Feedback only accesses or stores content when the user elects to save, export, or share information
                    through the platform. For full details, please refer to our <a href='./PrivacyPolicy.jsx' target='_blank' rel='noreferrer' className='terms-link'>Privacy Policy</a>.
                </p>
                <h1 className='termsHeader'>19. Privacy and data protection</h1>
                <p className='Terms-paragraph'>
                    We respect your privacy. Your personally identifiable information-such as your name and email
                    address-remains confidential and is not displayed publicly by Process Feedback. Process Feedback
                    does not sell or share your personal information (such as your name or email) with third parties,
                    except as required by law or to deliver core services (like hosting or analytics) that help us operate
                    the platform. For full details, please see our <a href='./PrivacyPolicy.jsx' target='_blank' rel='noreferrer' className='terms-link'>Privacy Policy</a>.
                </p>
            </div>
            <div className="terms-buttons">
                <button className="btn-term-primary">
                    <a href="./PrivacyPolicy.jsx" className="btn-link-terms" target="_blank" rel="noreferrer">
                        Read: Privacy Policy </a>
                </button>
                <button className="btn-term-primary">
                    <a href="https://processfeedback.org/docs/institutions/" className="btn-link-terms" target="_blank" rel="noreferrer">
                        Read: Docs and Institutions
                    </a>
                </button>
            </div>

        </div>
    )
}

export default TermsOfService;