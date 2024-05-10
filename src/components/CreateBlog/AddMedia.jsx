import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateImage } from '../../features/blogFormSlice'
import fileServices from '../../appwrite/fileServices'

const AddMedia = () => {
    const [image, setImage] = useState(null)
    const [errorMessage, setErrorMessage] = useState('')
    const dispatch = useDispatch();


    const handleFileChange = async(e) => {
        console.log(e.target.files)
        const file = e.target.files[0] ? await fileServices.uploadFile(e.target.files[0]) : null
        console.log("file is: ",file)
        if (file) {
            if (file.size > 1024 * 1024) {
                setErrorMessage("Image should be less than 1MB.")
                setImage(null)
                dispatch(updateImage(null))
            } else {
                setErrorMessage('')
                setImage(file.$id)
                dispatch(updateImage(file.$id))
            }
        }
    }
    return (
        <div className='px-[30px] max-[1300px]:px-0'>
            <div className='flex flex-col font-body text-[#2c2c2c] bg-gray-200 px-[30px] py-[20px] gap-y-[10px] '>
                <div className='text-[1.2rem] font-semibold'>
                    <label htmlFor='imageUploader'>ADD MEDIA</label>
                </div>
                <div>
                    <input
                        type='file'
                        name='imageUploader'
                        accept='images/*'
                        onChange={handleFileChange}
                        className='flex flex-col w-full'
                    />
                </div>
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                {/* {image && (
                    <p className="mt-2">
                        Selected file: {file.name}
                    </p>
                )} */}
            </div>
        </div>

    )
}

export default AddMedia