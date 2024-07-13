import React from 'react'
import './Header.css'
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';
//import { useTheme } from './../themecontext';
import Navbar from './Navbar'
import logo from './../assets/logo.png'

function Header() {
  //const {darkMode, toggleTheme} = useTheme();
  return (
    // <AppBar position="static">
    //   <Toolbar className='header'>
    //     <img src={logo} className='logo' alt='logo' />
    //     <Navbar />
    //     <IconButton edge="end" color="inherit" aria-label="mode" onClick={toggleTheme}>
    //       {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
    //     </IconButton>
    //   </Toolbar>
    // </AppBar>
    <div className='header'>
      <img src={logo} className='logo' alt='logo'/>
      <Navbar/>
    </div>
  )
}

export default Header