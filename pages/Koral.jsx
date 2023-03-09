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

        <h2>About Coral</h2>
        <h4>What is coral?</h4>
        <ul>
          <li>Coral is a marine animal and a type of invertebrate.</li>
          <li>It is found in tropical and subtropical oceans.</li>
          <li>Coral is the primary building block of coral reefs, which are important habitats for a diverse range of marine species.</li>
          <li>Coral forms colonies of individual polyps that secrete a hard, calcium carbonate exoskeleton.</li>
          <li>Coral is a photosynthetic organism and forms a symbiotic relationship with algae, called zooxanthellae.</li>
          <li>Coral is sensitive to changes in water temperature and quality, making it an indicator of the health of marine ecosystems.</li>
          <li>Coral is threatened by climate change, ocean acidification, and overfishing.</li>
          <li>Coral plays an important role in ocean health and supports many fisheries, tourism industries, and coastal protection.</li>
          <li>Coral can also be used in medical research, as some compounds produced by coral have shown potential as cancer treatments.</li>
          <li>Coral is considered an endangered species, with many populations declining rapidly in recent years.</li>
        </ul>

        <h4>Coral Reefs Are Disappearing</h4>
        <p>Coral reefs are one of the world's most important and diverse ecosystems, but they are facing significant threats and are disappearing at an alarming rate. 
        Coral reefs are under stress from a combination of factors, including climate change, ocean acidification, overfishing, and pollution. Rising ocean temperatures
         cause coral to experience bleaching events, which occur when the coral expels its symbiotic algae, leaving it white and vulnerable to death. 
         Ocean acidification, caused by the absorption of excess carbon dioxide from the atmosphere, also makes it difficult for coral to build and maintain its hard 
         calcium carbonate skeleton.</p>

        <p>The Great Barrier Reef, located off the coast of Australia, is one of the world's largest and most well-known coral reef systems. 
        It is facing unprecedented levels of stress, with multiple mass bleaching events in the past few years. In 2020, a report from the 
        Australian government estimated that over half of the Great Barrier Reef's coral has died in the past three decades, and that the situation is likely 
        to worsen in the coming years.</p>
        
        <p>The loss of coral reefs has far-reaching consequences, as they provide habitats for a vast array of marine species, support fisheries, protect coastal 
        communities from storms, and generate tourism income. The continued loss of coral reefs highlights the urgent need for global action to reduce carbon emissions 
        and address the other drivers of coral decline.</p>

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