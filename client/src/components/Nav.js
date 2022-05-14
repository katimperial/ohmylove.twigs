import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <div>
                <Link to="/" className='link'>Home</Link>
                <Link to="/blog" className='link'>Blog</Link>
                <Link to="/twigzmaker" className='link'>TwigzMaker</Link>
                <Link to="/videos" className='link'>Videos</Link>
                <Link to="/gallery" className='link'>Gallery</Link>
            </div>
        </nav>
    )
}

export default Nav