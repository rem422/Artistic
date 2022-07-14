import React from 'react'
import styled from 'styled-components'
import SectionTitle from './titles/SectionTitle'
import ServiceItem from './Services/ServiceItem'
import { RiImageEditLine } from 'react-icons/ri'

const ServicesSection = () => {
  return (
    <ServicesSectionStyles id='Services'>
      <div className="container">
        <SectionTitle className='services__title'>Our Services</SectionTitle>
        <div className="services__items">
            <ServiceItem 
            icon={<RiImageEditLine />}
            title="Professional Editing"
            desc="We do professional photo editing. Let ushelp you to take your photo next level."
            />
            
            <ServiceItem 
            icon={<RiImageEditLine />}
            title="Casual Photography"
            desc="You can hire us for any kind of casual photography. Book us for your next event"
            />

            <ServiceItem 
            icon={<RiImageEditLine />}
            title="Wedding Photography"
            desc="Wedding is the most memorable event of our life time. Let us help you to capture it."
            />
        </div>
      </div>
    </ServicesSectionStyles>
  )
}

const ServicesSectionStyles = styled.div`
  padding: 10rem 0;
  text-align: center;

  .services__title {
    margin-bottom: 3rem;
  }
  .services__items {
    display: flex;
    gap: 2rem;
  }

@media only screen and (max-width: 768px){
  .services__items {
    flex-direction: column;
    max-width: 300px;
    margin: 0 auto;
  }
}
`;

export default ServicesSection