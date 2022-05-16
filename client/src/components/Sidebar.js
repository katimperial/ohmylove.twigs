import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='sidebarTotal'>
            <div className='side-info'>
                <a href="https://www.fkatwigsofficial.com" className='sidebar-link'>
                    <img src="https://i.imgur.com/xpo90aE.png"/>
                </a>
                <a href="https://www.youtube.com/c/fkatwigs" className='sidebar-link'>
                    <img src="https://i.imgur.com/aJncxpo.gif"/>
                </a>
                <a href="https://store.fkatwigsofficial.com/" className="store-link">
                    Store
                </a>
            </div>
        </div>
    )
}

export default Sidebar