import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css';


function ButtonFooter({ name, value, functionClick }) {
    return (
        <button
            className="buttons__item"
            value={value}
            onClick={functionClick}>
            {name}
        </button>
    );
}
export default ButtonFooter;