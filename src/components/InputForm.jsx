import React from 'react';
import ReactDOM from 'react-dom';
import ButtonAll from './ButtonAll';
import '../style.css';
import styled from "styled-components";


const InputSpace = styled.div `
width: 550px;
height: 60px;
display: flex;
flex-direction: row;
border-bottom: 3px solid rgb(241, 241, 241);
`

const InputSpaceText = styled.input `
width: 495px;
height: 56px;
font-size: 24px;
color:#d9d9d9;
font-style: italic;
border-color: transparent;
`

function InputForm ({inputText, EnterClick, handleChange, changeStatusAll}) {
    return (
        <InputSpace>
            <ButtonAll changeStatusAll={changeStatusAll}/>
            <InputSpaceText
              value={inputText}
              onKeyDown={EnterClick}
              onChange={handleChange}
              type="text" 
              placeholder="What needs to be done?" />
        </InputSpace>
    );
}
export default InputForm;