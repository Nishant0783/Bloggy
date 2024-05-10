import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import authenticationServices from './../../appwrite/auth';
import { useSelector } from 'react-redux';
import userService from '../../appwrite/userService';
import blogServices from './../../appwrite/BlogServices';

const PublishBlog = ({ mediaClasses, link, linkClasses }) => {
  const [data, setData] = useState({});
  const postData = useSelector((state) => {
    console.log(state);
    return state.blogForm
  })
  const navigate = useNavigate() 

  useEffect(() => {
    setData(postData)
  }, [postData])

  const handlePublishClick = async () => {
    const userId = await authenticationServices.getCurrentUser();
    const user = await userService.getUser(userId.email)
    try {
      const createdPost = await blogServices.createPost({
        userId: user.documents[0].$id,
        ...data
      })

      if(createdPost) {
        console.log("Post created successfully")
        console.log(createdPost.$id)
        const post = await blogServices.getPost(createdPost.$id)
        console.log("Created post is: ", post)
        // navigate('/blog/:')
      } else {
        console.log("Post creation failed")
      }
    } catch (error) {
      console.log("Error in creating post: ", error.message)
      throw error
    }

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