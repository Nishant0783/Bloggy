import React from 'react'
import AddMedia from './AddMedia'
import AddCategory from './AddCategory'

const CreateBlogRight = () => {
  return (
    <div className='col-span-2 flex flex-col gap-y-[30px]'>
        <AddMedia />
        <AddCategory />
    </div>
  )
}

export default CreateBlogRight