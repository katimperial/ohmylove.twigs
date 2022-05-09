import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <nav>
            <div>
                <Link to="/login">Log In</Link>
            </div>
        </nav>
    )
}

export default Sidebar