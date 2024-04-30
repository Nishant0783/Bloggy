import React from 'react'
import SearchBox from './SearchBox'

const DiscoverBlogsHero = () => {
  
    return (
        <div className='w-full bg-gray-200'>
            <div className='max-w-[1500px] mx-auto px-[50px] font-body text-[#2c2c2c] py-[50px] max-[900px]:py-[30px]'>
                <div className='flex flex-col'>
                    <div className='flex flex-col items-center gap-y-[15px] py-[10px]'>
                        <span className='font-bold text-[6rem] leading-tight text-center max-[750px]:text-[5rem] max-[640px]:text-[4rem] max-[540px]:text-[3rem] max-[420px]:text-[2rem] max-[312px]:text-[1rem]'>
                            Welcome to Blogosphere,
                        </span>
                        <span className='text-[1.2rem] text-center max-w-[70%] max-[750px]:max-w-full max-[540px]:text-[1rem] leading-tight'>
                            Find a wealth of insightful articles covering a wide array of topics. Dive into our carefully curated categories below to discover captivating content that suits your interests
                        </span>
                    </div>

                    <div className="inline-flex items-center justify-center w-full">
                        <hr className="w-[60%] h-px my-[50px] bg-gray-700 border-0 max-[576px]:w-full max-[900px]:my-[30px]" />
                        <span className="absolute px-3 font-medium -translate-x-1/2 bg-gray-200 left-1/2 ">OR</span>
                    </div>
                    <div className='flex flex-col items-center py-[10px] gap-y-[20px]'>
                        <div className='text-[1.5rem] max-[576px]:text-center'>
                            <span>Search your favourite topics or categories</span>
                        </div>
                    <SearchBox />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DiscoverBlogsHero