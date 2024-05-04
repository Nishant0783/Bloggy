import React from 'react'
import { Link } from 'react-router-dom'
import ProfileBtn from '../Buttons/ProfileBtn.jsx';
import AuthenticationBtn from '../Buttons/AuthenticationBtn.jsx';
import SignupBtn from '../Buttons/SignupBtn';

const MobileMenu = ({authStatus, visibiltyClass}) => {
    return (
        <div className={`absolute bg-gray-200 top-[50px] left-0 font-body text-[#2c2c2c] w-full ${visibiltyClass}`}>
            <div className='flex flex-col gap-y-[20px] px-[10px] py-[10px] items-center'>
                <div className='border-b border-gray-300 pb-[3px] hover:border-gray-600'>
                    <Link to="/">Home</Link>
                </div>
                <div className='border-b border-gray-300 pb-[3px] hover:border-gray-600'>
                    <Link to="/about-us">About us</Link>
                </div>
                <div className='border-b border-gray-300 pb-[3px] hover:border-gray-600'>
                    <Link to="/contact-us">Contact us</Link>
                </div>
                {
                    authStatus ? (
                        <div className='flex'>
                            <ProfileBtn classes={'left-0'}/>
                        </div>
                    ) :
                        (
                            <>
                                <div className='flex flex-col'>
                                    <AuthenticationBtn link='/login' content='Log In' />
                                </div>

                                <div className='flex'>
                                    <SignupBtn />
                                </div>
                            </>

                        )
                }
            </div>
        </div>
    )
}

export default MobileMenu