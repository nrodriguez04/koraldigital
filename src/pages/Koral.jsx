import React from 'react'

//Style import
import '../styles/Koral.css'

//Component imports
import Footer from '../components/Footer'

//Image import
import Diver from '../assets/diver_stock.jpg'

const Koral = () => {
  return (
    <div className="koral__main">
    <div className="koral__content">
      <div className="foundation__image">
        <img src={Diver} alt="diver" className="diver__image"/>
      </div>
      <div className="koral__about">
        <h3>The Koral Initiative</h3>
        <p>Coral reefs are important for a number of reasons. They are home to a diverse array of marine life, including many species of fish, invertebrates, and 
        other organisms. Coral reefs also provide important ecosystem services, such as protecting coastlines from storms and erosion, providing food for local 
        communities, and supporting tourism and recreation. In addition, coral reefs are important indicators of the health of the ocean and play a crucial role in 
        the global carbon cycle. They absorb and store large amounts of carbon dioxide from the atmosphere, helping to mitigate the impacts of climate change.</p>

        <p>At Koral Digital we understand the value and necessity of coral in the ocean’s ecosystem. The Koral Initiative is a plan of action to contribute to the 
        research and preservation of coral reefs worldwide. For each project we take on, we will be donating a percentage to fund coral reef preservation through our 
        partnership with the Coral Restoration Foundation.</p>

        <p>Please feel free to visit the Coral Restoration Foundation for more information on their program and efforts of conservation.</p>

        <button className="foundation__button"><a href={"https://www.coralrestoration.org/"} target="_blank" rel="noreferrer">Coral Restoration</a></button>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default Koral