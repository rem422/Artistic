import styled from 'styled-components'
import AboutImg from '../assets/images/about.png'
import ParagraphText from './Paragraph Text/ParagraphText'
import SectionTitle from './titles/SectionTitle'
import PrimaryButton from './Buttons/PrimaryButton'
import { Link } from 'react-scroll'

const AboutSection = () => {
  return (
    <AboutSectionStyles id='About'>
        <div className="container">
            <div className="about__wrapper">
                <div className="about__img">
                    <img src={AboutImg} alt="Artistic" />
                </div>
                <div className="about__info">
                    <ParagraphText className='about__subtitle'>Who are we</ParagraphText>
                    <SectionTitle className='about__title'>Capturing life as it happens</SectionTitle>
                    <ParagraphText className='about__desc'>'Artistic' is a studio of some passionate photographers. Our Goal is to capture your experience</ParagraphText>
                    <PrimaryButton buttonType={Link} to="Contact">Get In Touch</PrimaryButton>
                </div>
            </div>
        </div>
    </AboutSectionStyles>
  )
}

const AboutSectionStyles = styled.div`
    padding: 10rem 0;

    .about__wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .about__subtitle {
        margin-bottom: 1rem;
        font-weight: 600;
        text-transform: capitalize;
        color: var(--mediumSlateBlue);
    }

    .about__title {
        margin-bottom: 2rem;
        max-width: 300px;
    }

    .about__desc {
        margin-bottom: 2rem;
        max-width: 300;
    }

@media only screen and (max-width:768px) {
    .about__wrapper {
        flex-direction: column;
    }
    .about__img {
        max-width: 400px;
    }
}

`;

export default AboutSection