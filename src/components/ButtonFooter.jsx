import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css';
import styled from "styled-components";
import { useState } from 'react';

const ButtonFooter = ({ name, value, functionClick, colorSelected, opacityClear }) => {
    

    const ButtonFooterStyle = styled.button `
    width: auto;
    min-height: 35px;
    background-color: white;
    outline: none;
    border-style: solid;
    border-radius: 3px;
    border-color: ${colorSelected};
    color: #929191;
    opacity: ${opacityClear}
    @media (max-width: 599px) {
width: 100%;
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