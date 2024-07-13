import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
       <Link to='/'>Home</Link>
       <Link to='/About'>About</Link>
       <Link to='/ContactUs'>Contact Us</Link> 
    </nav>
  )
}

export default Navbar