import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css';
import ButtonFooter from './ButtonFooter.jsx';

function Footer () {

    
        return (
            <div class="footer">
        <div class = "footer__info">
            2 items left
        </div>
    <div class="footer__buttons buttons">
        <ButtonFooter />
        <ButtonFooter />
        <ButtonFooter />
        <ButtonFooter />
    </div>
    </div>
        );
    }

export default Footer;