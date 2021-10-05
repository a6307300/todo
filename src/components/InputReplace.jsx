import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css';
import styled from "styled-components";
  

const InputReplace = ({replaceText, EnterClickReplace, changeOccuringDiv, handleChangeReplace, occureInput, opacityInput}) => {

    const ReplacingArea = styled.input`
    width: 470px;
    min-height: 48px;
    font-size: 24px;
    color: rgb(70, 70, 70);
    position: absolute;
    opacity: ${opacityInput};
    z-index:${occureInput};
    border-color: transparent;
    background-color: white;
    &:focus {
    outline-color: silver;
    outline-style: solid;
    outline-width: 1px;
    box-shadow: inset 0px 0px 3px 3px #929191;
    }
    `

    return (
    <ReplacingArea
    required
    value={replaceText}
    onChange={handleChangeReplace}
    onKeyDown={EnterClickReplace, changeOccuringDiv}
    opacityInput={opacityInput}
    occureInput={occureInput}
    type="text" 
    />
   )
}

export default InputReplace;