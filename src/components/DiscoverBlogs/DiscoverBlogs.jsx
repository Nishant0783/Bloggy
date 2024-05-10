import React from 'react'
import DiscoverBlogsHero from './DiscoverBlogsHero/DiscoverBlogsHero'
import DiscoverBlogNavbar from './DiscoverBlogNavbar/DiscoverBlogNavbar'
import DiscoverBlogContent from './DiscoverBlogContent/DiscoverBlogContent'
import blogServices from '../../appwrite/BlogServices'

const DiscoverBlogs = () => {
    
    return (
        <>
            <DiscoverBlogsHero />
            <DiscoverBlogNavbar />
            <DiscoverBlogContent />
        </>

    )
}

export default DiscoverBlogs