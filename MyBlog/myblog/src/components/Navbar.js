import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import CallIcon from '@mui/icons-material/Call'

const Navbar = () => {
  return (
    <nav className='navbar'>
       <Link to='/'><HomeIcon/>Home</Link>
       <Link to='/About'><InfoIcon/>About</Link>
       <Link to='/ContactUs'><CallIcon/>Contact Us</Link> 
    </nav>
  )
}

export default Navbar