import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css';
import styled from "styled-components";
import { useState } from 'react';


    

function ButtonFooter({ name, value, functionClick, colorSelected, counterCompleted, opacity }) {
    

    const ButtonFooterStyle = styled.button `
    width: 100px;
    height: 35px;
    border-color: transparent;
    background-color: ${colorSelected};
    color: #929191;
    opacity: ${opacity}
    
    &:hover {
        color: green;
    }
    
    `
   



    return (
        <ButtonFooterStyle
            value={value}
            onClick={functionClick}>
            {name}
        </ButtonFooterStyle>
    );
}
export default ButtonFooter;