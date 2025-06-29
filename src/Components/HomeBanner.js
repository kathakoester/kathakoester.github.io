import { Link } from 'react-router-dom';
//import ReactTypingEffect from 'react-typing-effect';

/*--------------------
* Banner Section
----------------------*/

export default function HomeBanner() {
    const social_media = [

    ]

    return (
        <>
            <section id="home" data-scroll-data="0" className="home-banner">
                <div className="social-share nav d-none d-lg-flex">
                    {
                        social_media.map((val) => {
                            return <Link key={val.id} id={val.id} to={val.scroll_link}>{val.name}</Link>
                        })
                    }
                </div>
                <div className="container">
                    <div className="row min-vh-100 align-items-center">
                        <div className="col-lg-6">
                            <div className="typo-box">
                                <h6>Hallo! Ich bin</h6>
                                <h1 className="font-alt">Katharina Köster</h1>
                                <h2>Hebamme</h2>
                                <p>
                                    Empathisch begleiten, individuell stärken, evidenzbasiert handeln – das ist für mich moderne Hebammenkunst.
                                    Für eine persönliche, sichere und bestärkende Betreuung.
                                </p>
                                <div className="btn-bar">
                                    <a class="px-btn px-btn-theme" href="#kontakt">Kontakt</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="home-avatar-box">
                                <div className="home-avatar-in">
                                    <img src="img/katharina-home.webp" alt="Katharina Köster" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-ani dark-text-1">
                    <svg xmlns="http://www.w3.org/2000/svg" id="animated-svg" viewBox="0 0 1000 40" preserveAspectRatio="none">
                        <path fill="var(--px-gray-1)" d="">
                            <animate attributeName="d" begin="0s" dur="10s" repeatCount="indefinite" values="M0,0 C200,7.11236625e-15 200,40 400,40 C600,40 800,0 1000,0 L1000,50 L0,50 L0,0 Z;           M0,40 C200,40 400,0 600,0 C800,0 800,40 1000,40 L1000,50 L0,50 L0,40 Z;           M0,30 C200,30 200,0 400,0 C600,0 800,40 1000,40 L1000,50 L0,50 L0,30 Z;           M0,0 C200,7.11236625e-15 200,40 400,40 C600,40 800,0 1000,0 L1000,50 L0,50 L0,0 Z;"/>
                        </path>
                    </svg>
                </div>
            </section>
        </>
    )
}
