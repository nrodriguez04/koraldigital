import React from 'react'
import { Link } from 'react-router-dom'

//Icon Imports
import { AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai'
import { FaYelp } from 'react-icons/fa'
import { SiGooglemybusiness } from 'react-icons/si'

//Style Import
import '../styles/Construction.css'

//Video Import
import Aquarium from '../assets/Aquarium.mp4'

const Construction = () => {
  return (
    <div className='main'>
    <video className='bg-video' src={ Aquarium } autoPlay muted loop />
      <div className='content'>
          <h1>Koral Digital</h1>
          <p>We're currently undergoing some exciting changes here at Koral Digital! Our website is temporarily down as we work to improve our services and 
          better serve our clients. Rest assured, we'll be back and accepting new clients starting February 6th. Thank you for your patience and understanding. 
          We can't wait to show you what we've been working on!
          </p>

          <p>Please feel free to visit our Instagram (link below) and give us a follow!</p>

          <div className='media-icons'>
            <a href='https://www.instagram.com/koraldigital/' target='_blank' rel='noreferrer'><AiOutlineInstagram /></a>
            <a href='https://yelp.com/biz/koral-digital-allen' target='_blank' rel='noreferrer'><FaYelp /></a>
            <a href='https://www.google.com/search?q=koral+digital&sxsrf=ALiCzsYXtji7tCWnY8K8Gd3pLeyndl697Q%3A1659465298021&source=hp&ei=UW7pYqbROoyp5OUP-LCCwA4&iflsig=AJiK0e8AAAAAYul8YprwqCIdzlUE8vPS4BCrnPTCyElW&ved=0ahUKEwjmvej85aj5AhWMFLkGHXiYAOgQ4dUDCAk&uact=5&oq=koral+digital&gs_lp=Egdnd3Mtd2l6uAED-AEBMgQQIxgnwgIHECMY6gIYJ8ICERAuGIAEGLEDGIMBGMcBGNEDwgINEC4YsQMYxwEY0QMYCsICBRAAGIAEwgIIEAAYgAQYsQPCAggQLhixAxiDAcICFBAuGIAEGLEDGIMBGMcBGNEDGNQCwgIEEAAYQ8ICBxAuGLEDGEPCAggQLhiABBixA8ICChAAGLEDGIMBGEPCAgsQABiABBixAxiDAcICCxAuGIAEGLEDGMkDwgIFEAAYkgPCAgsQLhiABBjHARivAcICChAuGLEDGIMBGArCAggQABixAxiDAcICBBAAGArCAgcQABixAxgKwgIKEAAYsQMYgwEYCsICBRAuGIAEwgIKEAAYHhgPGBYYCsICBRAAGIYDqAIKSNgbUNgMWMAZcAF4AMgBAJABAJgB2gGgAc4SqgEGMC4xMi4x&sclient=gws-wiz' target='_blank' rel='noreferrer'><SiGooglemybusiness /></a>
            <a href='mailto: support@koraldigital.com' target='_blank' rel='noreferrer'><AiOutlineMail /></a>
          </div>
      </div>
    </div>
  )
}

export default Construction