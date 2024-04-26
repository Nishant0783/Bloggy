import React from 'react'
import SingleRight from './SingleRight'


const CardRight = () => {
    return (
        <div className='col-span-1 grid grid-cols-2 gap-x-[20px] gap-y-[20px] max-[590px]:grid-cols-1 max-[590px]:hidden'>
            <SingleRight />
            <SingleRight />
            <SingleRight />
            <SingleRight />
        </div>
    )
}

export default CardRight