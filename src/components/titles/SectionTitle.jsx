import React from 'react'
import styled from 'styled-components'

const SectionTitle = ({children, ...rest}) => {
  return (
    <SectionTitleStyles {...rest}>{children}</SectionTitleStyles>
  )
}

const SectionTitleStyles = styled.h3`
    font-size: 4rem;
    font-weight: 800;
    color: var(--darkBlue_2);
    text-transform: capitalize;

@media only screen and (max-width: 768px){
    font-size: 3rem;
}
`;

export default SectionTitle