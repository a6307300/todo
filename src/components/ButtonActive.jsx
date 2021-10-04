import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css';

function ButtonActive({ id, changeStatus, active }) {
    if (active) {
        return (
            <div className="container__button taskContainer">
                <img className="imgNotDone"
                    src="/images/circle.gif"
                    onClick={()=> changeStatus(id)} 
                    />
            </div>
        )
    } else {
        return (
            <div className="container__button taskContainer">
                <img className="imgNotDone"
                    src="images/circleDone.gif"
                    onClick={() => changeStatus(id)}
                />
            </div>
        )
    }
}
export default ButtonActive;