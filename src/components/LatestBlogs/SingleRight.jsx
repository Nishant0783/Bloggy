import React from 'react'
import blogDemo from '../../assets/blogDemo.jpg';
import author from '../../assets/author.jpeg';

const SingleRight = () => {
  return (
    <div className='col-span-1'>
                <div className='card flex flex-col gap-y-[10px] font-body bg-white pb-[10px]'>
                    <div className='image w-full'>
                        <img src={blogDemo} className='w-full h-[180px] max-[1024px]:h-full max-[590px]:h-[230px]'/>
                    </div>
                    <div className='blogContent flex flex-col gap-y-[10px] px-[10px]'>
                        <div className='flex'>
                            <div className=' bg-red-500 font-semibold text-white rounded-full flex px-[10px] py-[4px]'>
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
  )
}

export default SingleRight