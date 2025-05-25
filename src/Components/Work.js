import $ from 'jquery';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import 'magnific-popup/dist/jquery.magnific-popup.js';
import '../../src/assets/plugin/magnific/magnific-popup.min.css';

export default function Work() {
    const work = [
        { 'id': 'work0', 'img': 'img/portfolio-02.jpg', 'title': 'Mombo Mockup', 'description': 'Lorem ipsum dolor sit amet.', 'tag': 'Ui Design' },
        { 'id': 'work1', 'img': 'img/portfolio-03.jpg', 'title': 'Mombo Mockup', 'description': 'Lorem ipsum dolor sit amet.', 'tag': 'Ui Design' },
        { 'id': 'work2', 'img': 'img/portfolio-01.jpg', 'title': 'Mombo Mockup', 'description': 'Lorem ipsum dolor sit amet.', 'tag': 'Ui Design' },
        { 'id': 'work3', 'img': 'img/portfolio-04.jpg', 'title': 'Mombo Mockup', 'description': 'Lorem ipsum dolor sit amet.', 'tag': 'Ui Design' },
    ];

    const lightboxGalleryRef = useRef();
    const popupRef = useRef();
    
    useEffect(() => {
        const elementExists = (selector) => !!document.querySelector(selector);

        if (elementExists('.lightbox-gallery') || elementExists('.popup-youtube, .popup-vimeo, .popup-gmaps')) {
            if (elementExists('.lightbox-gallery')) {
                $(lightboxGalleryRef.current).magnificPopup({
                    delegate: '.gallery-link',
                    type: 'image',
                    tLoading: 'Loading image #%curr%...',
                    mainClass: 'mfp-fade',
                    fixedContentPos: true,
                    closeBtnInside: false,
                    gallery: {
                        enabled: true,
                        navigateByImgClick: true,
                        preload: [0, 1]
                    }
                });
            }

            if (elementExists('.popup-youtube, .popup-vimeo, .popup-gmaps')) {
                $(popupRef.current).magnificPopup({
                    disableOn: 700,
                    type: 'iframe',
                    mainClass: 'mfp-fade',
                    removalDelay: 160,
                    preloader: false,
                    fixedContentPos: false
                });
            }
        }
    });

    return (
        <>
            <section id="work" data-scroll-data="3" className="section portfolio-section">
                <div className="text-placeholder">
                    <h5>portfolio</h5>
                </div>
                <div className="container">
                    <div className="row justify-content-center mb-3">
                        <div className="col-lg-6 text-center">
                            <div className="section-title">
                                <h2><span>My Portfolio</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-3 lightbox-gallery" ref={lightboxGalleryRef}>
                        {
                            work.map((val) => {
                                return (
                                    <div className="col-lg-6" key={val.id}>
                                        <div className="portfolio-box row g-0">
                                            <div className="portfolio-img col-sm-6 col-lg-7" ref={popupRef}>
                                                <Link className="p-icon gallery-link" to={val.img}>
                                                    <i className="bi bi-plus"></i>
                                                </Link>
                                                <img src={val.img} alt="portfolio" />
                                            </div>
                                            <div className="portfolio-info col-sm-6 col-lg-5">
                                                <h2>{val.title}</h2>
                                                <p>{val.description}</p>
                                                <div className="nav">
                                                    <span>{val.tag}</span>
                                                </div>
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