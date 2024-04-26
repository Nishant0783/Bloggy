import React from 'react'
import blogDemo from '../../assets/blogDemo.jpg';
import author from '../../assets/author.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Card = () => {
    return (
        <div className='col-span-1'>
            <div className='card flex flex-col gap-y-[30px] font-body'>
                <div className='image w-full'>
                    <img src={blogDemo} />
                </div>
                <div className='blogContent flex flex-col gap-y-[30px]'>
                    <div className='category flex flex-col font-blogCard gap-y-[10px]'>
                        <div className='heading'>
                            <div className='font-semibold text-[1.5rem]'>
                                <p>Why Tesla cybertruck made the way it is?</p>
                            </div>
                        </div>
                        <div className='content'>
                            <div className='text-[1.2rem]'>
                                <p>Ipsum clita takimata amet diam lorem sit gubergren nonumy sit clita, amet sed sadipscing voluptua magna sit eos, stet nonumy invidunt est et amet. Justo takimata duo nonumy eos dolor, takimata accusam dolor gubergren sit dolor lorem lorem. Magna diam no dolor kasd clita, amet vero kasd amet et eirmod duo accusam tempor. Amet ipsum dolor diam sit vero vero.<button className='font-bold text-blue-600'>...READ MORE</button></p>
                            </div>
                        </div>
                    </div>
                    <div className='author flex flex-row items-center max-[500px]:flex-col max-[500px]:gap-y-[15px]'>
                        <div className='flex flex-row gap-x-[10px]'>
                            <div className='authorImage'>
                                <img src={author} className='w-[100px] h-[100px] rounded-full' />
                            </div>
                            <div className='flex flex-col justify-center'>
                                <div className='text-[1.5rem] font-bold'>
                                    <p>NAME</p>
                                </div>
                                <div className='text-[1.2rem]'>
                                    <p>Time</p>
                                </div>
                            </div>

                        </div>
                        <div className='ml-auto max-[500px]:mx-auto'>
                            <div className=' bg-red-500 font-semibold text-white rounded-full flex px-[10px] py-[4px]'>
                                <p>TECHNOLOGY</p>
                            </div>
                        </div>

                        <div>

                        </div>

                    </div>

                </div>
            </div>
            <hr className="h-px mt-[10px] bg-gray-900 border-0 max-[590px]:hidden min-[1024px]:hidden" />
            <div className='text-[1.5rem] mt-[40px] font-body font-semibold text-blue-600 text-center min-[590px]:hidden'>
                <button>
                    Explore More Blogs <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </div>
    )
}

export default Card










{/* <div className='col-span-1 bg-white rounded-[20px] shadow-[0px_0px_20px_0px_#a0aec0]'>
<div className='card flex flex-col gap-y-[10px] pb-[10px]'>


    <div className='image'>
        <img src={blogDemo} className='rounded-t-[20px]' />
    </div>

    <div className='flex flex-col px-[15px] gap-y-[10px]'>
     
        <div className='category flex'>
            <div className=' bg-red-500 font-semibold text-white rounded-full flex px-[10px] py-[4px]'>
                <p>TECHNOLOGY</p>
            </div>
        </div>

        <div className='flex flex-col gap-y-[5px]'>
        
            <div className='title font-blogCard'>
                <div className='text-[1.3rem]'>
                    <p>Why tesla cybertruck is built this way?</p>
                </div>
            </div>

         
            <div className='description font-blogCard'>
                <div className='text-[1.1rem]'>
                    <p>Eirmod takimata dolor voluptua tempor vero dolor dolore est et justo. Sit duo duo at ipsum dolores dolores lorem at <button className='font-semibold'>...READ MORE</button></p>
                </div>
            </div>
        </div>



        <div className='author flex flex-row gap-x-[15px] mt-[15px]'>
      
            <div>
                <img src={author} className='w-20 h-20 rounded-full' />
            </div>
            <div className='flex flex-col gap-y-[5px] justify-center'>
               
                <div className='font-semibold text-[1.2rem]'>
                    Hitesh Chaudhary
                </div>
                
                <div>
                    Time
                </div>
            </div>
        </div>

    </div>

</div>
</div> */}