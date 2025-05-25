//import { useTheme } from "./ThemeProvider";

export default function About() {
    //const { theme } = useTheme();

    const design_tools = [
        {id: 'design0', name: 'Adobe Xd'},
        {id: 'design1', name: 'Illustrator'},
        {id: 'design2', name: 'Photoshop'},
        {id: 'design3', name: 'Figma'},
        {id: 'design4', name: 'Sketch'},
    ]

    const technologies = [
        {id: 'tech0', name: 'Html'},
        {id: 'tech1', name: 'Css'},
        {id: 'tech2', name: 'Scss'},
        {id: 'tech3', name: 'Less'},
        {id: 'tech4', name: 'jQuery'},
        {id: 'tech5', name: 'php'},
        {id: 'tech6', name: 'React'},
        {id: 'tech7', name: 'Javascript'},
        {id: 'tech8', name: 'Graphic Design'},
        {id: 'tech9', name: 'Art Design'},
        {id: 'tech10', name: 'UI/UX Design'},
    ]

    const process = [
        {id: 'pro0', name: 'Research', tag: '#01'},
        {id: 'pro1', name: 'Design', tag: '#02'},
        {id: 'pro2', name: 'Coding', tag: '#03'},
        {id: 'pro3', name: 'Launch', tag: '#04'},
    ]

    return (
        <>
            <section id="about" data-scroll-data="1" className={`section about-section gray-bg pb-0`}>
                <div className="text-placeholder">
                    <h5>About</h5>
                </div>
                <div className="container">
                    <div className="row align-items-center flex-row-reverse">
                        <div className="col-lg-7 ps-xl-5">
                            <div className="about-row about-text">
                                <div className="sm-title">
                                    <h3>About Me</h3>
                                </div>
                                <h6>Hello, my name is <span>Zemo</span> and i am <span>UX/UI designer</span> and <span>front-end developer</span></h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                            </div>
                            <div className="about-row tag-text">
                                <div className="sm-title">
                                    <h3>Design Tools</h3>
                                </div>
                                <div className="nav">
                                    {
                                        design_tools.map((val) => {
                                            return <span key={val.id}>{val.name}</span>
                                        })
                                    }
                                </div>
                            </div>
                            <div className="about-row tag-text">
                                <div className="sm-title">
                                    <h3>Technologies and Skills</h3>
                                </div>
                                <div className="nav">
                                    {
                                        technologies.map((val) => {
                                            return <span key={val.id}>{val.name}</span>
                                        })
                                    }
                                </div>
                            </div>
                            <div className="about-row progress-text">
                                <div className="sm-title">
                                    <h3>Work Process</h3>
                                </div>
                                <div className="row g-3">
                                    {
                                        process.map((val) => {
                                            return (
                                                <div className="col-6 col-sm-3" key={val.id}>
                                                    <div className="d-flex align-items-center">
                                                        <span>{val.tag}</span>
                                                        <label className="col ps-2">{val.name}</label>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="about-left">
                                <img src="img/about-me.png" alt="about" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
