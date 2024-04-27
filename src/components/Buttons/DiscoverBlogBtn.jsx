import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
const DiscoverBlogBtn = ({mediaClasses}) => {
    return (
        <button className={`flex justify-center items-center ${mediaClasses}`}>
            Discover blogs <FontAwesomeIcon icon={faChevronRight} className='pl-[5px]'/>
        </button>
    )
}

export default DiscoverBlogBtn