
export default function Services() {
    const services = [
        {'id': 'ser0', 'icon': 'fa-solid fa-person-pregnant', 'title': 'Schwangerschaft', 'description': 'Ich begleite dich einfühlsam und fachkundig durch die aufregende Zeit der Schwangerschaft: Durchführung aller nach Mutterschaftsrichtlinien vorgesehenen Vorsorgeuntersuchungen auf Wunsch Hilfe bei Schwangerschaftsbeschwerden Beratung zu verschiedenen Themen, z. B. Ernährung, Sexualität oder Geburtsvorbereitung Gemeinsam sorgen wir dafür, dass du dich sicher und gut unterstützt fühlst.'},
        {'id': 'ser1', 'icon': 'fa-solid fa-person-breastfeeding', 'title': 'Wochenbett', 'description': 'I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.'},
        {'id': 'ser2', 'icon': 'fa-solid fa-tape', 'title': 'Kinesiotaping', 'description': 'I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.'}
    ];

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
                        {
                            services.map((val) => {
                                return (
                                    <div className="col-sm-6 col-lg-4 my-3" key={val.id}>
                                        <div className="feature-box-1">
                                            <div className="icon hexagon">
                                                <i className={val.icon}></i>
                                            </div>
                                            <div className="feature-content">
                                                <h5>{val.title}</h5>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
}
