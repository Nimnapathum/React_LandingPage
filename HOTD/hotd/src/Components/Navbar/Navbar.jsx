import './Navbar.css'
import logo from './../../assets/sigil.png'
import { useEffect, useState } from 'react'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [sticky , setSticky] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll' , ()=>{
            window.scrollY > 500 ? setSticky(true) : setSticky(false)
        })
    } , [])
  return (
    <nav className={`container ${sticky? 'dark-nav': ''}`}>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='about' smooth={true} offset={-250} duration={500}>About</Link></li>
            <li><button className='btn'><Link to='contactus' smooth={true} offset={-250} duration={500}>Summon</Link></button></li>
        </ul>
    </nav>
  )
}

export default Navbar