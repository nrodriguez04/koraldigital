import React from 'react'
import { Link } from 'react-router-dom'

//Style Import
import '../styles/About.css'

//Image Imports 


//Component Imports
import Footer from '../components/Footer'

const About = () => {
  return (
    <div className='main__content'>
    <div className='content__left'>
    <h1>Building a better tomorrow</h1>
      <p>
        Koral Digital is a full-service digital agency founded by the Rodriguez family. With over 20 years of combined experience in the industry, 
        we have a passion for helping businesses succeed online. Our team of experienced professionals is dedicated to delivering exceptional results and 
        building long-term partnerships with our clients.
      </p>
      <p>
        As a family-owned and operated business, we pride ourselves on the personal touch and individualized attention we give to each of our clients. 
        We understand that every business is unique and we work closely with our clients to understand their goals and create customized solutions to meet their needs.
      </p>
      
      <p>
        Our services include web development, digital marketing, branding, and more. We are constantly staying up-to-date with the latest industry trends and 
        techniques to ensure that we are providing the best possible service to our clients.
      </p>
      
      <p>
        Thank you for considering Koral Digital for your digital needs. We look forward to working with you and helping your business thrive online.
      </p>

      <Link to='/contact'><button href='/'>Contact</button></Link>
      <Link to='/services'><button href='/'>Services</button></Link>
    </div>

    <Footer />
</div>
  )
}

export default About

