import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css';
import styled from "styled-components";

const ContainerButtonAll = styled.div`
width: 55px;
height: 62px;
background-color: white;
`

const ButtonAllStyle = styled.button`
width: 55px;
height: 60px;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
border-color: transparent;
opacity: 0.3;
background-color: white;
`

function ButtonAll({ changeStatusAll }) {
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
export default ButtonAll;