import React from 'react'
//import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

//Style Import
import '../styles/About.css'

//Image Imports 

//Icon Imports
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from 'react-icons/ri'

//Component Imports
import Footer from '../components/Footer'

const About = () => {
  return (
    <motion.div
    className="about"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
    <div className='main__content'>
    <div className='content__left'>
    <h1>Building a better tomorrow</h1>
    <h3>Our mission</h3>
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

    <h3>What makes us unique?</h3>
    <p>Koral Digital is a one-of-a-kind digital media agency that offers a complete business solution for businesses looking to grow their online presence. 
    With our all-in-one approach, we provide a wide range of services, including website design and development, search engine optimization, social media marketing,
    and more, to help businesses establish and enhance their digital footprint. Our team of experts stays up-to-date with the latest trends and technologies to ensure
    that our clients receive cutting-edge solutions that drive real results. With Koral Digital, businesses can trust that their online presence is in good hands.</p>
    </div>

    <h3>Our Process</h3>
    <div className="process">
      <RiNumber1 />
      <h3>Research</h3>
      <p>We will research you market, project, and potential competitors in order to develop an optimal strategy for your business.</p>
      <h5>Deliverables:</h5>
      <ul>
        <li>Research data chart</li>
        <li>Research documentation</li>
        <li>List of local competitors</li>
        <li>Potential Marketing Strategy</li>
      </ul>
    </div>

    <div className="process">
    <RiNumber2 />
    <h3>Design</h3>
    <p>We will research you market, project, and potential competitors in order to develop an optimal strategy for your business.</p>
    <h5>Deliverables:</h5>
    <ul>
      <li>Research data chart</li>
      <li>Research documentation</li>
      <li>List of local competitors</li>
      <li>Potential Marketing Strategy</li>
    </ul>
    </div>

    <div className="process">
    <RiNumber3 />
    <h3>Development</h3>
    <p>We will research you market, project, and potential competitors in order to develop an optimal strategy for your business.</p>
    <h5>Deliverables:</h5>
    <ul>
      <li>Research data chart</li>
      <li>Research documentation</li>
      <li>List of local competitors</li>
      <li>Potential Marketing Strategy</li>
    </ul>
    </div>

    <div className="process">
    <RiNumber4 />
    <h3>Hosting & Maintenance</h3>
    <p>We will research you market, project, and potential competitors in order to develop an optimal strategy for your business.</p>
    <h5>Deliverables:</h5>
    <ul>
      <li>Research data chart</li>
      <li>Research documentation</li>
      <li>List of local competitors</li>
      <li>Potential Marketing Strategy</li>
    </ul>
    </div>

    <h3>Our Services</h3>
    <p>A list of the services we offer in order to help build your business</p>
    <div className="services">
      <h4>Marketing</h4>
      <ul>
        <li>Market Research</li>
        <li>SEO</li>
        <li>Advertising Strategy</li>
        <li>Advertising Design</li>
      </ul>
    </div>

    <div className="services">
      <h4>Branding</h4>
      <ul>
        <li>Market Research</li>
        <li>SEO</li>
        <li>Advertising Strategy</li>
        <li>Advertising Design</li>
      </ul>
    </div>

    <div className="services">
      <h4>Development</h4>
      <ul>
        <li>Market Research</li>
        <li>SEO</li>
        <li>Advertising Strategy</li>
        <li>Advertising Design</li>
      </ul>
    </div>

    <div className="services">
      <h4>Maintenance</h4>
      <ul>
        <li>Market Research</li>
        <li>SEO</li>
        <li>Advertising Strategy</li>
        <li>Advertising Design</li>
      </ul>
    </div>

    

    <Footer />
</div>
</motion.div>
  )
}

export default About

