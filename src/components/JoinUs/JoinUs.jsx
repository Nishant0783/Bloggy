import React from 'react'
import joinUs from '../../assets/joinUs.jpg';
import CreateBlogBtn from '../Buttons/CreateBlogBtn';

const JoinUs = () => {
    return (
        <div className='w-full'>
            <div className='max-w-[1500px] mx-auto px-[50px]'>
                <div className='grid grid-cols-2 py-[30px] gap-x-[50px] max-[1024px]:grid-cols-1'>
                    <div className='col-span-1 flex flex-col items-center justify-between py-[10px] gap-y-[30px] order-2 max-[1024px]:w-[80%] mx-auto'>
                        <div className='flex flex-col gap-y-[20px] max-[1086px]:gap-y-[10px]'>
                            <div className='text-[#2c2c2c] text-[5rem] font-bold font-body leading-none text-center max-[1400px]:text-[4rem] max-[1280px]:text-[3rem] max-[768px]:text-[2rem]'>
                                <p>Start Your Blogging Journey Here</p>
                            </div>
                            <div className='text-[#2c2c2c] text-[1rem] font-body leading-tight text-center max-[1086px]:text-[0.8rem] max-[1024px]:text-[1rem]'>
                                <p>Embark on your digital odyssey and let your voice resonate. Our blog section is your canvas, awaiting your strokes of creativity. Share your stories, insights, and expertise with the world.Start your adventure today!</p>
                            </div>
                        </div>

                        <div>
                            <CreateBlogBtn mediaClasses={'max-[400px]:px-[20px] max-[400px]:text-[1rem]'}/>
                        </div>
                    </div>
                    <div className='col-span-1 flex justify-center items-center order-1'>
                        <div className='flex justify-center'>
                            <img src={joinUs} className='w-full h-full max-[1024px]:w-[80%] max-[1024px]:h-[80%]' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinUs