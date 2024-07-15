// import React from 'react'
// import './Header.css'
// // import AppBar from '@mui/material/AppBar';
// // import Toolbar from '@mui/material/Toolbar';
// // import IconButton from '@mui/material/IconButton';
// // import Brightness4Icon from '@mui/icons-material/Brightness4';
// // import Brightness7Icon from '@mui/icons-material/Brightness7';
// //import { useTheme } from './../themecontext';
// import Navbar from './Navbar'
// import logo from './../assets/logo.png'
// import { Link } from 'react-router-dom'

// function Header() {
//   //const {darkMode, toggleTheme} = useTheme();
//   return (
//     // <AppBar position="static">
//     //   <Toolbar className='header'>
//     //     <img src={logo} className='logo' alt='logo' />
//     //     <Navbar />
//     //     <IconButton edge="end" color="inherit" aria-label="mode" onClick={toggleTheme}>
//     //       {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
//     //     </IconButton>
//     //   </Toolbar>
//     // </AppBar>
//     <div className='header'>
//       {/* <img src={logo} className='logo' alt='logo'/> */}
//       <Link to='/'><span className='nameFormat'>Nimna's <span className='in-cube'>Blog</span></span></Link>
//       <Navbar/>
//     </div>
//   )
// }

// export default Header

import React , {useState} from 'react'
import './Header.css'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import { Button } from '@mui/material'

function Header() {
  const [theme , setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))

  }

  return (
    <div className='header'>
      <Link to='/' className='nameFormat'><span>Nimna's <span className=''>Blog</span></span></Link>
      <Navbar/>
      <Button onClick={toggleTheme}> 
        {theme === 'light' ? <WbSunnyIcon/> : <DarkModeIcon/> }
      </Button>
    </div>
  )
}

export default Header