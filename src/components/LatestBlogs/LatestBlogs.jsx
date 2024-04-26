import React from 'react'
import CardLeft from './CardLeft'
import CardRight from './CardRight'


const LatestBlogs = () => {
    return (
        <div className='w-full bg-gray-200'>
            <div className='max-w-[1500px] px-[50px] mx-auto font-body py-[30px]'>
                <div className='flex flex-col font-body justify-center text-[#2c2c2c] pb-[50px] text-center leading-tight max-[700px]:pb-[15px]'>
                    <p className='text-[5rem] font-bold max-[1084px]:text-[4rem] max-[868px]:text-[3rem] max-[700px]:text-[2rem]'>Stay Ahead of the Curve</p>
                    <p className='text-[3rem] max-[1084px]:text-[2rem] max-[700px]:text-[1.5rem]'>Check Out Our Latest Blog Posts!</p>
                </div>
                <div className='grid grid-cols-2 gap-x-[40px] max-[1024px]:grid-cols-1 gap-y-[20px]'>
                    <CardLeft />
                    <CardRight />
                </div>
            </div>
        </div>
    )
}

export default LatestBlogs