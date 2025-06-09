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
            formErrors.name = 'Bitte gib Deinen Namen an';
            valid = false;
        }

        if (!email) {
            formErrors.email = 'Bitte gib Deine Emailadresse an';
            valid = false;
        } else if (!email.match(mailformat)) {
            formErrors.email = 'Bitte gib eine valide Emailadresse an';
            valid = false;
        }

        if (!subject) {
            formErrors.subject = 'Bitte gib einen kurzen Betreff an';
            valid = false;
        }

        if (!message) {
            formErrors.message = 'Bitte füge eine Nachricht ein';
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
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 text-center">
                            <div className="section-title">
                                <h2><span>Kontakt</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 my-3">
                            <div className="contact-info">
                                <div className="contact-name">
                                    <div className="sm-title">
                                        <h3>Betreuungsumfeld</h3>
                                    </div>
                                    <p>
                                        Stadtteile Winterhude, Barmbek & Uhlenhorst in
                                        Hamburg
                                    </p>
                                </div>
                                <div className="contact-name">
                                    <div className="sm-title">
                                        <h3>Email</h3>
                                    </div>
                                    <p><a href="mailto:hebamme@katharinakoester.de">hebamme@katharinakoester.de</a></p>
                                </div>
                                <div className="contact-name">
                                    <div className="sm-title">
                                        <h3>Telefon</h3>
                                    </div>
                                    <p><a href="tel:+491782446789">+49 178 2446789</a></p>
                                </div>
                                <div className="contact-logo">
                                    <img src="img/katharina-logo.png" alt="Logo Hebamme Katharina Köster" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 my-3">
                            <div className="p-3 map-box rounded">
                                <div className="ratio ratio-16x9 grayscale">
                                    <img src="img/katharina-radius.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
