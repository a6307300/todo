import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css';


function ButtonAll({changeStatusAll}) {
    return (
        <div className="inputArea__button buttonOne">
        <button 
        className="buttonOne__All"
        onClick = {changeStatusAll}
        >
        <img src="images/button.jpg" />
        </button>
        </div>
    );
    }
export default ButtonAll;