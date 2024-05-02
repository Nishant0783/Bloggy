import React from 'react'
import { Link } from 'react-router-dom'

const PublishBlog = ({mediaClasses, link, linkClasses}) => {
  return (
    <Link to={link} className={linkClasses}>
            <button className={`bg-blue-600 px-[40px] py-[8px] text-white rounded-[5px] text-[1.5rem] max-[596px]:text-[1.2rem] font-semibold ${mediaClasses}`}>
                Publish
            </button>
    </Link>
  )
}

export default PublishBlog