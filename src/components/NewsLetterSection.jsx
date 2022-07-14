import React from 'react'
import styled from 'styled-components'
import SectionTitle from './titles/SectionTitle'
import ParagraphText from './Paragraph Text/ParagraphText'

const NewsLetterSection = () => {
  return (
    <NewsLetter>
        <div className="container">
            <div className="newsletter__wrapper">
                <SectionTitle className='newsletter__title'>Join Newsletter</SectionTitle>
                <ParagraphText className='newsletter__subtitle'>Get Regular updates every week</ParagraphText>
                <form className='newsletter__form'>
                    <input type="email" placeholder='Enter your Email' />
                    <button type='submit'>Join</button>
                </form>
            </div>
        </div>
    </NewsLetter>
  )
}


const NewsLetter = styled.div`
    padding: 10rem 0;

    .newsletter__wrapper {
        padding: 5rem 3rem;
        background-color: var(--mediumSlateBlue);
        max-width: 500px;
        margin: 0 auto;
        border-radius: 12px;
        text-align: center;
    }

    .newsletter__title {
        margin-bottom: 0.2rem;
        color: var(--lightBlue_1);
    }

    .newsletter__subtitle {
        color: var(--lightBlue_1);
        margin-bottom: 2rem;
    }

    .newsletter__form {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        input{
            width: 100%;
            max-width: 300px;
            height: 40px;
            background-color: var(--lightBlue_1);
            border: none;
            border-radius: 4px;
            font-size: 1.6rem;
            padding-left: 1rem;
            outline-style: none;
        }

        button {
            height: 40px;
            font-size: 1.6rem;
            padding: 0 1.5rem;
            text-transform: capitalize;
            color: var(--darkBlue_1);
            background-color: var(--lightBlue_1);
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
    }

@media only screen and (max-width:768px) {
    .newsletter__wrapper {
        padding: 3rem 2rem;
    }

    .newsletter__form {
        flex-direction: column;
        input {
            font-size: 1.4rem;
        }
        button {
            font-size: 1.4rem;
        }
    }
}

`
export default NewsLetterSection