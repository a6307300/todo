import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css';
import ButtonFooter from './ButtonFooter.jsx';

function Footer({ filterCompleted, filterActive, filterAll, buttons, counterActive, deleteAllCompleted }) {
    return (
        <div className="footer">
            <div className="footer__info">
                {counterActive} items left
            </div>
            <div className="footer__buttons buttons">
                <ButtonFooter value={buttons.all} buttons={buttons} functionClick={filterAll} name="All" />
                <ButtonFooter value={buttons.active} buttons={buttons} functionClick={filterActive} name="Active" />
                <ButtonFooter value={buttons.completed} buttons={buttons} functionClick={filterCompleted} name="Completed" />
                <ButtonFooter value={buttons.clearCompleted} buttons={buttons} functionClick={deleteAllCompleted} name="Clear completed"/>
            </div>
        </div>
    );
}

export default Footer;