import React from 'react';
import './Testimonials.css';
import AVATER1 from '../../images/assets/avatar1.jpg'
import AVATER2 from '../../images/assets/avatar2.jpg'
import AVATER3 from '../../images/assets/avatar3.jpg'
import AVATER4 from '../../images/assets/avatar4.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

const Testimonials = () => {
    const data = [
        {
            avtart: AVATER1,
            name: "Tina Snow",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Veniam quam optio possimus corrupti molestiae dicta quae, nam, cumque maiores natus voluptatibus ut, porro doloremque libero accusamus ipsa.Placeat possimus accusamus neque et dolore eos minima vero voluptatem deleniti laudantium excepturi facilis eius itaque error, consequatur amet exercitationem necessitatibus sit quas."
        },
        {
            avtart: AVATER2,
            name: "Tina Snow",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Veniam quam optio possimus corrupti molestiae dicta quae, nam, cumque maiores natus voluptatibus ut, porro doloremque libero accusamus ipsa.Placeat possimus accusamus neque et dolore eos minima vero voluptatem deleniti laudantium excepturi facilis eius itaque error, consequatur amet exercitationem necessitatibus sit quas."
        },
        {
            avtart: AVATER3,
            name: "Tina Snow",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Veniam quam optio possimus corrupti molestiae dicta quae, nam, cumque maiores natus voluptatibus ut, porro doloremque libero accusamus ipsa.Placeat possimus accusamus neque et dolore eos minima vero voluptatem deleniti laudantium excepturi facilis eius itaque error, consequatur amet exercitationem necessitatibus sit quas."
        },
        {
            avtart: AVATER4,
            name: "Tina Snow",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Veniam quam optio possimus corrupti molestiae dicta quae, nam, cumque maiores natus voluptatibus ut, porro doloremque libero accusamus ipsa.Placeat possimus accusamus neque et dolore eos minima vero voluptatem deleniti laudantium excepturi facilis eius itaque error, consequatur amet exercitationem necessitatibus sit quas."
        }
    ]




    return (
        <section id='testimonials' className='section'>
            <h2>Review from client</h2>
            <h5>Testimonials</h5>
            <Swiper className="mySwiper container testimonial-container"
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}

            >
                {
                    data.map(({ avtart, name, review }, index) =>
                        <SwiperSlide key={index} className='testimonial'>
                            <div className="client-avatar">
                                <img src={avtart} alt="Avater one" />
                            </div>
                            <h5 className='client-name'>{name}</h5>
                            <small className='client-review'>{review}</small>
                        </SwiperSlide>)
                }


            </Swiper>
        </section >
    );
};

export default Testimonials;