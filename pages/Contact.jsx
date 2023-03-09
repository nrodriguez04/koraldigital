import React from 'react'
import { motion } from 'framer-motion'

//Style import 
import '../styles/Contact.css'

//Component import
import ContactForm from '../components/contactForm'
import Footer from '../components/Footer'

//Icon imports
import { AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai'
import { FaYelp } from 'react-icons/fa'
import { SiGooglemybusiness } from 'react-icons/si'
import { AiFillPhone } from 'react-icons/ai'

const Contact = () => {
  return (
    <motion.div
    className="about"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
    <div className="contact__page">
    <div className="contact__content">
      <div className='contact__form'>
        <h3>Contact:</h3>
        <ContactForm />
      </div>

      <div className="contact__info">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340.9294008523107!2d-96.72903408441836!3d33.137219272838024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c16476c539b77%3A0xf21c6522ff34fb7b!2s8751%20Collin%20McKinney%20Pkwy%20STE%201102%2C%20McKinney%2C%20TX%2075070!5e0!3m2!1sen!2sus!4v1675469061596!5m2!1sen!2sus" 
      width="600" 
      height="450" 
      style={{ border: 0 }} 
      allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade"
      title="koralAddress" />
        <h5>Koral Digital</h5>
        <a href="tel:+14692876834"><p><AiFillPhone />+1 (469) 287 6834</p></a>
        <a href='mailto: support@koraldigital.com' target='_blank' rel='noreferrer'><p><AiOutlineMail />support@koraldigital.com</p></a>
        <div className='address'>
          <p>8751 Collin Mckinney Pkwy Ste 1102 PMB 54, Mckinney, TX 75070, United States</p>
          <p>Mckinney, TX 75070, United States</p>
        </div>

        <div className='media__icons'>
          <a href='https://www.instagram.com/koraldigital/' target='_blank' rel='noreferrer'><AiOutlineInstagram /></a>
          <a href='https://yelp.com/biz/koral-digital-allen' target='_blank' rel='noreferrer'><FaYelp /></a>
          <a href='https://www.google.com/search?q=koral+digital&sxsrf=ALiCzsYXtji7tCWnY8K8Gd3pLeyndl697Q%3A1659465298021&source=hp&ei=UW7pYqbROoyp5OUP-LCCwA4&iflsig=AJiK0e8AAAAAYul8YprwqCIdzlUE8vPS4BCrnPTCyElW&ved=0ahUKEwjmvej85aj5AhWMFLkGHXiYAOgQ4dUDCAk&uact=5&oq=koral+digital&gs_lp=Egdnd3Mtd2l6uAED-AEBMgQQIxgnwgIHECMY6gIYJ8ICERAuGIAEGLEDGIMBGMcBGNEDwgINEC4YsQMYxwEY0QMYCsICBRAAGIAEwgIIEAAYgAQYsQPCAggQLhixAxiDAcICFBAuGIAEGLEDGIMBGMcBGNEDGNQCwgIEEAAYQ8ICBxAuGLEDGEPCAggQLhiABBixA8ICChAAGLEDGIMBGEPCAgsQABiABBixAxiDAcICCxAuGIAEGLEDGMkDwgIFEAAYkgPCAgsQLhiABBjHARivAcICChAuGLEDGIMBGArCAggQABixAxiDAcICBBAAGArCAgcQABixAxgKwgIKEAAYsQMYgwEYCsICBRAuGIAEwgIKEAAYHhgPGBYYCsICBRAAGIYDqAIKSNgbUNgMWMAZcAF4AMgBAJABAJgB2gGgAc4SqgEGMC4xMi4x&sclient=gws-wiz' target='_blank' rel='noreferrer'><SiGooglemybusiness /></a>
          <a href='mailto: support@koraldigital.com' target='_blank' rel='noreferrer'><AiOutlineMail /></a>
        </div>
      </div>
    </div>
    <Footer />
    </div>
    </motion.div>
  )
}

export default Contact