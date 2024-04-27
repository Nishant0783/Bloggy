import React from 'react'
import GetStartedBtn from '../Buttons/GetStartedBtn';
import DiscoverBlogBtn from '../Buttons/DiscoverBlogBtn';

const AboutUsHero = () => {
  return (
    <div className='w-full bg-gray-200'>
      <div className='max-w-[1500px] px-[50px] mx-auto pt-[30px] pb-[100px] font-body text-[#2c2c2c]'>
        <div className='flex flex-col items-center gap-y-[30px]'>
          <div className='flex flex-col items-center'>
            <span className='font-bold text-[10rem] leading-tight max-[772px]:text-[9rem] max-[706px]:text-[8rem]  max-[626px]:text-[7rem] max-[564px]:text-[6rem] max-[496px]:text-[5rem] max-[432px]:text-[4rem] max-[364px]:text-[3rem] max-[302px]:text-[2rem]'>BLOGGY</span>
            <span className='text-[2rem] mt-[-30px] w-[80%] mx-auto text-center text-[#535353] max-[932px]:w-[100%] leading-tight max-[704px]:text-[1.5rem] max-[564px]:text-[1.2rem] max-[706px]:mt-[-20px] max-[564px]:mt-0'>Stories ignite minds, spark imaginations, and unite hearts worldwide.</span>
          </div>
          <div className='flex flex-row gap-x-[30px] max-[504px]:gap-x-[20px] max-[418px]:flex-col max-[418px]:gap-y-[15px]'>
            <div className='max-[296px]:text-center'>
              <GetStartedBtn mediaClasses={'max-[504px]:px-[30px] max-[438px]:px-[20px] max-[418px]:px-[40px] max-[296px]:px-[20px] max-[296px]:text-[1rem]'}/>
            </div>
            <div className='text-[1.5rem] flex justify-center items-center max-[504px]:text-[1.2rem] max-[418px]:text-[1.5rem] max-[296px]:text-[1rem]'> 
              <DiscoverBlogBtn mediaClasses={''}/>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AboutUsHero