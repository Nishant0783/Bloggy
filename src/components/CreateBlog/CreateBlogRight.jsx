import React from 'react'
import AddMedia from './AddMedia'
import AddCategory from './AddCategory'
import PublishBlog from '../Buttons/PublishBlog'

const CreateBlogRight = () => {
  return (
    <div className='col-span-2 flex flex-col gap-y-[30px]'>
        <AddMedia />
        <AddCategory />
        <PublishBlog link={''} linkClasses={'flex justify-center'}/>
    </div>
  )
}

export default CreateBlogRight