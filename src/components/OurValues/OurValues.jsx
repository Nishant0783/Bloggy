import React from 'react'
import Card from './Card'

const OurValues = () => {
    return (
        <div className='w-full'>
            <div className='max-w-[1500px] mx-auto px-[50px] text-[#2c2c2c] font-body py-[120px]'>
                <div className='grid grid-cols-2 gap-x-[50px] max-[1300px]:gap-x-[40px] max-[1000px]:grid-cols-1 max-[1000px]:gap-y-[30px]'>
                    <div className='col-span-1 flex items-center text-[8rem] font-bold leading-tight max-[1000px]:text-center justify-center max-[904px]:text-[7rem] max-[808px]:text-[6rem] max-[484px]:text-[3rem] max-[288px]:text-[2rem]'>
                        <span>OUR VALUES</span>
                    </div>
                    <div className='col-span-1 grid grid-cols-3 gap-x-[25px] max-[710px]:grid-cols-2 max-[710px]:gap-y-[50px] max-[550px]:grid-cols-1'>
                        <Card />
                    </div>


                </div>
            </div>
        </div>
    )
}

export default OurValues