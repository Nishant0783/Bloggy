import React from 'react'
import Hero from '../../components/Hero/Hero'
import HomeSwiper from '../../components/Swiper/HomeSwiper'
import CategoryBlogs from '../../components/Category_Blogs/CategoryBlogs'
import LatestBlogs from '../../components/LatestBlogs/LatestBlogs'
import JoinUs from '../../components/JoinUs/JoinUs'

const Home = () => {
  return (
   <>
      <Hero />
      <CategoryBlogs />
      <LatestBlogs />
      <JoinUs />
   </>

  )
}

export default Home
