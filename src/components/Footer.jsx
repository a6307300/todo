import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css';
import ButtonFooter from './ButtonFooter.jsx';
import styled from "styled-components";



function Footer({ filterCompleted, filterActive, filterAll, buttons, counterActive, deleteAllCompleted, counterCompleted }) {
        
    const FooterWrapper = styled.div `
    background-color: white;
    width: 550px;
    height: 40px;
    display: flex;
    flex-direction: row;
    font-size: 14px;
    color: #929191;
    `
    
    const FooterInfo = styled.div `
    padding-left: 15px;
    padding-top: 10px;
    width: 110px;
    height: 40px;
    `
    
    const FooterButtons = styled.div `
    width: 300px;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 55px;
    `

    return (
        <FooterWrapper>
            <FooterInfo>
                {counterActive} items left
            </FooterInfo>
            <FooterButtons>
                <ButtonFooter value={buttons.all} buttons={buttons} functionClick={filterAll} name="All" />
                <ButtonFooter value={buttons.active} buttons={buttons} functionClick={filterActive} name="Active" />
                <ButtonFooter value={buttons.completed} buttons={buttons} functionClick={filterCompleted} name="Completed" />
                <ButtonFooter value={buttons.clearCompleted} buttons={buttons} functionClick={deleteAllCompleted} name={counterCompleted}/>
            </FooterButtons>
        </FooterWrapper>
    );
}

export default Footer;