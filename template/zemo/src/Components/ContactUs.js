//import { useTheme } from "./ThemeProvider";
import React, { useState } from 'react';

export default function ContactUs() {
    //const { theme } = useTheme();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [setErrors] = useState();
    const [success] = useState(false);

    const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    const validate = () => {
        let formErrors = {};
        let valid = true;

        if (!name) {
            formErrors.name = 'Your Name is Required';
            valid = false;
        }

        if (!email) {
            formErrors.email = 'Please Enter Email';
            valid = false;
        } else if (!email.match(mailformat)) {
            formErrors.email = 'Please Enter Valid Email';
            valid = false;
        }

        if (!subject) {
            formErrors.subject = 'Subject is Required';
            valid = false;
        }

        if (!message) {
            formErrors.message = 'Please Describe your thoughts';
            valid = false;
        }

        setErrors(formErrors);
        return valid;
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) {
            return;
        }

        // const data = {
        //     name,
        //     email,
        //     subject,
        //     message,
        // };
    };

    return (
        <>
            <section id="contactus" data-scroll-data="5" className="section dark-bg-1 contactus-section">
                <div className="text-placeholder">
                    <h5>Contact</h5>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 text-center">
                            <div className="section-title">
                                <h2><span>Contact Me</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 my-3">
                            <div className="contact-info">
                                <div className="contact-name">
                                    <div className="sm-title">
                                        <h3>Email</h3>
                                    </div>
                                    <p>info@domainname.com<br />support@domain.com</p>
                                </div>
                                <div className="contact-name">
                                    <div className="sm-title">
                                        <h3>Visit My Studio</h3>
                                    </div>
                                    <p>Warnwe Park Streetperrine, <br />FL 33157 New York City</p>
                                </div>
                                <div className="contact-name">
                                    <div className="sm-title">
                                        <h3>Phone</h3>
                                    </div>
                                    <p>+01 123 654 8096</p>
                                </div>
                                <div className="social-share nav">
                                    <a href="/">
                                        <i className="bi bi-facebook"></i>
                                    </a>
                                    <a href="/">
                                        <i className="bi bi-twitter"></i>
                                    </a>
                                    <a href="/">
                                        <i className="bi bi-instagram"></i>
                                    </a>
                                    <a href="/">
                                        <i className="bi bi-linkedin"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 my-3">
                            <div className="contact-form">
                                <div className="sm-title">
                                    <h3>Get In Touch</h3>
                                </div>
                                <form id="contact-form" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input name="Name" id="name" placeholder="Name *" className="form-control" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input name="Email" id="email" placeholder="Email *" className="form-control" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <input name="Subject" id="subject" placeholder="Subject *" className="form-control" type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <textarea name="message" id="message" placeholder="Your message *" rows="3" className="form-control" value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="send">
                                                <button className="px-btn px-btn-theme" type="submit" value="Send"><span>Contact Us</span></button>
                                            </div>
                                            {success && <span id="suce_message" className="text-success d-none">Message Sent Successfully</span>}
                                            {!success && <span id="err_message" className="text-danger d-none">Message Sending Failed</span>}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-12 mt-4">
                            <div className="p-3 map-box rounded">
                                <div className="ratio ratio-21x9 grayscale">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3151.840107317064!2d144.955925!3d-37.817214!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1520156366883" title="map" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}