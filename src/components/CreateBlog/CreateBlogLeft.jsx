import React, { useState } from 'react'
import { useRef } from 'react';
import RTE from './RTE';

const CreateBlogLeft = () => {
    const editorRef = useRef(null);
    const [title, setTitle] = useState('')
    const [slug, setSlug] = useState('')

    const handleTitle = (e) => {
        const newTitle = e.target.value
        setTitle(newTitle)
        const newSlug = generateSlug(newTitle);
        setSlug(newSlug);
    }

    const generateSlug = (title) => {
        return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    }

    return (
        <div className='col-span-4 flex flex-col gap-y-[40px]'>
            <div className='flex flex-col font-body text-[#2c2c2c] gap-y-[5px]'>
                <div className='font-bold text-[3rem]'>
                    <label htmlFor='title'>TITLE</label>
                </div>
                <div>
                    <input
                        placeholder=''
                        name='title'
                        value={title}
                        onChange={handleTitle}
                        className='outline-0 border-2 border-gray-400 rounded-[10px] w-[90%] px-[15px] py-[15px] text-[1.2rem] font-semibold focus:border-gray-800'
                    />
                </div>
            </div>

            <div className='flex flex-col'>
                <div className='font-bold text-[1.5rem]'>
                    <label htmlFor='title'>SLUG</label>
                </div>
                <div>
                    <input
                        placeholder=''
                        name='slug'
                        value={slug}
                        readOnly
                        className='outline-0 border-2 border-gray-400 rounded-[10px] w-[90%] px-[15px] py-[5px] text-[1.2rem] font-semibold'
                    />
                </div>
            </div>
            <div className='flex flex-col gap-y-[5px]'>
                <div className='font-bold text-[3rem]'>
                    <span>POST</span>
                </div>
                <RTE editorRef={editorRef} />
                {/* <button onClick={log}>Log editor content</button> */}
            </div>

        </div>
    )
}

export default CreateBlogLeft