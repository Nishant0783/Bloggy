import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';


const SearchBox = () => {
    const [query, setQuery] = useState('');

    const handleQuery = (e) => {
        setQuery(e.target.value)
    }

    const handleSubmit = () => {
        e.preventDefault();
    }

    const handleClear = () => {
        setQuery('')
    }

    return (
        <form
            onSubmit={handleSubmit}
            className='mx-auto'>
            <div className='w-full relative'>
                <input
                    type='text'
                    placeholder='Enter title or category'
                    className={`py-[10px] text-[1.3rem] rounded-full outline-none pl-[20px] max-[600px]:w-full max-[400px]:text-[1rem] w-[500px] ${query ? 'pr-[90px]' : 'pr-[60px]'}`}
                    name={query}
                    value={query}
                    onChange={handleQuery}
                />
                {query && (
                    <button type='button' onClick={handleClear} className='absolute right-[60px] top-[50%] transform -translate-y-1/2 flex'>
                        <FontAwesomeIcon icon={faXmark} className='text-gray-500 hover:text-gray-700 w-[20px] h-full ' />
                    </button>
                )}
                <button
                    type='submit'
                >
                    <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        className=' text-white w-[20px] h-full rounded-full px-[15px] py-[0px] bg-[#2c2c2c] cursor-pointer absolute z-[100] right-0 top-0'
                    />
                </button>


            </div>
        </form>

    )
}

export default SearchBox


