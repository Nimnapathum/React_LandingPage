import './Navbar.css'
import logo from './../../assets/sigil.png'
import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 500 ? setSticky(true) : setSticky(false)
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
                <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='about' smooth={true} offset={-250} duration={500}>About</Link></li>
                <li><button className='btn'><Link to='contactus' smooth={true} offset={-250} duration={500}>Summon</Link></button></li>
            </ul>
            <div className={mobileMenu ? '' : 'menu-icon hide-mobile-menu dark-menu-icon'} onClick={toggleMenu}><MenuIcon /></div>
        </nav>
    )
}

export default Navbar