import './Hero.css'
import play from './../../assets/play.png'
import pause from './../../assets/pause.png'
import arrow from './../../assets/next.png'

const Hero = ({heroData , setHeroCount , heroCount , setPlayStatus , playStatus}) => {
  return (
    <div className='hero'>
        <div className="hero-text">
            <p>{heroData.text1}</p>
            <p>{heroData.text2}</p>
        </div>
        <div className="hero-explore">
            <p>Explore the features</p>
            <img src={arrow} height="50px" width="50px" alt=""/>
        </div>
        <div className="hero-dot-play">
            <ul className="hero-dots">
                <li onClick={()=>setHeroCount(0)} className={heroCount===0?"hero-dot orange": "hero-dot"}></li>
                <li onClick={()=>setHeroCount(1)} className={heroCount===1?"hero-dot orange": "hero-dot"}></li>
                <li onClick={()=>setHeroCount(2)} className={heroCount===2?"hero-dot orange": "hero-dot"}></li>
            </ul>
        </div>
        <div className="hero-play">
            <img onClick={()=> setPlayStatus(!playStatus)} src={playStatus?pause:play} height="50px" width="50px" alt=""/>
            <p>See the video</p>
        </div>
    </div>
  )
}

export default Hero