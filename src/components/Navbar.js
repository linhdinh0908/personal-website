
   
import React from 'react'

function Navbar() {
    return (
        <header>
            <div className='header-inner'>
                <div className='logo'>LINH DINH</div>
                <nav>
                <ul>
                    <li>
                    <a href='/'>About</a>
                    </li>
                    <li>
                    <a href='/'>Projects</a>
                    </li>
                    <li className='btn'>
                    <a href='/'>Contact Me</a>
                    </li>
                </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar