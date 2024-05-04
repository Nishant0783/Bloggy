import React, { useState } from 'react';
import AuthenticationBtn from './AuthenticationBtn';
import authenticationServices from '../../appwrite/auth.js';
import { logout } from '../../features/authSlice.js';
import { useDispatch } from 'react-redux';
import loginIcon from '../../assets/loginIcon.png';

const ProfileBtn = () => {
    const dispatch = useDispatch();
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const handleLogout = () => {
        authenticationServices.logoutUser().then(() => (
            dispatch(logout())
        ));
    };

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <div className='relative font-body text-[#2c2c2c] cursor-pointer'>
            <img src={loginIcon} className='w-[60px] h-[60px]' onClick={toggleDropdown} />
            {dropdownVisible && (
                <div className='absolute top-full left-[-50px] w-[150px] px-[10px] bg-gray-100 border border-gray-200 shadow-md rounded-md z-10 flex flex-col py-[10px] gap-y-[10px]'>

                    <div className='border-b border-gray-300 pb-[3px] hover:border-gray-600'>
                        <button>
                            Profile
                        </button>
                    </div>
                    <div className='border-b border-gray-300 pb-[3px] hover:border-gray-600'>
                        <button>
                            Setting
                        </button>
                    </div>
                    <div className='border-b border-gray-300 pb-[3px] hover:border-gray-600'>
                        <AuthenticationBtn link='/' content='Log Out' onClick={handleLogout} />
                    </div>

                </div>
            )}
        </div>
    );
};

export default ProfileBtn;
