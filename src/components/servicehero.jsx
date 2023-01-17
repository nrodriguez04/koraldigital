import React from 'react'
import LazyHero from 'react-lazy-hero'

//Style imports
import '../styles/aboutHero.css'

//Image imports
import Buildings from '../assets/corpBuildings.jpg'


const serviceHero = () => {
  return (
    <div className='hero__container'>
    <LazyHero imageSrc={ Buildings }>
      <h4>Services</h4>
    </LazyHero>

    </div>
  )
}

export default serviceHero