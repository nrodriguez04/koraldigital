import React, { useState } from 'react'
import {Link} from 'react-router-dom'

//Logo Import
import Logo from '../assets/Logo_3.png'

//Style Import
import '../styles/Nav.css'

//Icon Imports
import { AiOutlineInstagram, AiOutlineMail, AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaYelp } from 'react-icons/fa'
import { SiGooglemybusiness } from 'react-icons/si'



function Nav() {
  const [nav, setNav] = useState(false)
  const handleNav = () => setNav(!nav)

  return (
    <nav className='nav'>
      <Link to='/' className='site-title'><img src={Logo} alt='logo' /></Link>

      <div className='nav-menu'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/services'>Services</Link>
          </li>
          <li>
            <Link to='/portfolio'>Portfolio</Link>
          </li>
          <li>
            <Link to='/koralinitiative'>The Koral Initiative</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>

      <div className='hamburger' onClick={handleNav}>
        {!nav ? (<GiHamburgerMenu className='icon' />) : (<AiOutlineClose className='icon' />)}
      </div>

      <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
        <ul className='mobile-nav'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/services'>Services</Link>
          </li>
          <li>
            <Link to='/portfolio'>Portfolio</Link>
          </li>
          <li>
            <Link to='/koralinitiative'>The Koral Initiative</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>

        <div className='social-icons'>
          <ul>
            <li><a href='https://instagram.com' target='_blank' rel='noreferrer'><AiOutlineInstagram /></a></li>
            <li><a href='https://yelp.com' target='_blank' rel='noreferrer'><FaYelp /></a></li>
            <li><a href='https://www.google.com/search?q=koral+digital&sxsrf=ALiCzsYXtji7tCWnY8K8Gd3pLeyndl697Q%3A1659465298021&source=hp&ei=UW7pYqbROoyp5OUP-LCCwA4&iflsig=AJiK0e8AAAAAYul8YprwqCIdzlUE8vPS4BCrnPTCyElW&ved=0ahUKEwjmvej85aj5AhWMFLkGHXiYAOgQ4dUDCAk&uact=5&oq=koral+digital&gs_lp=Egdnd3Mtd2l6uAED-AEBMgQQIxgnwgIHECMY6gIYJ8ICERAuGIAEGLEDGIMBGMcBGNEDwgINEC4YsQMYxwEY0QMYCsICBRAAGIAEwgIIEAAYgAQYsQPCAggQLhixAxiDAcICFBAuGIAEGLEDGIMBGMcBGNEDGNQCwgIEEAAYQ8ICBxAuGLEDGEPCAggQLhiABBixA8ICChAAGLEDGIMBGEPCAgsQABiABBixAxiDAcICCxAuGIAEGLEDGMkDwgIFEAAYkgPCAgsQLhiABBjHARivAcICChAuGLEDGIMBGArCAggQABixAxiDAcICBBAAGArCAgcQABixAxgKwgIKEAAYsQMYgwEYCsICBRAuGIAEwgIKEAAYHhgPGBYYCsICBRAAGIYDqAIKSNgbUNgMWMAZcAF4AMgBAJABAJgB2gGgAc4SqgEGMC4xMi4x&sclient=gws-wiz' target='_blank' rel='noreferrer'><SiGooglemybusiness /></a></li>
            <li><a href='mailto: nrodriguez@koraldigital.com' target='_blank' rel='noreferrer'><AiOutlineMail /></a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

