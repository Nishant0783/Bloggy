import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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

  useEffect(() => {
    setData(postData)
  }, [postData])

  const handlePublishClick = async () => {
    const userId = await authenticationServices.getCurrentUser();
    const user = await userService.getUser(userId.email)
    console.log(userId)
    console.log("user is: ", user)
    try {
      const createdPost = await blogServices.createPost({
        userId: user.documents[0].$id,
        ...data
      })

      if(createdPost) {
        console.log("Post created successfully")
        console.log(createdPost)
      } else {
        console.log("Post creation failed")
        console.log(createdPost)
      }
    } catch (error) {
      console.log("Error in creating post: ", error.message)
      throw error
    }
    console.log(data)
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