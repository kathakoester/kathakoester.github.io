import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import 'swiper/swiper-bundle.css';

export default function Testimonial() {
    const testimonials = [
        {
            id: 'tes0',
            img: 'img/team-1.jpg',
            auther_name: 'Nancy Bayers',
            position: 'Founder & CEO at Pxdraft',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
        {
            id: 'tes1',
            img: 'img/team-1.jpg',
            auther_name: 'Nancy Bayers',
            position: 'Founder & CEO at Pxdraft',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
        {
            id: 'tes2',
            img: 'img/team-1.jpg',
            auther_name: 'Nancy Bayers',
            position: 'Founder & CEO at Pxdraft',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
    ];

    return (
        <section className="section testimonials-section dark-bg-1">
            <div className="text-placeholder">
                <h5>testimonials</h5>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 text-center">
                        <div className="section-title">
                            <h2><span>Testimonials</span></h2>
                        </div>
                    </div>
                </div>
                <Swiper 
                    spaceBetween={30} 
                    slidesPerView={2} 
                    loop={true}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        992: {
                            slidesPerView: 2,
                        },
                    }}
                >
                    {testimonials.map((val) => (
                        <SwiperSlide key={val.id}>
                            <div className="testimonial-col">
                                <div className="d-flex">
                                    <div className="img">
                                        <img src={val.img} alt="" />
                                    </div>
                                    <div className="col">
                                        <p>{val.description}</p>
                                        <div className="tc-info">
                                            <h6>{val.auther_name}</h6>
                                            <span>{val.position}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
