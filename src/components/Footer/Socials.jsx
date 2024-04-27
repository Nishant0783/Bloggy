import React from 'react'
import Data from './SocialData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Socials = () => {
  return (
    <div className='flex flex-row gap-x-[20px] max-[256px]:flex-col max-[256px]:gap-y-[10px]'>
      {Data.map((item) => (
        <Link to={item.link} key={item.id}>
          <div className='flex bg-gray-400 rounded-full px-[7px] py-[7px] max-[256px]:inline-flex'>
            <FontAwesomeIcon icon={item.icon} className='w-[25px] h-[25px] rounded-full' />
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Socials