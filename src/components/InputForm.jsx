import React from 'react';
import ReactDOM from 'react-dom';
import ButtonAll from './ButtonAll';
import '../style.css';

function InputForm ({inputText, EnterClick, handleChange, changeStatusAll}) {
    return (
        <div className="workSpace__inputSpace inputArea">
            <ButtonAll changeStatusAll={changeStatusAll}/>
            <input 
              value={inputText}
              onKeyDown={EnterClick}
              onChange={handleChange}
              className="inputArea__text" 
              type="text" 
              placeholder="What needs to be done?" />
        </div>
    );
}
export default InputForm;