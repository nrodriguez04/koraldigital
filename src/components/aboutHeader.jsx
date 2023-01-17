import React from 'react';

//Style import
import '../styles/aboutHeader.css'

//Image imports
import Logo from '../assets/Logo_12.png'

const Header = () => {
  return (
    <header className='header__content'>
        <div className="logo">
            <img src={Logo} alt="logo" className="logo__image"/>
        </div>
        <h1>About Koral Digital</h1>
    </header>
  );
};

export default Header 