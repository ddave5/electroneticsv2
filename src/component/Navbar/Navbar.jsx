import React, {useState} from 'react'
import './navbar.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import Logo from '../../assets/images/logo/logo_white.png'
import { Link } from "react-router-dom"

const Navbar = () => {

  let [isActive, setActive] = useState(true);

  return (
    <nav id="nav" className={isActive ? null : "active"}>
      <div className='logo__container'>
        <Link to='/' className='logo__image' onClick={() => setActive(true)}>
          <img src={Logo} alt='logo'/>
          <p>Electro Netics Kft.</p>
        </Link>
        <p onClick={() => setActive(!isActive)}><GiHamburgerMenu/></p>
      </div>
      <div className="navbar__menu">
        <ul className='menu__container'>
          <li><Link to='/about' onClick={() => setActive(true)}>Rólunk</Link></li>
          <li><Link to='/services' onClick={() => setActive(true)}>Szolgáltatásaink</Link></li>
          <li><Link to='/prices' onClick={() => setActive(true)}>Árlista</Link></li>
          <li><Link to='/contact' onClick={() => setActive(true)}>Kapcsolat</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar