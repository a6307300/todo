import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import '../style.css';
import ButtonFooter from './ButtonFooter.jsx';
import styled from "styled-components";
import { useState } from 'react';



const Footer = ({ filterCompleted, filterActive, filterAll, counterActive, deleteAllCompleted, counterCompleted, buttonActive, buttons }) => {
    const[colorSelectedAll, setColorSelectedAll]=useState('white');
    const[colorSelectedActive, setColorSelectedActive]=useState('white');
    const[colorSelectedCompleted, setColorSelectedCompleted]=useState('white');
    const[colorSelectedClear, setColorSelectedClear]=useState('white');
    const[opacityClear, setOpacityClear]=useState(0)

    const colorSelection = () => {
        if (buttonActive===buttons.active) {
            setColorSelectedActive('silver');
            setColorSelectedCompleted('white');
            setColorSelectedAll('white');
            setColorSelectedClear('white');
        }
        if (buttonActive===buttons.completed) {
            setColorSelectedActive('white');
            setColorSelectedCompleted('silver');
            setColorSelectedAll('white');
            setColorSelectedClear('white');
        }
        if (buttonActive===buttons.all) { 
            setColorSelectedActive('white');
            setColorSelectedCompleted('white')
            setColorSelectedAll('silver')
            setColorSelectedClear('white')
        }
        if (buttonActive===buttons.clearCompleted) {
            setColorSelectedActive('white');
            setColorSelectedCompleted('white')
            setColorSelectedAll('silver')
            setColorSelectedClear('white')
        }
    if (counterCompleted===0) {
        setOpacityClear(0)} else {
        setOpacityClear(1)
        }
    }
        useEffect(() => {
            setColorSelectedAll(colorSelection);
            setColorSelectedCompleted (colorSelection);
            setColorSelectedAll (colorSelection);
            setColorSelectedClear (colorSelection);
            setOpacityClear(colorSelection)
          }, [buttonActive, counterCompleted])



    return (
        <FooterWrapper>
            <FooterInfo>
                {counterActive} items left
            </FooterInfo>
            <FooterButtons>
                <ButtonFooter opacityClear={1} colorSelected={colorSelectedAll} value={buttons.all} buttons={buttons} functionClick={filterAll} name="All" />
                <ButtonFooter opacityClear={1} colorSelected={colorSelectedActive} value={buttons.active} buttons={buttons} functionClick={filterActive} name="Active" />
                <ButtonFooter opacityClear={1} colorSelected={colorSelectedCompleted} value={buttons.completed} buttons={buttons} functionClick={filterCompleted} name="Completed" />
                <ButtonFooter opacityClear={opacityClear} colorSelected={colorSelectedClear} value={buttons.clearCompleted} buttons={buttons} functionClick={deleteAllCompleted} name={`remove completed ${counterCompleted}`}/>
            </FooterButtons>
        </FooterWrapper>
    );
}

const FooterWrapper = styled.div `
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
    
    const FooterInfo = styled.div `
    padding-left: 15px;
    padding-top: 10px;
    width: 110px;
    height: 40px;
    @media (max-width: 599px) {
width: 20%;
    }
    `
    
    const FooterButtons = styled.div `
    width: 350px;
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

export default Footer;