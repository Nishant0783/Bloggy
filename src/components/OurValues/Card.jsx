import React from 'react'
import diversity from '../../assets/diversity.png'
import Data from './Data';

const Card = () => {
    return (
        <>
            {Data.map((item) => (
                <div className='col-span-1 flex flex-col gap-y-[20px] items-center' key={item.id}>
                    <div>
                        <img src={item.image} className='w-[100px] h-[100px]' />
                    </div>
                    <div className='flex flex-col items-center gap-y-[10px]'>
                        <div className='text-[2rem] font-semibold max-[248px]:text-[1rem]'>
                            <span>{item.heading}</span>
                        </div>
                        <div className='text-center text-[1.2rem]'>
                           {item.subHeading}
                        </div>
                    </div>
                </div>
            ))}
        </>

    )
}

export default Card