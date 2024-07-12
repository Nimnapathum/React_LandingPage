import { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [menu , setMenu] = useState("Home");

  return (
    <div className='navbar'>
         <h3>LandingPage</h3>
         <ul className="navbar-menu">
            <li onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</li>
            <li onClick={()=>setMenu("About")} className={menu==="About"?"active":""}>About</li>
            <li onClick={()=>setMenu("ContactUs")} className={menu==="ContactUs"?"active":""}>Contact Us</li>      </ul>
         <button>Sign In</button>
    </div>
  )
}

export default Navbar