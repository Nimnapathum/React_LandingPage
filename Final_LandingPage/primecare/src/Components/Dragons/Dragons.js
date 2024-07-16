import './Dragons.css'
import d1 from './../../assets/d1.jpeg'
import d2 from './../../assets/d2.jpeg'
//import d3 from './../../assets/d3.jpeg'
//import d4 from './../../assets/d4.jpeg'
import d5 from './../../assets/d5.jpeg'
import d6 from './../../assets/d6.jpeg'
import d7 from './../../assets/d7.jpeg'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React from "react"

const Dragons = () => {
  return (
    <div className='dragons'>
        <div className='gallery'>
            <img src={d1} alt=''/>
            <img src={d6} alt=''/>
            <img src={d2} alt=''/>
            <img src={d7} alt=''/>
            <img src={d5} alt=''/>
        </div>
        <button className='btn dark-btn'>See more <div className='btnSetup'><MoreHorizIcon/></div></button>
    </div>
  )
}

export default Dragons