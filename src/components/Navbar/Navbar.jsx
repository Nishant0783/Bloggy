import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import brandLogo from '../../assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import AuthenticationBtn from '../Buttons/AuthenticationBtn.jsx';
import SignupBtn from '../Buttons/SignupBtn';
import { useDispatch, useSelector } from 'react-redux';
import authenticationServices from '../../appwrite/auth.js';
import { logout } from '../../features/authSlice.js';

const Navbar = () => {
    const location = useLocation();
    const authStatus = useSelector((state) => state.auth.status)
    console.log('auth status: ', authStatus)
    const dispatch = useDispatch()

    const isLoginOrSignup = () => {
        return location.pathname === '/login' || location.pathname === '/signup'
    }

    if (isLoginOrSignup()) {
        return null;
    }

    const handleLogout = () => {
        authenticationServices.logoutUser().then(() => (
            dispatch(logout())
        ))
    }

    return (
        <div className='w-full bg-gray-100'>
            <div className='grid grid-cols-3 text-[1.3rem] font-[500] font-navbar max-w-[1500px] mx-auto py-[10px] px-[50px] max-[896px]:text-[1rem] max-[1024px]:text-[1.1rem] max-[510px]:grid-cols-2 '>
                <div className='col-span-1 flex gap-x-[50px] items-center max-[1148px]:gap-x-[25px] max-[769px]:hidden whitespace-nowrap'>
                    <div>
                        <Link to="/">Home</Link>
                    </div>
                    <div>
                        <Link to="/about-us">About us</Link>
                    </div>
                    <div>
                        <Link to="/contact-us">Contact us</Link>
                    </div>
                </div>

                {/* HAMBURGER ICON START*/}

                <div className='col-span-1 flex items-center min-[769px]:hidden'>
                    <div className='text-[1.5rem]'>
                        <FontAwesomeIcon icon={faBars} />
                    </div>

                </div>

                {/* HAMBURGER ICON END*/}



                <div className='col-span-1 flex justify-center items-center max-[510px]:justify-end'>
                    <div className='flex'>
                        <Link to="/"><img src={brandLogo} className='w-[130px] h-[40px]' /></Link>
                    </div>
                </div>

                <div className='col-span-1 flex justify-end gap-x-[50px] items-center max-[1168px]:gap-x-[25px] max-[1024px]:text-[1.1rem] max-[510px]:hidden whitespace-nowrap'>
                    {
                        authStatus ? (
                            <div className='flex max-[769px]:hidden'>
                                <AuthenticationBtn link='/' content='Log Out' onClick={handleLogout} />
                            </div>
                        ) :
                            (
                                <>
                                    <div className='flex max-[769px]:hidden'>
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
        </div>
    )
}

export default Navbar