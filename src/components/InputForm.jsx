import React from 'react';
import ReactDOM from 'react-dom';
import ButtonAll from './ButtonAll';
import '../style.css';
import styled from "styled-components";


const InputForm = ({markerAll, inputText, EnterClick, handleChange, changeStatusAll, buttonAllActive}) => {
    return (
        <InputSpace>
            <ButtonAll markerAll={markerAll} buttonAllActive={buttonAllActive} changeStatusAll={changeStatusAll}/>
            <InputSpaceText
              value={inputText}
              onKeyDown={EnterClick}
              onChange={handleChange}
              type="text" 
              placeholder="What needs to be done?" />
        </InputSpace>
    );
    }
    
const InputSpace = styled.div `
width: 550px;
height: 60px;
display: flex;
flex-direction: row;
border-bottom: 3px solid rgb(241, 241, 241);
padding-top: 5px;
background-color: white;
@media (max-width: 599px) {
width: 100%;
`

const InputSpaceText = styled.input `
width: 480px;
height: 40px;
padding-top: 10px;
font-size: 24px;
color:rgb(70, 70, 70);
font-style: italic;
border-color: transparent;
opacity: 0.5;
&:focus {
        outline-color: transparent;
        opacity:1;
}
  }

@media (max-width: 599px) {
width: 90%;
`

export default InputForm;