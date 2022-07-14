import React from 'react'
import styled from 'styled-components'
import SectionTitle from '../titles/SectionTitle'
import ParagraphText from '../Paragraph Text/ParagraphText'
import FormField from './FormField'
import PrimaryButton from '../Buttons/PrimaryButton'

const ContactSection = () => {
  return (
    <Contact id='Contact'>
        <div className="container">
            <div className="contact__wrapper">
                <div className="contact__info">
                    <SectionTitle className='contact__title'>Get In Touch</SectionTitle>
                    <ParagraphText className='contact__title'>We would love to hear from You</ParagraphText>
                </div>
                <form className="contact__form">
                    <FormField 
                      label="Name"
                      id="Name"
                      type="text"
                      name="name"
                      required
                      />
                    <FormField 
                      label="Email"
                      id="email"
                      type="email"
                      name="email"
                      required
                      />
                    <FormField 
                      label="Subject"
                      id="subject"
                      type="text"
                      name="subject"
                      required
                      />
                    <FormField 
                      label="Messages"
                      rows={6}
                      id="Name"
                      type="text"
                      name="name"
                      required
                      />
                  <PrimaryButton type="submit" className='contact__submit' buttonType="button">Submit</PrimaryButton>
                </form>
            </div>
        </div>
    </Contact>
  )
}

const Contact = styled.div`
    padding: 10rem 0;

    .contact__wrapper {
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
    }

    .contact__info {
      margin-bottom: 4rem;
    }

    .contact__form {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 1.5rem;
      row-gap: 3rem;
    }

    .contact__submit {
      width: max-content;
      cursor: pointer;
    }

    @media only sreen and (max-width:768px) {
    .contact__form {
      grid-template-columns: repeat(1, 1fr)!important;
    } 
}
`;

export default ContactSection