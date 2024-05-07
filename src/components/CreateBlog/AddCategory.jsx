import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { updateCategory } from '../../features/blogFormSlice';


const AddCategory = () => {
    const [selectedOption, setSelectedOption] = useState(''); 
    const dispatch = useDispatch();
    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
        dispatch(updateCategory(e.target.value))
    };

    const navLinks = [
        {
            id: uuidv4(),
            name: 'TECHNOLOGY',
        },
        {
            id: uuidv4(),
            name: 'FASHION AND LIFESTYLE',
        },
        {
            id: uuidv4(),
            name: 'FOOD AND HEALTH',
        },
        {
            id: uuidv4(),
            name: 'SPORTS',
        },
        {
            id: uuidv4(),
            name: 'SPIRITUALITY',
        },
    ];
    return (
        <div className='px-[30px] max-[1300px]:px-0'>
            <div className='flex flex-col font-body text-[#2c2c2c] bg-gray-200 px-[30px] py-[20px] gap-y-[10px] w-full'>
                <div className='text-[1.2rem] font-bold'>
                    <span>SELECT CATEGORY</span>
                </div>
                <div>
                    <select
                        value={selectedOption}
                        onChange={handleSelectChange}
                        className='outline-none text-[1.2rem] px-[5px] py-[5px] max-w-[485px] w-full max-[485px]:text-[1rem] max-[350px]:w-[100%]'
                    >
                        <option value="">
                            Select a category
                        </option>
                        {navLinks.map((link) => (
                            <option key={link.id} value={link.name} className='text-[1rem] max-w-[485px] md:text-[1.2rem]'>{link.name}</option>
                        ))}
                    </select>

                </div>
            </div>
        </div>
    )
}

export default AddCategory



