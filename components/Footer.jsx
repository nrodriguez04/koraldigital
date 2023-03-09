import React from 'react';

//Style imports
import '../styles/Footer.css'

//Icon Imports
import { AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai'
import { FaYelp } from 'react-icons/fa'
import { SiGooglemybusiness } from 'react-icons/si'

function Footer() {
  return (
    <footer>
      <div className="container">
        <p>Copyright © {new Date().getFullYear()} <a href="http://www.koraldigital.com" target="_blank" rel="noreferrer">Koral Digital</a></p>
        <div className='media-icons'>
            <a href='https://www.instagram.com/koraldigital/' target='_blank' rel='noreferrer'><AiOutlineInstagram /></a>
            <a href='https://yelp.com/biz/koral-digital-allen' target='_blank' rel='noreferrer'><FaYelp /></a>
            <a href='https://www.google.com/search?q=koral+digital&sxsrf=ALiCzsYXtji7tCWnY8K8Gd3pLeyndl697Q%3A1659465298021&source=hp&ei=UW7pYqbROoyp5OUP-LCCwA4&iflsig=AJiK0e8AAAAAYul8YprwqCIdzlUE8vPS4BCrnPTCyElW&ved=0ahUKEwjmvej85aj5AhWMFLkGHXiYAOgQ4dUDCAk&uact=5&oq=koral+digital&gs_lp=Egdnd3Mtd2l6uAED-AEBMgQQIxgnwgIHECMY6gIYJ8ICERAuGIAEGLEDGIMBGMcBGNEDwgINEC4YsQMYxwEY0QMYCsICBRAAGIAEwgIIEAAYgAQYsQPCAggQLhixAxiDAcICFBAuGIAEGLEDGIMBGMcBGNEDGNQCwgIEEAAYQ8ICBxAuGLEDGEPCAggQLhiABBixA8ICChAAGLEDGIMBGEPCAgsQABiABBixAxiDAcICCxAuGIAEGLEDGMkDwgIFEAAYkgPCAgsQLhiABBjHARivAcICChAuGLEDGIMBGArCAggQABixAxiDAcICBBAAGArCAgcQABixAxgKwgIKEAAYsQMYgwEYCsICBRAuGIAEwgIKEAAYHhgPGBYYCsICBRAAGIYDqAIKSNgbUNgMWMAZcAF4AMgBAJABAJgB2gGgAc4SqgEGMC4xMi4x&sclient=gws-wiz' target='_blank' rel='noreferrer'><SiGooglemybusiness /></a>
            <a href='mailto: support@koraldigital.com' target='_blank' rel='noreferrer'><AiOutlineMail /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
