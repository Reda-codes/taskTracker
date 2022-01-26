import React from 'react'

function Header() {
    return (
        <div className='headerCon'>
            <h1 className='cenTitle'>Task Tracker</h1>
            <ul className='headerList'>
                <li><a href='./' className='liItem'>Home</a></li>
                <li><a href='./about' className='liItem'>About</a></li>
            </ul>
            
        </div>
    )
}

export default Header
