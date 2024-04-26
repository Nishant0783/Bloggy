import React from 'react';
import HomeSwiper from '../Swiper/HomeSwiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const CategoryBlogs = () => {
    return (
        <div className='w-full'>
            <div className='max-w-[1500px] px-[50px] mx-auto py-[30px]'>
                <div className='mb-[20px]'>
                    <HomeSwiper />
                </div>

                <div className='flex flex-col items-center gap-y-[30px]'>
                    <div className='flex flex-col items-center w-[70%] mx-auto gap-y-[20px] max-[1054px]:w-[80%] max-[934px]:w-[90%] max-[842px]:w-[100%]'>
                        <div className='text-[4rem] text-[#2c2c2c] font-bold font-body text-center leading-tight max-[768px]:text-[3rem] max-[600px]:text-[2rem]'>
                            <p>Discover latest blogs based on categories</p>
                        </div>
                        <div className='text-[1.1rem] text-[#2c2c2c] font-body text-center leading-tight max-[768px]:px-[50px] max-[768px]:text-[1rem] max-[600px]:px-0 max-[536px]:px-[40px] max-[470px]:px-0'>
                            <p>Discover a world of diverse content tailored to your interests. Whether you're passionate about technology, wanderlust, fashion, finance, or tantalizing food experiences, we've got you covered.</p>
                        </div>
                    </div>
                    <div className='text-[1.5rem] font-body font-semibold text-blue-600'>
                        <button>
                            Discover blogs <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryBlogs