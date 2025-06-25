
export default function Services() {
    return (
        <>
            <section id="services" data-scroll-data="2" className="section services-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 text-center">
                            <div className="section-title">
                                <h2><span>Meine Leistungen</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-lg-4 my-3" key="ser0">
                            <div className="feature-box-1">
                                <div className="icon hexagon">
                                    <i className="fa-solid fa-person-pregnant"></i>
                                </div>
                                <div className="feature-content">
                                    <h5>Schwangerschaft</h5>
                                    <p>
                                        Ich begleite dich einfühlsam und kompetent durch die besondere
                                        Zeit der Schwangerschaft. Auf Wunsch übernehme ich alle Vorsorgeuntersuchungen
                                        nach den Mutterschaftsrichtlinien – in Abstimmung mit deiner Gynäkolog:in.
                                    </p>
                                    <p>
                                        Bei Schwangerschaftsbeschwerden bin ich für dich da und unterstütze dich
                                        mit fachlichem Rat. Außerdem berate ich dich zu Themen wie Ernährung,
                                        Sexualität, körperlichen Veränderungen und zur Vorbereitung auf die Geburt und 
                                        das Wochenbett.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 my-3" key="ser1">
                            <div className="feature-box-1">
                                <div className="icon hexagon">
                                    <i className="fa-solid fa-person-breastfeeding"></i>
                                </div>
                                <div className="feature-content">
                                    <h5>Wochenbett</h5>
                                    <p>
                                        Als Hebamme biete ich dir eine umfassende Wochenbettbetreuung und kompetente
                                        Nachsorge in der sensiblen Zeit nach der Geburt. Dabei stehen die körperliche Untersuchung 
                                        von Mutter und Kind sowie die individuelle Beratung zum Stillen
                                        und zu allen Fragen rund ums Neugeborene im Mittelpunkt. 
                                    </p>
                                    <p>
                                        In den ersten Tagen komme ich täglich vorbei, danach in Absprache mit Dir alle 2-7 Tage. 
                                        Diese Betreuung wird von deiner Krankenkasse bis zum Ende des dritten Lebensmonats deines 
                                        Babys übernommen.
                                    </p>
                                    <p>
                                        Zusätzlich stehe ich dir bei Themen wie Schlaf, Bindung und Ernährung unterstützend zur Seite.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 my-3" key="ser2">
                            <div className="feature-box-1">
                                <div className="icon hexagon">
                                    <i className="fa-solid fa-tape"></i>
                                </div>
                                <div className="feature-content">
                                    <h5>Kinesiotaping</h5>
                                    <p>
                                        Kinesiotaping ist eine medikamentenfreie Methode, die bei Rückenschmerzen, 
                                        Ischias, Nackenverspannungen und Beckenschmerzen hilft. 
                                        In der Schwangerschaft kann Kinesiotatping Symphysenschmerzen lindern, den Bauch unterstützen, den Lymphfluss fördern
                                        und Übelkeit mildern. Im Wochenbett kann die Rückbildung unterstützt,
                                        der Milchfluss verbessert, der Wochenfluss gefördert und Brustspannen
                                        gelindert werden.
                                    </p>
                                    <p>
                                        <em>Kinesiotaping wird leider nicht von den Krankenkassen übernommen, sondern Dir
                                        privat in Rechnung gestellt. Die Preise liegen je nach Anwendungsstelle und
                                        Materialverbrauch zwischen 10€- 25€.</em>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
