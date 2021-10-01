import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css';

class Footer extends React.Component {
    render() {
        return (
            <div class="footer">
        <div class = "footer__info">
            2 items left
        </div>
    <div class="footer__buttons buttons">
        <button class="buttons__item">All</button>
        <button class="buttons__item">Active</button>
        <button class="buttons__item">Completed</button>
        <button class="buttons__item buttons__item_padding"> ClearCompleted</button>
    </div>
    </div>
        );
    }
}

export default {Footer};