import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css';
import styled from "styled-components";
  

const InputReplace = ({replaceText, EnterClickReplace, changeOccuringDiv, handleChangeReplace, occureInput, opacityInput}) => {

    return (
    <StyledInput
    value={replaceText}
    onChange={handleChangeReplace}
    onKeyDown={EnterClickReplace}
    opacityInput={opacityInput}
    occureInput={occureInput}
    type="text" 
    />
   )
}

const StyledInput = styled.input`
    width: 470px;
    height: 48px;
    font-size: 24px;
    color: rgb(70, 70, 70);
    position: absolute;
    opacity: ${props => props.opacityInput};
    z-index:${props => props.occureInput};
    border-color: transparent;
    background-color: white;
    @media (max-width: 599px) {
    width: 80%;
    &:focus {
        outline-color: silver;
        outline-style: solid;
        outline-width: 1px;
        box-shadow: inset 0px 0px 3px 3px #929191;
    }
`

export default InputReplace;