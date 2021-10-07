import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css';
import styled from "styled-components";


const InputReplace = ({ replaceText, show, EnterClickReplace,handleChangeReplace}) => {


    return (
        <StyledInput
            value={replaceText}
            show={show}
            onChange={handleChangeReplace}
            onKeyDown={EnterClickReplace}
            type="text"
            // onBlur={() => changeOccuringDiv()}
        />
    )
}

const StyledInput = styled.input`
    width: 485px;
    height: 48px;
    font-size: 24px;
    color: rgb(70, 70, 70);
    display: ${props => props.show ? 'flex' : 'none'};
    opasity:1:
    background-color: white;
    border-width: 1px;
           outline-color: silver;
        outline-style: solid;
        outline-width: 1px;
        box-shadow: inset 0px 0px 10px 3px #929191;
    @media (max-width: 599px) {
    width: 90%;
    }
`

export default InputReplace;