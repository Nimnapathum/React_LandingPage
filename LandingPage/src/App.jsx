import Navbar from './components/navbar/Navbar'
// import { Route , Routes } from 'react-router-dom'
// import Home from './pages/Home'
// import About from './pages/About'
// import ContactUs from './pages/ContactUs'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      {/* <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
      </Routes> */}
    </div>
  )
}

export default App