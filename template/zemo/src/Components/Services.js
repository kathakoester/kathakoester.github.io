
export default function Services() {
    const services = [
        {'id': 'ser0', 'icon': 'bi bi-laptop', 'title': 'Unique design', 'description': 'I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.'},
        {'id': 'ser1', 'icon': 'bi bi-layout-text-window', 'title': 'Different Layout', 'description': 'I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.'},
        {'id': 'ser2', 'icon': 'bi bi-layers', 'title': 'Make it Simple', 'description': 'I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.'},
        {'id': 'ser3', 'icon': 'bi bi-phone', 'title': 'Responsiveness', 'description': 'I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.'},
        {'id': 'ser4', 'icon': 'bi bi-bug', 'title': 'Testing for Perfection', 'description': 'I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.'},
        {'id': 'ser5', 'icon': 'bi bi-command', 'title': 'Advanced Options', 'description': 'I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.'},
    ];

    return (
        <>
            <section id="services" data-scroll-data="2" className="section services-section">
                <div className="text-placeholder">
                    <h5>Services</h5>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 text-center">
                            <div className="section-title">
                                <h2><span>My Services</span></h2>
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