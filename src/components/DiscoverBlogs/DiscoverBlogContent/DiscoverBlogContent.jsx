import React, { useState } from 'react';
import { useEffect } from 'react';
import blogServices from '../../../appwrite/BlogServices';
import fileServices from '../../../appwrite/fileServices';

const DiscoverBlogContent = () => {
    const [allPosts, setAllPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [imageUrls, setImageUrls] = useState([])

    useEffect(() => {
        blogServices.getAllPosts()
            .then((posts) => {
                if (posts) {
                    setAllPosts(posts.documents);


                } else {
                    setLoading(false);
                }
            })
            .catch((error) => {
                console.log("Error fetching posts:", error.message);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        if (allPosts.length > 0) {
            setLoading(false)
            const promises = allPosts.map((post) =>
                fileServices.getFilePreview(post.image)
                    .then((imageUrl) => {
                        console.log("Image URL object: ", imageUrl); // Log the imageUrl object
                        return imageUrl.href; // Extract the URL
                    })
            );

            Promise.all(promises).then((imageUrls) => {
                setImageUrls(imageUrls);
                setLoading(false);
                console.log("Image urls: ", imageUrls); // Log allPosts when it changes
            });
        }

    }, [allPosts]);


    return (
        <>
            {
                loading ? (
                    <p>Loading...</p>
                ) : allPosts && Array.isArray(allPosts) && allPosts.length > 0 ? (
                    <div className='w-full bg-white'>
                        <div className='max-w-[1500px] px-[50px] mx-auto py-[50px]'>
                            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8'>
                                {/* {[...Array(12)].map((_, index) => ( */}
                                {allPosts.map((post, index) => {
                                    console.log("image url in compo: ", imageUrls[index])
                                    return (

                                        <div key={index} className='w-full'>
                                            <div className='flex flex-col bg-gray-100 gap-y-[10px]'>
                                                <div className='image'>
                                                    <img src={imageUrls[index]?.href} className='max-[1024px]:h-full max-[590px]:h-[230px] w-full' alt={`Blog ${index + 1}`} />
                                                </div>
                                                <div className='blogContent flex flex-col gap-y-[10px] px-[10px] pb-[20px]'>
                                                    <div className='flex'>
                                                        <div className='bg-red-500 font-semibold text-white rounded-full flex px-[10px] py-[4px]'>
                                                            <p>{post.category}</p>
                                                        </div>
                                                    </div>
                                                    <div className='category flex flex-col font-blogCard gap-y-[5px]'>
                                                        <div className='heading'>
                                                            <div className='font-semibold text-[1.3rem]'>
                                                                <p>{post.title}</p>
                                                            </div>
                                                        </div>
                                                        <div className='content'>z
                                                            <div className='text-[1rem]'>
                                                                <p>{post.content}<button className='font-bold text-blue-600'>...READ MORE</button></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )

                                })}
                            </div>

                        </div>
                    </div>
                ) : (
                    <p>No Posts found</p>
                )
            }
        </>

    )
}


export default DiscoverBlogContent;
