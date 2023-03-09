import React from 'react'
import { motion } from 'framer-motion'

//Style import
import '../styles/Portfolio.css'

//Component imports
import Footer from '../components/Footer'

const Portfolio = () => {
  return (
    <motion.div
    className="about"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
    <div className="portfolio__page">
      <div className="portfolio__content">
        <h2>Portfolio</h2>
        <h4>coming soon...</h4>
      </div>
      <Footer />
    </div>
    </motion.div>
  )
}

export default Portfolio