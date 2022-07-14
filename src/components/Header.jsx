import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import Logo from './Logo';
import { FiMenu, FiX } from 'react-icons/fi'

const Header = () => {

    // Shows the Menu button when the screen size is equal to or less than 760px
    const [isMobile, setIsMobile] = useState(
        window.matchMedia('(max-width: 768px)').matches
    );

    useEffect(() => {
    window.addEventListener('resize', () => {
        setIsMobile(window.matchMedia('(max-width: 768px)').matches)
    },[])
})

// Shows the Navmenu
const[isNavOpen, setIsNavOpen] = useState(false);

  return (
    <HeaderStyles>
        <div className="container">
            <div className="nav">
                <Link to="Home">
                    <Logo />
                </Link>
                <div className="nav_menu">
                    <nav className={isMobile && isNavOpen ? 'open' : undefined}>
                        {isMobile && (
                            <div className="close_icon" tabIndex="0" role="button" onClick={() => setIsNavOpen(false)}
                            onKeyDown={() => setIsNavOpen(false)}>
                                <FiX />
                            </div>
                        )}
                        <ul>
                            <li>
                                <Link to="Home" onClick={() => setIsNavOpen(false)}>Home</Link>
                            </li>
                            <li>
                                <Link to="Services"  onClick={() => setIsNavOpen(false)}>Services</Link>
                            </li>
                            <li>
                                <Link to="About"  onClick={() => setIsNavOpen(false)}>About</Link>
                            </li>
                            <li>
                                <Link to="Contact"  onClick={() => setIsNavOpen(false)}>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    {isMobile && (
                        <div className="menu_icon" tabIndex="0" role="button" onClick={() => setIsNavOpen(true)}
                        onKeyDown={() => setIsNavOpen(true)}>
                            <FiMenu />
                        </div>
                    )}
                </div>
            </div>
        </div>
    </HeaderStyles>
  )
}

// Header component styling
const HeaderStyles = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--header-height);
    background-color: var(--lightBlue_1);
    border-bottom: 1px solid var(  --mediumSlateBlue);

    .nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 0;
    }

    nav ul li {
        display: inline-block;
        margin: 0 .5rem;
        a {
            display: inline-block;
            padding: .5rem 1rem;
            color: var(--darkBlue_2);
            font-size: 1.6rem;
            font-weight: 500;
            transition: all .3s ease;
        }
            &:hover {
                a {
                    text-decoration: underline;
                }
                
            }
    }
    
        .nav_menu {
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }
        
        .menu_icon,
        .close_icon {
            width: 30px;
            height: 30px;
            cursor: pointer;
            margin-left: 10px;
            padding: 3px;
            transition: .3s ease;

            svg {
                color: var(--darkBlue_1);
            }
            &:hover {
                background-color: #8080803b;
            }
        }
        
        .close_icon {
            position: absolute;
            right: 10px;
            top: 10px;
            transition: all .3s ease;
            &:hover {
                svg {
                    color: var(--white);
                }
            }
        }

        /* Media queries */
        @media(max-width:768px) {
            nav {
                display: flex;
                flex-direction: column;
                justify-content: center;
                position: fixed;
                width: 90%;
                max-width: 250px;
                top: 0;
                right: 0%;
                background-color: var(--lightBlue_2);
                height: 100vh;
                z-index: 100;
                transform: translateX(100%);
                transition: transform 0.3s ease;
                overflow: hidden;
            }

            nav.open {
                transform: translateX(0%);
            }

            nav ul li {
                display: block;
                text-align: right;
                width: 100%;
                margin: .5rem 0;

                a {
                    display: block;
                    width: 100%;
                }
            }
        }
`;


export default Header