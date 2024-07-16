import './Navbar.css'
import logo from './../../assets/sigil.png'
import React , { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > -10 ? setSticky(true) : setSticky(false)
        })
    }, [])

    const [mobileMenu, setMobileMenu] = useState(false)
    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
    }
    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt="" className='logo' />
            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                {/* <li><NavLink exact to='/'>Home</NavLink></li>
                <li><NavLink to='/About'>About</NavLink></li>
                <li><button className='btn'><NavLink to='/ContactUs'>Contact Us</NavLink></button></li>
             */}
                <li>
          <NavLink exact to='/' onClick={() => setMobileMenu(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' onClick={() => setMobileMenu(false)}>
            About
          </NavLink>
        </li>
        <li>
          <button className='btn'>
            <NavLink to='/contactus' onClick={() => setMobileMenu(false)}>
              Contact Us
            </NavLink>
          </button>
        </li>

            </ul> 
            <div className={mobileMenu ? '' : 'menu-icon hide-mobile-menu dark-menu-icon'} onClick={toggleMenu}><MenuIcon /></div>
        </nav>
    )
}

export default Navbar