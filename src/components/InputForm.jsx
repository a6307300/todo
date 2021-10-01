import React from 'react';
import ReactDOM from 'react-dom';
import ButtonAll from './ButtonAll';
import '../style.css';

function InputForm () {
    return (
        <div class="workSpace__inputSpace inputArea">
            <ButtonAll />
            <input class="inputArea__text" type="text" placeholder="What needs to be done?" />
        </div>
    );
}
export default InputForm;