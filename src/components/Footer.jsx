import React from 'react'
import { Link } from 'react-scroll';
import styled from 'styled-components'
import Logo from './Logo';
import ParagraphText from './Paragraph Text/ParagraphText';

const Footer = () => {

const getYear = () => {
    return new Date().getFullYear();
}

  return (
    <FooterSection>
        <div className="container">
            <div className="footer__wrapper">
                <Link to="Home">
                    <Logo className='footer__logo'/>
                </Link>
                <ParagraphText className='footer__desc'>
                    'Artistic' is a studio of some passionate photographers. Our Goal is to capture your experience
                </ParagraphText>
                <div className="footer__links">
                    <ul>
                        <li>
                            <Link to="Home">Home</Link>
                        </li>
                        <li>
                            <Link to="Services">Services</Link>
                        </li>
                        <li>
                            <Link to="About">About</Link>
                        </li>
                        <li>
                            <Link to="Contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            <ParagraphText className='footer__copyright'>
                @Artistic creative {getYear()}. All rights reserved
            </ParagraphText>
            </div>
        </div>
    </FooterSection>
  )
}

const FooterSection = styled.div`
    background-color: var(--darkBlue_4);
    padding: 10rem 0;

    .footer__wrapper {
        text-align: center;
    }

    .footer__logo {
        max-width: 120px;
        margin: 0 auto;
        margin-bottom: 1rem;
    }
    .footer__desc {
        color: var(--white);
        max-width: 350px;
        margin: 0 auto;
        margin-bottom: 2rem;
    }

    .footer__links {
        margin-bottom: 2rem;
        li {
            display:inline-block;
            margin: 0 1rem;
        }
        a {
            font-size: 1.6rem;
            color: var(--lightBlue_1);
            line-height: 1.5em;
            transition: color .2s ease;
        }
        li:hover {
            a {
                color: var(--mediumSlateBlue);
                text-decoration: underline;
            }
        }
    }

    .footer__copyright {
        font-size: 1.2rem;
        color: var(--lightBlue_1);
    }

    @media only screen and (max-width: 768px){
        .footer__links {
            a {
                font-size: 1.4rem;
            }
        }
    }
`;




export default Footer