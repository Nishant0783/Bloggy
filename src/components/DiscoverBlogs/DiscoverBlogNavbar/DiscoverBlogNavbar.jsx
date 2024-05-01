import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './blogNavbar.module.css';

const DiscoverBlogNavbar = () => {
    const navLinks = [
        {
            id: uuidv4(),
            name: 'MOST RECENTS'
        },
        {
            id: uuidv4(),
            name: 'TECHNOLOGY',
        },
        {
            id: uuidv4(),
            name:  'FASHION AND LIFESTYLE',
        },
        {
            id: uuidv4(),
            name: 'FOOD AND HEALTH',
        },
        {
            id: uuidv4(),
            name: 'SPORTS',
        },
        {
            id: uuidv4(),
            name: 'SPRITUALITY',
        },    
    ]
    return (
        <div className='w-full bg-white border-b border-gray-200'>
            <div className='max-w-[1500px] px-[50px] mx-auto font-body text-[#2c2c2c] '>
                <div className={`flex flex-row gap-x-[40px] whitespace-nowrap max-[1160px]:gap-x-[30px] max-[1110px]:gap-x-[20px] max-[1060px]:gap-x-[10px] max-[1010px]:gap-x-[30px] ${styles.scrollContainer}`} >
                    {navLinks.map((link) => (
                        <div className='flex cursor-pointer justify-center items-center' key={link.id}>
                            <div className='py-[20px] hover:bg-gray-200 flex mt-[3px] leading-tight'>
                                <span className='px-[10px] font-semibold'>{link.name}</span>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default DiscoverBlogNavbar