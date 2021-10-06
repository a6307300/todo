import React from 'react';
import ReactDOM from 'react-dom';
import ButtonAll from './ButtonAll';
import '../style.css';
import styled from "styled-components";


const InputForm = ({inputText, EnterClick, handleChange, changeStatusAll, buttonAllActive}) => {
    return (
        <InputSpace>
            <ButtonAll buttonAllActive={buttonAllActive} changeStatusAll={changeStatusAll}/>
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
@media (max-width: 599px) {
width: 100%;
`

const InputSpaceText = styled.input `
width: 495px;
height: 56px;
font-size: 24px;
color:#d9d9d9;
font-style: italic;
border-color: transparent;
@media (max-width: 599px) {
width: 90%;
`

export default InputForm;