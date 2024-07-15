import React from 'react'
import './pages.css'
import ButtonCustom from '../components/ButtonCustom'

function Home() {
  const handleClick = () => {
    alert("Button was clicked!")
  };
  return (
    <div className='pagecolor'>
    Home
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}>
        <ButtonCustom onClick={handleClick} />
      </div>
    </div>
  )
}

export default Home