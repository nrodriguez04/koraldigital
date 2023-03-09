import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

//Style Import
import '../styles/About.css'

//Image Imports 
import Agency from '../assets/AIDigital.png'

//Icon Imports
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from 'react-icons/ri'
import { FaWrench } from 'react-icons/fa'
//import { GrCloudComputer } from 'react-icons/gr'
import { GiProcessor } from 'react-icons/gi'

//Component Imports
import AboutPageHeader from '../components/AboutHeader'
import ProcessCard from '../components/processCard'
import Footer from '../components/Footer'
import ProjectSlider from '../components/ProjectSlider'

const projects = [
  {
    title: 'Project 1',
    description: 'Description for project 1',
    image: 'https://via.placeholder.com/300x200'
  },
  {
    title: 'Project 2',
    description: 'Description for project 2',
    image: 'https://via.placeholder.com/300x200'
  },
  {
    title: 'Project 3',
    description: 'Description for project 3',
    image: 'https://via.placeholder.com/300x200'
  }
];


const About = () => {
  return (
    <motion.div
    className="about"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
    <div className='main__content'>
    <AboutPageHeader />
    <section className="about_section">
    <div className='section__text'>
    <h1 className='section__title'>Building a better tomorrow</h1>
    <h3 className='section__subtitle'>Our mission</h3>
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

    <h3 className='section__subtitle'>What makes us unique?</h3>
    <p>Koral Digital is a one-of-a-kind digital media agency that offers a complete business solution for businesses looking to grow their online presence. 
    With our all-in-one approach, we provide a wide range of services, including website design and development, search engine optimization, social media marketing,
    and more, to help businesses establish and enhance their digital footprint. Our team of experts stays up-to-date with the latest trends and technologies to ensure
    that our clients receive cutting-edge solutions that drive real results. With Koral Digital, businesses can trust that their online presence is in good hands.</p>

          
    <p>
      Thank you for considering Koral Digital for your digital needs. We look forward to working with you and helping your business thrive online.
    </p>
    </div>
    <div className='section__image-container'>
      <img src={Agency} alt='agency' className='section__image'/>
    </div>
    </section>

    <section className="process_section">
    <h3><GiProcessor /> Our Process</h3>
    <div className='process__container'>
    <ProcessCard
    number={<RiNumber1 />}
    title="Research"
    description="We will research your market, project, and potential competitors in order to develop an optimal strategy for your business."
    deliverables={[
    "Research data chart",
    "Research documentation",
    "List of local competitors",
    "Potential Marketing Strategy"
    ]}
    />

    <ProcessCard
    number={<RiNumber2 />}
    title="Design"
    description="We will research your market, project, and potential competitors in order to develop an optimal strategy for your business."
    deliverables={[
    "Research data chart",
    "Research documentation",
    "List of local competitors",
    "Potential Marketing Strategy"
    ]}
    />

    <ProcessCard
    number={<RiNumber3 />}
    title="Development"
    description="We will research your market, project, and potential competitors in order to develop an optimal strategy for your business."
    deliverables={[
    "Research data chart",
    "Research documentation",
    "List of local competitors",
    "Potential Marketing Strategy"
    ]}
    />

    <ProcessCard
    number={<RiNumber4 />}
    title="Maintenace"
    description="We will research your market, project, and potential competitors in order to develop an optimal strategy for your business."
    deliverables={[
    "Research data chart",
    "Research documentation",
    "List of local competitors",
    "Potential Marketing Strategy"
    ]}
    />
    </div>

    <div className="service__content">
    <h3><FaWrench /> Services</h3>
    <div className="service_section">
    <div className="services">
      <h4>Marketing</h4>
      <ul>
        <li><a className="thicc" href="none">Search Engine Optimization (SEO)</a> - optimizing a website to rank higher in search engine results pages</li>
        <li><a className="thicc" href="none">Pay-per-click (PPC) Advertising</a> - managing paid ad campaigns on search engines, social media, and other platforms</li>
        <li><a className="thicc" href="none">Social Media Marketing</a> - managing social media accounts, creating and scheduling content, and running ad campaigns</li>
        <li><a className="thicc" href="none">Email Marketing</a> - creating and sending email newsletters, automated campaigns, and drip campaigns</li>
        <li><a className="thicc" href="none">Content Marketing</a> - creating and distributing high-quality content, such as blog posts, infographics, and videos, to attract and engage audiences</li>
        <li><a className="thicc" href="none">Influencer Marketing</a> - identifying and partnering with social media influencers to promote a brand or product</li>
      </ul>
    </div>

    <div className="services">
      <h4>Branding</h4>
      <ul>
        <li><a className="thicc" href="none">Brand Strategy</a> - defining a brand's purpose, values, and voice, and developing a cohesive brand identity and messaging</li>
        <li><a className="thicc" href="none">Logo Design</a> - creating a unique and memorable logo that represents a brand's identity</li>
        <li><a className="thicc" href="none">Graphic Design</a> - designing visual elements for websites, social media, and other marketing materials</li>
        <li><a className="thicc" href="none">Brand Guidelines</a> - creating a set of guidelines for how a brand should be represented across all channels</li>
        <li><a className="thicc" href="none">Copywriting</a> - crafting compelling and effective copy for websites, ads, and other marketing materials</li>
      </ul>
    </div>

    <div className="services">
      <h4>Development</h4>
      <ul>
        <li><a className="thicc" href="none">Website Design and Development</a> - designing and building responsive and user-friendly websites using various web development technologies</li>
        <li><a className="thicc" href="none">E-commerce Development</a> - building and managing online stores with secure payment processing and inventory management features</li>
        <li><a className="thicc" href="none">Mobile App Development</a> - designing and developing custom mobile applications for iOS and Android platforms</li>
        <li><a className="thicc" href="none">Web Application Development</a> - building custom web-based applications that meet specific business needs</li>
        <li><a className="thicc" href="none">User Experience (UX) and User Interface (UI) Design</a> - designing intuitive and user-friendly interfaces that prioritize user experience</li>
        <li><a className="thicc" href="none">Quality Assurance and Testing</a> - ensuring that all software products are thoroughly tested for functionality and usability</li>
      </ul>
    </div>

    <div className="services">
      <h4>Maintenance</h4>
      <ul>
        <li><a className="thicc" href="none">Website Maintenance</a> - providing ongoing updates, security patches, and backups for websites to ensure they stay secure and up-to-date</li>
        <li><a className="thicc" href="none">Content Management</a> - managing and updating website content, such as blog posts, product pages, and other information</li>
        <li><a className="thicc" href="none">Server Management</a> - maintaining and optimizing servers to ensure that websites and other digital products run smoothly and efficiently</li>
        <li><a className="thicc" href="none">Technical Support</a> - providing assistance to users who encounter technical issues with digital products</li>
        <li><a className="thicc" href="none">Website Hosting</a> - providing secure and reliable hosting for websites and other digital products.</li>
      </ul>
    </div>

    <div className="services">
    <h4>Business</h4>
    <ul>
      <li><a className="thicc" href="none">Digital Strategy Consulting</a> - providing guidance and advice to businesses on how to leverage digital tools and technologies to achieve their business goals</li>
      <li><a className="thicc" href="none">Market Research</a> - conducting market research and analysis to inform business strategy and decision-making</li>
      <li><a className="thicc" href="none">Data Analysis and Reporting</a> - analyzing business data and generating reports to help businesses make informed decisions and optimize performance</li>
      <li><a className="thicc" href="none">Project Management</a> - managing digital projects, including planning, scheduling, budgeting, and resource management</li>
      <li><a className="thicc" href="none">Business Growth and Expansion</a> - helping businesses expand their reach and grow their customer base through digital marketing and other strategies.</li>
    </ul>
    </div>
    </div>
    </div>
    </section>

    <section className="works">
    <h2>Works.</h2>
    <h5>Some of our projects</h5>
    <Link to="/portfolio">
      <button className="contact-btn">View All</button>
    </Link>

    <div className="projects__container">
      <div className="procard__container">
      {projects.map(title => (
        <ProjectSlider key={projects.title} {...title}/>
      ))}
      </div>
    </div>
    </section>

    <Footer />
</div>
</motion.div>
  )
}

export default About

