import React from 'react'

//Style Import
import '../styles/Services.css'

//Component Imports
import Card from '../components/serviceCard';
import Footer from '../components/Footer'

//Image Imports
import Dev from '../assets/webDevStock.jpg'
import Hosting from '../assets/hosting.jpg'
import Marketing from '../assets/marketing.jpg'
import SEO from '../assets/seo.jpg'
import Copywriting from '../assets/copywriting.jpg'
import Branding from '../assets/branding.jpg'
import DigitalMarketing from '../assets/digitalmarketing.jpg'
import MarketResearch from '../assets/marketresearch.jpg'
import GraphicDesign from '../assets/graphicdesign.jpg'

const services = [
  {
    image: Dev,
    title: 'Web Design & Development',
    description: 'Our web design & development can help businesses create a professional and user-friendly website that meets their specific needs and goals. These services can help businesses establish an online presence, showcase their products or services, and reach a wider audience.',
  },
  {
    image: Hosting,
    title: 'Website Maintenance & Hosting',
    description: 'Our website maintenance and hosting can help businesses ensure that their websites are always online and functioning correctly, and that their data is secure and backed up. These services can help businesses save time and resources, and can provide peace of mind knowing that their website is in good hands.',
  },
  {
    image: Marketing,
    title: 'Marketing & Advertising',
    description: 'Our digital marketing and advertising services can help businesses reach and engage their target audience through various channels and tactics, including social media, email marketing, content marketing, search engine optimization, and paid advertising. These services can help businesses increase brand awareness, generate leads, and drive sales.',
  },
  {
    image: SEO,
    title: 'Optimization',
    description: 'Our optimization service can help businesses improve the visibility and ranking of their website in search results, which can lead to more organic traffic, higher visibility, and better conversion rates. These services can help businesses increase their online presence and reach, and can be a powerful tool for driving targeted traffic and sales.',
  },
  {
    image: Copywriting,
    title: 'Copywriting',
    description: 'Our copywriting services can help businesses create effective and compelling marketing and advertising copy that resonates with their target audience and helps them achieve their marketing goals. These services can include writing headlines, taglines, emails, website copy, social media posts, and more. Copywriting services can help businesses increase their brand awareness, drive traffic and sales, and build a strong and consistent brand voice.',
  },
  {
    image: Branding,
    title: 'Branding',
    description: 'Our branding service can help businesses create and maintain a strong, consistent, and compelling brand identity that differentiates them in the market and establishes trust and loyalty with their target audience. These services can include branding strategy, logo design, brand guidelines, and brand assets. Branding services can help businesses establish their unique value proposition, create a cohesive and compelling brand experience, and differentiate themselves in a crowded market.',
  },
  {
    image: DigitalMarketing,
    title: 'Digital Marketing Campaign & Content Creation',
    description: 'Our marketing campaign and content creation services can help businesses create and execute effective marketing campaigns that engage and persuade their target audience. These services can help businesses increase brand awareness, drive traffic and sales, and build trust and loyalty with their audience.',
  },
  {
    image: MarketResearch,
    title: 'Market & Competitive Research',
    description: 'Our market and competitive research services can help businesses understand and analyze their market and competitors to inform business decisions and strategy. These services can help businesses identify trends and opportunities, understand customer needs and preferences, and develop a competitive edge in the market.',
  },
  {
    image: GraphicDesign,
    title: 'Graphic Design & Animation',
    description: 'Our graphic design and animation services can help businesses create visually appealing and effective marketing and communication materials that engage and persuade their target audience. These services can include creating logos, brochures, infographics, banners, and other marketing materials, as well as creating videos, games, or interactive graphics. Graphic design and animation services can help businesses create a consistent and compelling visual identity, and can be a powerful tool for engaging and persuading their audience.',
  },
];

const Services = () => {
  return (
    <div className="service__page">
      <div className="service__content">
        {services.map(service => (
          <Card
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default Services