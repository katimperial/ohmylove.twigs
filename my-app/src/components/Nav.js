import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <div>
                <Link to="/">Home</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/twigzmaker">TwigzMaker</Link>
                <Link to="/videos">Videos</Link>
                <Link to="/gallery">Gallery</Link>
            </div>
        </nav>
    )
}

export default Nav