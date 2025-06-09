export default function ContactUs() {

    return (
        <>
            <a id="kontakt">&nbsp;</a>
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
                                        <h3>Betreuungsgebiet</h3>
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
                                <div className="contact-name">
                                    <div className="sm-title">
                                        <h3>Vertretung</h3>
                                    </div>
                                    <p><a href="https://www.carolinheller.de/" target="_blank">Hebamme Carolin Heller</a></p>
                                </div>
                                <div className="contact-logo">
                                    <img src="img/katharina-logo.png" alt="Logo Hebamme Katharina Köster" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 my-3">
                            <div className="p-3 map-box rounded betreuungsgebiet">
                                <div className="ratio ratio-16x9 grayscale">
                                    <img alt="Betreuungsgebiet" src="img/katharina-radius.webp" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
