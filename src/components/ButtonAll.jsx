import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css';
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { changeStatusAll } from '../store/tasksSlice';

let selectorAll = false;
const ButtonAll = () => {
    const dispatch = useDispatch();
    
    const changingAllStatuses = () => {
    dispatch(changeStatusAll(selectorAll));
    selectorAll=!selectorAll;
    }
    return (
        <ContainerButtonAll>
            <ButtonAllStyle
            selectorAll={selectorAll}
                onClick={() => changingAllStatuses()}
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
opacity: ${(props) => props.selectorAll?1:0.3};
background-color: white;
&:hover {
        cursor: pointer;
    }
`
export default ButtonAll;