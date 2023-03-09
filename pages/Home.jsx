import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


//Icon Imports
import { AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai'
import { FaYelp } from 'react-icons/fa'
import { SiGooglemybusiness } from 'react-icons/si'
import { BsArrowRight } from 'react-icons/bs'

//Style Import
import '../styles/Home.css'

//Video Import
import Coral from '../assets/coralHome.mp4'

const Home = () => {
  return (
    <motion.div
    className="home"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
    <div className='main'>
    <video className='bg-video' src={ Coral } autoPlay muted loop />
      <div className='content'>
          <h1>ALL IN ONE BUSINESS SOLUTION</h1>
          <p>At Koral Digital, our mission is to help businesses of all sizes thrive in the digital world. 
          We offer a full range of digital marketing and web design services to help our clients reach their goals and stand out online. 
          Our team of experienced professionals is dedicated to delivering exceptional results and building long-term partnerships with our clients. 
          We strive to stay at the forefront of digital innovation and continually evolve our services to meet the changing needs of our clients and the industry.
          </p>
          <Link to='/about'><button href='/'>Learn More <BsArrowRight /></button></Link>

          <div className='media-icons'>
            <a href='https://www.instagram.com/koraldigital/' target='_blank' rel='noreferrer'><AiOutlineInstagram /></a>
            <a href='https://yelp.com/biz/koral-digital-allen' target='_blank' rel='noreferrer'><FaYelp /></a>
            <a href='https://www.google.com/search?q=koral+digital&sxsrf=ALiCzsYXtji7tCWnY8K8Gd3pLeyndl697Q%3A1659465298021&source=hp&ei=UW7pYqbROoyp5OUP-LCCwA4&iflsig=AJiK0e8AAAAAYul8YprwqCIdzlUE8vPS4BCrnPTCyElW&ved=0ahUKEwjmvej85aj5AhWMFLkGHXiYAOgQ4dUDCAk&uact=5&oq=koral+digital&gs_lp=Egdnd3Mtd2l6uAED-AEBMgQQIxgnwgIHECMY6gIYJ8ICERAuGIAEGLEDGIMBGMcBGNEDwgINEC4YsQMYxwEY0QMYCsICBRAAGIAEwgIIEAAYgAQYsQPCAggQLhixAxiDAcICFBAuGIAEGLEDGIMBGMcBGNEDGNQCwgIEEAAYQ8ICBxAuGLEDGEPCAggQLhiABBixA8ICChAAGLEDGIMBGEPCAgsQABiABBixAxiDAcICCxAuGIAEGLEDGMkDwgIFEAAYkgPCAgsQLhiABBjHARivAcICChAuGLEDGIMBGArCAggQABixAxiDAcICBBAAGArCAgcQABixAxgKwgIKEAAYsQMYgwEYCsICBRAuGIAEwgIKEAAYHhgPGBYYCsICBRAAGIYDqAIKSNgbUNgMWMAZcAF4AMgBAJABAJgB2gGgAc4SqgEGMC4xMi4x&sclient=gws-wiz' target='_blank' rel='noreferrer'><SiGooglemybusiness /></a>
            <a href='mailto: support@koraldigital.com' target='_blank' rel='noreferrer'><AiOutlineMail /></a>
          </div>
      </div>
    </div>
    </motion.div>
  )
}

export default Home