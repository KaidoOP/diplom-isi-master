import React from 'react'
import '../AxmedHeader/axmed.css'
import EducationLogo from '../../img/Header/h3-slider-image.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";



const AxmedHeader = () => {
    return (
        <header>
            <Swiper
                loop={true}
                navigation={true}
                modules={[Navigation, Autoplay]}
                autoplay={{
                    delay: 2500,
                }}
                className="mySwiper slider swiper"
            >
                <SwiperSlide className='slide silde-1'>
                    <div class="slider-caption">
                        <img src={EducationLogo} alt="educationImage" className='education-image' />
                        <h1>Graduate Admissions</h1>
                        <p>The perfect to create a stunning online presentation</p>
                        <a href="/" className='btn-custom'>Read More</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide silde-2'>
                    <div class="slider-caption">
                        <img src={EducationLogo} alt="educationImage" className='education-image' />
                        <h1>A Unique Experience</h1>
                        <p>The perfect to create a stunning online presentation</p>
                        <a href="/" className='btn-custom'>Read More</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide silde-3'>
                    <div class="slider-caption">
                        <img src={EducationLogo} alt="educationImage" className='education-image' />
                        <h1>Latest Advancements</h1>
                        <p>The perfect to create a stunning online presentation</p>
                        <a href="/" className='btn-custom'>Read More</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide silde-4'>
                    <div class="slider-caption">
                        <img src={EducationLogo} alt="educationImage" className='education-image' />
                        <h1>Premium Scholarships</h1>
                        <p>The perfect to create a stunning online presentation</p>
                        <a href="/" className='btn-custom'>Read More</a>
                    </div>
                </SwiperSlide>

            </Swiper>
        </header>
    )
}

export default AxmedHeader