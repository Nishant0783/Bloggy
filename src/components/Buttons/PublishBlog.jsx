import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import authenticationServices from './../../appwrite/auth';

const PublishBlog = ({ mediaClasses, link, linkClasses }) => {

  const handlePublishClick = async () => {
    const userId = await authenticationServices.getCurrentUser();
    console.log(userId)
  }

  return (
    <Link to={link} className={linkClasses}>
      <button className={`bg-blue-600 px-[40px] py-[8px] text-white rounded-[5px] text-[1.5rem] max-[596px]:text-[1.2rem] font-semibold ${mediaClasses}`} onClick={handlePublishClick}>
        Publish
      </button>
    </Link>
  )
}

export default PublishBlog