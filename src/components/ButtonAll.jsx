import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css';
import styled from "styled-components";
import { useState } from 'react';
import ButtonActive from './ButtonActive';
import { useDispatch } from 'react';
import { changeStatusAll } from '../store/tasksSlice';



const ButtonAll = ({ buttonAllActive }) => {

    // const dispatch = useDispatch();
    
    // let selectorAll = false;
    
    // const changeStatusAllComplex = () => {
    // dispatch(changeStatusAll(selectorAll));
    // selectorAll = !selectorAll;
    // }

    return (
        <ContainerButtonAll>
            <ButtonAllStyle
                onClick={() => dispatch(changeStatusAll(false))}
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
const ButtonAllStyle = styled.button`
width: 55px;
height: 60px;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
border-color: transparent;
opacity: ${(props => props.buttonAllActive) ? 0.3 : 1};
background-color: white;
`




export default ButtonAll;