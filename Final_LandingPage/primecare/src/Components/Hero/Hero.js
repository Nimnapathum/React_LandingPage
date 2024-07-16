import './Hero.css'
import ReadMoreIcon from '@mui/icons-material/ReadMore'
import React from "react"

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>The Greatest House in the World</h1>
            <p>
            House Targaryen of King`s Landing, known poetically as the House of the Dragon, is the royal house of the Seven Kingdoms of Westeros. A century ago, House Targaryen conquered and unified the realm under the leadership of Aegon the Conqueror and his sister-queens Visenya and Rhaenys.
            </p>
            <button className='btn'>Explore More <div className='btnSetup'><ReadMoreIcon /></div></button>
        </div>
    </div>
  )
}

export default Hero