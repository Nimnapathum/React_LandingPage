import './Navbar.css'
import logo from './../../assets/sigil.png'
import React , { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import Rtclock from '../Rtclock/Rtclock';

import LightModeIcon from './../../assets/light.png';
import DarkModeIcon from './../../assets/dark.png';

const Navbar = ({theme , setTheme}) => {

  const toggleMode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

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
                  {/* <button className='btn'> */}
                    <NavLink to='/contactus' onClick={() => setMobileMenu(false)}>
                      Contact Us
                    </NavLink>
                  {/* </button> */}
                </li>
                <li>
                  <Rtclock/>
                </li>
            </ul> 
            <img onClick={() => {toggleMode()}} src={theme === 'light' ? DarkModeIcon : LightModeIcon} alt='' className='toggle-icon'/>
            <div className={mobileMenu ? '' : 'menu-icon hide-mobile-menu dark-menu-icon'} onClick={toggleMenu}><MenuIcon /></div>
        </nav>
    )
}

export default Navbar