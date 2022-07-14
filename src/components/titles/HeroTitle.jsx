import React from 'react'
import styled from 'styled-components'

const HeroTitle = ({children, ...rest}) => {
  return <TitleStyles {...rest }>{ children}</TitleStyles>
}

const TitleStyles = styled.h1`
    font-size: 6rem;
    color: var(--darkBlue_2);
    font-weight: 900;
    text-transform: capitalize;

    @media only screen and (max-width: 768px){
      font-size: 4rem;
    }
`;


export default HeroTitle