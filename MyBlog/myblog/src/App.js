import './App.css';
import React from 'react'
import Header from './components/Header';
import Home from './pages/Home'; 
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import { ThemeContext } from '@emotion/react';

function App() {
  return (
    //<ThemeContext>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
      </Routes>
      </BrowserRouter>
    //</ThemeContext>   
    //<Header/>
  );
}

export default App;
