import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css';
import styled from "styled-components";

const ButtonFooter = ({ name, value, functionClick, colorSelected, opacityClear }) => {
    return (
        <ButtonFooterStyle
            value={value}
            onClick={functionClick}
            colorSelected={colorSelected}
            opacityClear={opacityClear}
            >
            {name}
        </ButtonFooterStyle>
    );
}


const ButtonFooterStyle = styled.button `
    width: auto;
    min-height: 35px;
    background-color: white;
    outline: none;
    border-style: solid;
    border-radius: 3px;
    border-color: ${props => props.colorSelected};
    color: #929191;
    opacity: ${props => props.opacityClear}
    @media (max-width: 599px) {
    width: 100%;
    }
`

export default ButtonFooter;