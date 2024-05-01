import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


const AddCategory = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const navLinks = [
        {
            id: uuidv4(),
            name: 'MOST RECENTS'
        },
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
        <div className='px-[30px]'>
            <div className='flex flex-col font-body text-[#2c2c2c] bg-gray-200 px-[30px] py-[20px] gap-y-[10px]'>
                <div className='text-[1.2rem] font-bold'>
                    <span>SELECT CATEGORY</span>
                </div>
                <div>
                    <select
                        value={selectedOption}
                        onChange={handleSelectChange}
                        className='outline-none text-[1.2rem] px-[5px] py-[5px]'
                    >
                        <option value="">
                            Select a category
                        </option>
                        {navLinks.map((link) => (
                            <option key={link.id} value={link.name}>{link.name}</option>
                        ))}
                    </select>

                </div>
            </div>
        </div>
    )
}

export default AddCategory



