import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css';
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { changeButtonOn} from "../store/tasksSlice"


const ButtonFooter = ({ name, value, colorSelected}) => {

    const dispatch = useDispatch();

    return (
        <ButtonFooterStyle
            value={value}
            colorSelected={colorSelected}
            onClick={() => dispatch(changeButtonOn(value))}
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
    @media (max-width: 599px) {
    width: 100%;
    }
    &:hover {
        cursor: pointer;
    }
    opacity: ${props => props.opacityClear}
    
`

export default ButtonFooter;