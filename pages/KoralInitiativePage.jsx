import React from 'react';
import { motion } from 'framer-motion';

//Component imports
import Footer from '../components/Footer'
import KoralHeader from '../components/KoralHeader';

// Style import
import '../styles/KoralInitiativePage.css';

// Image imports
import Fish from '../assets/fishCoral.mp4'
import CoralLogo from '../assets/CoralRestoration.jpg'


const KoralInitiativePage = () => {
  return (
    <motion.div
    className="about"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
    <div>
      <KoralHeader />

      <section id="about-coral">
        <h2>About Coral</h2>
        <p>What is coral?</p>
        <div className="coral-content">
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
        <div class="coral-image-container">
          <video src={Fish} autoPlay loop muted alt="Coral dwelling fish"></video>
        </div>
        </div>
      </section>

      <section id="coral-reefs-disappearing">
        <h2>Coral Reefs Are Disappearing</h2>
        <p>Coral reefs are one of the world's most important and diverse ecosystems, but they are facing significant threats and are disappearing at an alarming rate. Coral reefs are under stress from a combination of factors, including climate change, ocean acidification, overfishing, and pollution. Rising ocean temperatures cause coral to experience bleaching events, which occur when the coral expels its symbiotic algae, leaving it white and vulnerable to death. Oceanacidification, caused by the absorption of excess carbon dioxide from the atmosphere, also makes it difficult for coral to build and maintain its hard calcium carbonate skeleton.</p>
        <p>The Great Barrier Reef, located off the coast of Australia, is one of the world's largest and most well-known coral reef systems. It is facing unprecedented levels of stress, with multiple mass bleaching events in the past few years. In 2020, a report from the Australian government estimated that over half of the Great Barrier Reef's coral has died in the past three decades, and that the situation is likely to worsen in the coming years.</p>
        <p>The loss of coral reefs has far-reaching consequences, as they provide habitats for a vast array of marine species, support fisheries, protect coastal communities from storms, and generate tourism income. The continued loss of coral reefs highlights the urgent need for global action to reduce carbon emissions and address the other drivers of coral decline.</p>
        </section>

        <section id="koral-digital">
        <h2>Koral Digital and The Koral Initiative</h2>
        <p>At Koral Digital we understand the value and necessity of coral in the ocean’s ecosystem. The Koral Initiative is a plan of action to contribute to the research and preservation of coral reefs worldwide. For each project we take on, we will be donating a percentage to fund coral reef preservation through our partnership with the Coral Restoration Foundation.</p>
        <p>Please feel free to visit the <a href="https://coralrestoration.org/" target="_blank" rel='noreferrer'>Coral Restoration Foundation</a> for more information on their program and efforts of conservation.</p>
        <a href="https://coralrestoration.org/" target="_blank" rel='noreferrer' className="button"><img src={CoralLogo} alt="Coral Restoration Foundation Logo"/></a>
      </section>

      <Footer />
    </div>
    </motion.div>
    );
};

export default KoralInitiativePage;