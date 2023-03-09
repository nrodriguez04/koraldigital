import React from 'react'
import LazyHero from 'react-lazy-hero'
import { Link } from 'react-router-dom'

//Style imports
import '../styles/aboutHero.css'

//Image imports
import Buildings from '../assets/corpBuildings.jpg'


const aboutHero = () => {
  return (
    <div className='hero__container'>
    <LazyHero imageSrc={ Buildings } color='#1680AC' minHeight='60vh' isFixed='true' isCentered='false' className='lazyHero'>
      <h1>About Us</h1>
      <h5>Koral Digital is a digital development agency</h5>
      <Link to='/services'><button>Services</button></Link>
      <Link to='/contact'><button>Contact</button></Link>
    </LazyHero>

    </div>
  )
}

export default aboutHero