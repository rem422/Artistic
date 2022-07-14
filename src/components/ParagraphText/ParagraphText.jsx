import React from 'react'
import styled from 'styled-components'

const ParagraphText = ({ children, ...rest }) => {
  return <ParagraphStyle { ...rest }>{ children }</     ParagraphStyle>
}

const ParagraphStyle = styled.p`
    font-size: 1.6rem;
    line-height: 1.4em;
    color: var(--darkBlue_1);

@media only screen and (max-width: 768px){
    font-size: 1.4rem;
}
`;

export default ParagraphText