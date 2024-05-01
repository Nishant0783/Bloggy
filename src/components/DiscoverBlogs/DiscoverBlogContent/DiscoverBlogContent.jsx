import React from 'react';
import blogDemo from '../../../assets/blogDemo.jpg';

const DiscoverBlogContent = () => {
    return (
        <div className='w-full bg-white'>
            <div className='max-w-[1500px] px-[50px] mx-auto py-[50px]'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8'>
                    {[...Array(12)].map((_, index) => (
                        <div key={index} className='w-full'>
                            <div className='flex flex-col bg-gray-100 gap-y-[10px]'>
                                <div className='image'>
                                    <img src={blogDemo} className='max-[1024px]:h-full max-[590px]:h-[230px] w-full' alt={`Blog ${index + 1}`} />
                                </div>
                                <div className='blogContent flex flex-col gap-y-[10px] px-[10px] pb-[20px]'>
                                    <div className='flex'>
                                        <div className='bg-red-500 font-semibold text-white rounded-full flex px-[10px] py-[4px]'>
                                            <p>TECHNOLOGY</p>
                                        </div>
                                    </div>
                                    <div className='category flex flex-col font-blogCard gap-y-[5px]'>
                                        <div className='heading'>
                                            <div className='font-semibold text-[1.3rem]'>
                                                <p>Why Tesla cybertruck made the way it is?</p>
                                            </div>
                                        </div>
                                        <div className='content'>
                                            <div className='text-[1rem]'>
                                                <p>Accusam duo sed elitr kasd gubergren dolore clita sadipscing stet. At labore sit nonumy clita accusam nonumy accusam. Dolor magna.<button className='font-bold text-blue-600'>...READ MORE</button></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DiscoverBlogContent;
