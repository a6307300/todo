import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import '../style.css';
import ButtonFooter from './ButtonFooter.jsx';
import styled from "styled-components";
import { useState } from 'react';
import { useSelector } from 'react-redux'
import buttons from "../constants"
import { useDispatch } from 'react-redux';
import { clearCompleted } from "../store/tasksSlice"


const Footer = ({ counterActive, counterCompleted }) => {
    const [colorSelectedAll, setColorSelectedAll] = useState('white');
    const [colorSelectedActive, setColorSelectedActive] = useState('white');
    const [colorSelectedCompleted, setColorSelectedCompleted] = useState('white');
    const [opacityClear, setOpacityClear] = useState(0)

    const buttonsFoot=buttons;

    const buttonOn = useSelector(state => state.tasks.buttonOn);

    const dispatch = useDispatch();

    const colorSelection = () => {
        if (buttonOn === buttons.active) {
            setColorSelectedActive('silver');
            setColorSelectedCompleted('white');
            setColorSelectedAll('white');
        }
        if (buttonOn === buttons.completed) {
            setColorSelectedActive('white');
            setColorSelectedCompleted('silver');
            setColorSelectedAll('white');
        }
        if (buttonOn === buttons.all) {
            setColorSelectedActive('white');
            setColorSelectedCompleted('white');
            setColorSelectedAll('silver');
        }
        if (counterCompleted === 0) {
            setOpacityClear(0);
        }
        else {
            setOpacityClear(1)
        }
    }
    useEffect(() => {
        setColorSelectedActive(colorSelection);
        setColorSelectedCompleted(colorSelection);
        setColorSelectedAll(colorSelection);
        setOpacityClear(colorSelection)
    }, [buttonOn, counterCompleted])



    return (
        <FooterWrapper>
            <FooterInfo>
                {counterActive} items left
            </FooterInfo>
            <FooterButtons>
                <ButtonFooter
                    colorSelected={colorSelectedAll}
                    value={buttonsFoot.all}
                    name="All"

                />
                <ButtonFooter
                    colorSelected={colorSelectedActive}
                    value={buttonsFoot.active}
                    name="Active"
                />
                <ButtonFooter
                    colorSelected={colorSelectedCompleted}
                    value={buttonsFoot.completed}
                    name="Completed"
                />
                <ClearCompletedStyleDiv
                    opacity={opacityClear}
                    onClick={() => dispatch(clearCompleted(true))}>
                    {`remove ${counterCompleted}`}
                </ClearCompletedStyleDiv>
            </FooterButtons>
        </FooterWrapper>
    );
}

const FooterWrapper = styled.div`
    background-color: white;
    width: 550px;
    height: 40px;
    display: flex;
    flex-direction: row;
    font-size: 14px;
    color: #929191;
    @media (max-width: 599px) {
width: 100%;
    }
    `

const FooterInfo = styled.div`
    padding-left: 15px;
    padding-top: 10px;
    width: 110px;
    height: 40px;
    @media (max-width: 599px) {
width: 20%;
    }
    `

const FooterButtons = styled.div`
    width: 300px;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 55px;
    @media (max-width: 599px) {
width: 63%;
    }
    `
const ClearCompletedStyleDiv = styled.div`
    width: 50px;
    height: 40px;
    }
    `



export default Footer;