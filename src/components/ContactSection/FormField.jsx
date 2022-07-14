import React from 'react'
import styled from 'styled-components'

const FormField = ({label, id, rows = 1, classname, ...rest}) => {
  return (
    <FormFieldStyles classname={classname}>
        <label htmlFor={id}>
            {label}
            {rows <= 1 ? (
                <input type="text" id={id} {...rest}/>
            ) : (
                <textarea  id={id} rows={rows} {...rest}/>
            )}
        </label>
    </FormFieldStyles>
  )
}

const FormFieldStyles = styled.div`
    label {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        font-size: 1.6rem;
        text-transform: capitalize;
        color: var(--darkBlue_2);
    }

    input, 
    textarea {
        margin-top: 1rem;
        width: 100%;
        height: 40px;
        padding: 1rem;
        border: none;
        border-radius: 4px;
        font-size: 1.6rem;
        background-color: var(--lightBlue_2);
        outline-color: var(--darkBlue_2);
    }

    textarea {
        height: auto;
        resize: none;
    }

@media only screen and (max-width:768px) {
    input {
        font-size: 1.4rem;
    }
}
`;

export default FormField