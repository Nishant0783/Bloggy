import React from 'react'

const CreateBlogBtn = ({mediaClasses}) => {
    return (
        <button className={`bg-blue-600 px-[40px] py-[8px] text-white rounded-[5px] text-[1.5rem] max-[596px]:text-[1.2rem] font-semibold ${mediaClasses}`}>
            Create Your Blog
        </button>
    )
}

export default CreateBlogBtn