import React from 'react'
import styled from 'styled-components';
import LogoImg from '../assets/images/logo.svg';

const Logo = ({...rest}) => {
  return (
    <LogoStyles {...rest}>
        <img src={ LogoImg } alt="logo" />
    </LogoStyles> 
  )
}

const LogoStyles = styled.div`
    max-width: 100px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;




export default Logo