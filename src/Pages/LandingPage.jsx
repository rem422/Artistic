import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import AboutSection from '../components/AboutSection'
import TeamSection from '../team/TeamSection'
import NewsLetterSection from '../components/NewsLetterSection'
import ContactSection from '../components/ContactSection/ContactSection'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <>
        <Header />
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TeamSection />
        <NewsLetterSection />
        <ContactSection />
        <Footer />
    </>
  )
}

export default LandingPage