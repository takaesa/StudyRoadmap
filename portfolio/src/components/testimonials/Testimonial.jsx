import React from 'react'
import { Data } from './Data'
import './testimonial.css'
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = () => {
    return (
        <section className="testimonial container section">
            <h2 className="section__title">My clients say</h2>
            <span className="section__subtitle">Testimonial</span>

            <Swiper className="testimonial__container swiper"
                loop={true}
                spaceBetween={24}
                pagination={{
                    clickable: true
                }}
                breakpoint={{
                    576: {
                        slidePerView: 2
                    },
                    768: {
                        slidePerView: 2,
                        spaceBetween: 48,
                    },
                }}
                modules={[Pagination]}
            >
                {Data.map((data) => {
                    return (
                        <div className="testimonial__card swiper-slide" key={data.id}>
                            <img src={data.image} alt="testimonial card" className='testimonial__img' />

                            <h3 className="testimonial__name">
                                {data.title}
                            </h3>

                            <p className="testimonial__description">{data.description}</p>

                        </div>
                    )
                })}
            </Swiper>
        </section >
    )
}

export default Testimonial