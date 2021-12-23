import React from 'react'
import { Link } from 'react-router-dom'
const Error = () => {
    return (
        <div>
            <h1>this is error page</h1>
            <Link to="/about">About page</Link>
            <Link to="/contact">Contact page</Link>
        </div>
    )
}

export default Error
