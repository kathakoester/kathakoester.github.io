import Header from "../Header";
import HomeBanner from "../HomeBanner";
import About from '../About';
import Services from '../Services';
import Resume from '../Resume';
import Work from '../Work';
import Testimonial from '../Testimonial';
import Blog from '../Blog';
import ContactUs from '../ContactUs';
import Footer from '../Footer';

/*--------------------
* Building Zemo
----------------------*/

export default function Zemo() {
    // $('body')[0].classList.add('dark-bg');
    return (
    <>
            <Header />
            <main>
                <HomeBanner />
                <About />
                <Services />
                <Resume />
                <Work />
                <Testimonial />
                <Blog />
                <ContactUs />
            </main>
            <Footer />
        </>
    )
}
