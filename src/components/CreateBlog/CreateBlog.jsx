import React from 'react'
import CreateBlogLeft from './CreateBlogLeft'
import CreateBlogRight from './CreateBlogRight'

const CreateBlog = () => {
  return (
    <div className='w-full bg-white'>
        <div className='max-w-[1500px] mx-auto px-[50px] py-[50px]'>
            <div className='grid grid-cols-6 gap-x-[30px]'>
                <CreateBlogLeft />
                <CreateBlogRight />
            </div>          
        </div>
    </div>
  )
}

export default CreateBlog