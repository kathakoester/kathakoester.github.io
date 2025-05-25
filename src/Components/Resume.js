
export default function Resume() {
    const resume = [
        {'id': 'rsm0', 'start_date': 'Sep, 2016', 'end_date': 'May, 2017', 'title': 'Junior Designer', 'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'city': '- Las Vegas, USA'},
        {'id': 'rsm1', 'start_date': 'Sep, 2016', 'end_date': 'May, 2017', 'title': 'Systems Analyst / Web Developer', 'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'city': '- Las Vegas, USA'},
        {'id': 'rsm2', 'start_date': 'Sep, 2016', 'end_date': 'May, 2017', 'title': 'Full Stack Developer', 'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'city': '- Las Vegas, USA'},
        {'id': 'rsm3', 'start_date': 'Sep, 2016', 'end_date': 'May, 2017', 'title': 'Full Stack Developer', 'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'city': '- Las Vegas, USA'},
    ];

    return (
        <>
            <section className="section section-resume dark-bg-1">
                <div className="text-placeholder">
                    <h5>Experience</h5>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 text-center">
                            <div className="section-title">
                                <h2><span>My Experience</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center pt-3">
                        <div className="col-lg-10">
                            <div className="resume-box">
                                <ul>
                                    {
                                        resume.map((val) => {
                                            return (
                                                <li className="row g-0" key={val.id}>
                                                    <div className="col-sm-4 col-xl-3">
                                                        <h6>{val.start_date} – {val.end_date}</h6>
                                                    </div>
                                                    <div className="col-sm-8 col-xl-9 ps-xl-4">
                                                        <h5>{val.title}</h5>
                                                        <p>{val.description}</p>
                                                        <span>{val.city}</span>
                                                    </div>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}