import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css';
import styled from "styled-components";


    

function ButtonFooter({ name, value, functionClick, counterCompleted }) {

    const ButtonFooterStyle = styled.button `
    width: auto;
    height: 35px;
    border-color: transparent;
    background-color: white;
    color: #929191;
    
    ::active {
    border-color: red;
    }
    
    opacity: (value===buttons.clearCompleted && counterCompleted===0)? 0:1
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