import React from 'react'
import styled from 'styled-components'
import ParagraghText from '../ParagraphText/ParagraphText'

const ServiceItem = ({icon, title, desc}) => {
  return (
    <ServiceItemStles>
        <div className="service__icon">{icon}</div>
        <div className="service__title">{title}</div>
        <ParagraghText className="service__desc">{desc}</ParagraghText>
    </ServiceItemStles>
  )
}

const ServiceItemStles = styled.div`
    text-align: left;
    padding: 3rem;
    border-radius: 12px;
    transition: all .4s ease;

    .service__icon {
        font-size: 2rem;
        margin-bottom: 1rem;
        color: var(--white);
        background-color: var(--mediumSlateBlue);
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
            width: 60%;
        }
    }

    .service__title {
        font-size: 2rem;
        font-weight: 500;
        line-height: 1.5em;
        text-transform: capitalize;
        margin-bottom: 1rem;
        color: var(--darkBlue_2);
    }
    &:hover {
        background-color: var(--mediumSlateBlue);
        .service__icon {
            background-color: var(--lightBlue_1);
            color: var(--mediumSlateBlue);
        }
        .service__title {
            color: var(--lightBlue_1);
        }
        .service__desc {
            color: var(--lightBlue_1);
        }
    }

@media only screen and (max-width: 768px){
    background-color: var(--mediumSlateBlue);
    .service__icon {
        background-color: var(--lightBlue_1);
        color: var(--mediumSlateBlue);
    }

    .service__title {
        color: var(--lightBlue_1);
        font-size: 1.8rem;
        margin-bottom: .5rem;
    }

    .service__desc {
        color: var(--lightBlue_1);
    }
}
`;

export default ServiceItem