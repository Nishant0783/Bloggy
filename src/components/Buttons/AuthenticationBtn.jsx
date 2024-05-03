import React from 'react'
import { Link } from 'react-router-dom'

const AuthenticationBtn = ({content, link, onClick}) => {
    return (
        <Link to={link} onClick={onClick}>
            {content}
        </Link>
    )
}

export default AuthenticationBtn