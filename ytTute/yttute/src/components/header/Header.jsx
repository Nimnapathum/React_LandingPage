import './Header.css'
import logo from './../../assets/letter-n.png'
import Menulink from '../MenuLink/Menulink'

function Header() {
    return (
        <div className="navcontent">
            <a href='/'>
                <img src={logo} alt='N' className='pic'/>
            </a>
            <div>
                <Menulink linkname="Home" url="/"/>
                <Menulink linkname="About" url="/About"/>
                <Menulink linkname="ContactUs" url="/ContactUs"/>
            </div>
            
        </div>
    );
}

export default Header