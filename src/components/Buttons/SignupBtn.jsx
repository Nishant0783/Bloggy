import React from 'react'
import { Link } from 'react-router-dom'
const SignupBtn = () => {
    return (
        <Link
            to="/signup"
            className='border-blue-600 border px-[35px] py-[5px] rounded-[5px] text-blue-600'
        >
            Sign Up
        </Link>
    )
}

export default SignupBtn