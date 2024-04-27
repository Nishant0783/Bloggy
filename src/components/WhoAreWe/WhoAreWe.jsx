import React from 'react'
import aboutUsBg from '../../assets/aboutUsBg.jpg'
import styles from './WhoAreWe.module.css'
const WhoAreWe = () => {
  return (
    <div className={`w-full py-[80px] ${styles.gradientBg} `}>
        <div className='max-w-[1500px] px-[50px] mx-auto font-body text-[#2c2c2c]'>
            <div className='grid grid-cols-2 gap-x-[40px] max-[1000px]:grid-cols-1 max-[1000px]:gap-y-[40px]'>
                <div className='col-span-1 flex flex-col'>
                    <div className='flex flex-col gap-y-[20px] max-[1000px]:items-center max-[1000px]:text-center'>
                        <div className='text-[8rem] font-semibold leading-[120px] max-[886px]:text-[7rem] max-[788px]:text-[6rem] max-[690px]:text-[5rem] max-[592px]:text-[4rem] max-[493px]:leading-tight'>
                            <span>WHO ARE WE</span>
                        </div>
                        <div className='flex px-[10px] text-[1.2rem] max-[395px]:text-[1rem]'>
                            <span>We are passionate individuals who believe in the power of storytelling. Our blogging platform is more than just a space on the internet—it's a vibrant community where voices from all walks of life converge to share their experiences, insights, and expertise. Whether you're a seasoned writer or just starting your blogging journey, you'll find a home here.</span>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 z-[100] flex justify-end max-[1000px]:bg-white max-[1000px]:rounded-tl-[150px] max-[400px]:rounded-[0px]'>
                    <div className='ml-[60px] flex flex-grow max-[1000px]:m-0 max-[1000px]:p-[40px] max-[600px]:p-[30px] max-[400px]:p-[20px]'>
                        <img src={aboutUsBg} className='rounded-tl-[150px] w-full h-auto min-h-full max-[400px]:rounded-[0px]'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhoAreWe