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
                <div className="container">
                    <div className="row align-items-center flex-row-reverse">
                        <div className="col-lg-7 ps-xl-5">
                            <div className="about-row about-text">
                                <div className="sm-title">
                                    <h3>Über Mich</h3>
                                </div>
                                <p>
                                    Hallo, ich bin Katharina 1979 geboren, Mutter von 2 Kindern und seit März 2025 Hebamme.
                                    Ich betreue freiberuflich Schwangere und Wöchnerinnen in Winterhude und Barmbek.
                                    Außerdem arbeite ich als Beleghebamme im Krankenhaus Winsen im Kreißsaal.
                                </p>
                                <p>
                                    Vor meinem Hebammenstudium habe ich zwölf Jahre lang medizinische Gebrauchsanweisungen
                                    geschrieben und dabei viel mit Rettungsdienst und medizinischem Fachpersonal zusammen
                                    gearbeitet. Hier entdeckte ich mein wachsendes Interesse an medizinischen Berufen.
                                </p>
                                <p>
                                    Bei der Geburt meiner eigenen Kinder (2012 und 2013) war ich tief beeindruckt von der
                                    Rolle der Hebamme. Die Verbindung aus medizinischer Fachkompetenz und einfühlsamer
                                    Begleitung in einer so intensiven Lebensphase hat mich seitdem nicht mehr losgelassen.
                                    Und so habe ich mich entschieden, beruflich noch einmal ganz neu zu starten und Hebamme
                                    zu werden.
                                </p>
                                <p>
                                    Ich bin jeden Tag dankbar, diese Entscheidung getroffen zu haben und diesen Beruf
                                    ausüben zu dürfen.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="about-left">
                                <img src="img/katharina-uebermich.png" alt="about" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
