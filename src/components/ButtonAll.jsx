import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css';
import styled from "styled-components";
import { useState } from 'react';
import ButtonActive from './ButtonActive';



const ButtonAll = ({ changeStatusAll, buttonAllActive }) => {

    
    const ButtonAllStyle = styled.button`
    width: 55px;
    height: 60px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-color: transparent;
    opacity: ${buttonAllActive?1:0.3};
    background-color: white;
    `
    
    return (
        <ContainerButtonAll>
            <ButtonAllStyle
                onClick={changeStatusAll}
            >
                <img src="images/button.jpg" />
            </ButtonAllStyle>
        </ContainerButtonAll>
    );
}

    
const ContainerButtonAll = styled.div`
width: 55px;
height: 62px;
background-color: white;
`



export default ButtonAll;