import React from "react"
import Navbar from "./Components/Navbar/Navbar"
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Contactus from "./pages/Contactus";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/ContactUs' element={<Contactus/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App