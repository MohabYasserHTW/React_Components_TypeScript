import React from 'react'
import NavList from './NavList'

const Header: React.FC = () => {
  return (
    <header>
      <div className='div__logo'>
        <img src="/imgs/logo3.png" alt="Logo" width={"200px"} />
      </div>
      <nav className='div__nav'>
        <NavList />
      </nav>
    </header>
  )
}

export default Header
