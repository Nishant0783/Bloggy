import React, { useState } from 'react';
import heroFm from '../../assets/heroFm.jpg';
import heroMan from '../../assets/heroMan.jpg';
import CreateBlogBtn from '../Buttons/CreateBlogBtn';
import { useSelector } from 'react-redux';

const Hero = () => {
    const authStatus = useSelector((state) => state.auth.status)
    const [link, setLink] = useState('');
    const getAuthStatus = async () => {
        if(authStatus){
            setLink('/create-blog')
        } else {
            setLink('/login')
        }
    }


    return (
        <div className='w-full bg-gray-200'>
            <div className='grid grid-cols-4 max-w-[1500px] mx-auto font-body px-[50px] gap-x-[20px] max-[769px]:grid-cols-3 max-[480px]:grid-cols-1 max-[480px]:py-[50px] max-[480px]:gap-x-0'>
                <div className='col-span-1 flex flex-col justify-start justify-self-end w-[90%] order-3 max-[480px]:w-[100%]' >
                    <div className='flex'>
                        <img src={heroFm} className='rounded-b-full' />
                    </div>
                    <div className='flex justify-center items-center min-[769px]:hidden max-[480px]:hidden'>
                            <img src={heroMan} className='rounded-full h-[70%] w-[100%]' />
                    </div>
                </div>

                <div className='col-span-2 flex flex-col justify-center py-[120px] max-[1251px]:py-[110px] max-[1109px]:py-[100px] max-[964px]:py-[90px] order-2 max-[769px]:py-[30px] max-[480px]:py-0 max-[480px]:pb-[30px]'>
                    <div className='flex flex-col items-center gap-y-[50px] max-[538px]:gap-y-[30px]'>

                        <div className='text-[4rem] font-[500] text-[#2c2c2c] text-center leading-tight max-[1251px]:text-[3.5rem] max-[1109px]:text-[3rem] max-[964px]:text-[2.5rem] max-[769px]:text-[2.8rem] max-[655px]:text-[2.5rem] max-[596px]:text-[2.2rem] max-[538px]:text-[1.9rem]'>
                            <p>How about starting your blogging journey with us for free ?</p>
                        </div>
                        <div>
                           <CreateBlogBtn link={link} onClick={getAuthStatus}/>
                        </div>
                    </div>
                </div>

                <div className='col-span-1 flex flex-col justify-end w-[90%] max-[769px]:hidden order-1'>
                    <img src={heroMan} className='rounded-t-full' />
                </div>
            </div>

        </div>
    )
}

export default Hero
