import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const DiscoverBlogBtn = ({ mediaClasses }) => {
    return (
        <Link to='discover-blogs'>
            <button className={`flex justify-center items-center ${mediaClasses}`}>
                Discover blogs <FontAwesomeIcon icon={faChevronRight} className='pl-[5px]' />
            </button>
        </Link>

    )
}

export default DiscoverBlogBtn  