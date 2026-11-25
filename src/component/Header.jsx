import React from 'react'
import './Header.css'
const Header = () => {
    return (
        <header className='Header'>
            <h3>🔍 주승재의 분실물 목록</h3>
            <h1>{new Date().toDateString()}</h1>
        </header>
    )
}

export default Header
