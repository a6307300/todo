import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css';

class InputForm extends React.Component {
    render() {
    return (
        <div class="workSpace__inputSpace inputArea">
            <ButtonAll />
            <input class="inputArea__text" type="text" placeholder="What needs to be done?" />
        </div>
    );
    }
}
export default {InputForm};