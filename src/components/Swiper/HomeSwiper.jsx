import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const HomeSwiper = () => {
    const settings = {
        infinite: true,
        speed: 3000, 
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, 
        pauseOnHover: true,
        arrows: false,
        dots: false,
    }

    const slides = [
        { label: 'TECHNOLOGY' },
        { label: 'TRAVEL' },
        { label: 'FASHION' },
        { label: 'FINANCE' },
        { label: 'FOOD BLOGS' },
    ]

    return (
        <>
            <Slider {...settings}>
                {
                    slides.map((slide, index) => (
                        <div className="text-[8rem] font-bold font-body max-[1120px]:text-[6.5rem] max-[950px]:text-[5.5rem] max-[845px]:text-[4.5rem] max-[736px]:text-[3.5rem] max-[572px]:text-[2.5rem] max-[424px]:font-[500] max-[408px]:text-[2rem]" key={index}>
                            <p className="flex items-center justify-center gap-x-[20px] max-[736px]:gap-x-[10px] max-[436px]:gap-x-[3px]">
                                <FontAwesomeIcon icon={faCircle} className="text-[3rem] max-[736px]:text-[2rem] max-[572px]:text-[1rem] max-[408px]:text-[0.6rem]" />
                                {slide.label}
                                <FontAwesomeIcon icon={faCircle} className="text-[3rem] max-[736px]:text-[2rem] max-[572px]:text-[1rem] max-[408px]:text-[0.6rem]" />
                            </p>
                        </div>
                    ))
                }
            </Slider>

        </>

    );
};

export default HomeSwiper;
