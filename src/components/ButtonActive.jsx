import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css';

function ButtonActive () {
        const active = this.props.active;
        if (active) {
        return (
            <div class="container__button taskContainer">
            <img class="imgNotDone" src="/public/circle.jpg" />
            </div>
        )
    } else {
        return (
            <div class="container__button taskContainer">
            <img class="imgNotDone" src="/public/circleDone.jpg" />
            </div>
        )
    }
    }
export default ButtonActive;