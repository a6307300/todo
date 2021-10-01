import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css';

class Task extends React.Component {
    render() {
    return (
        <div class="tasksSpace__task task">
            <div class="container__button taskContainer">
                <img class="imgNotDone" src="img/circle.gif" />
                <button class="task__button"></button>
                </div>
            <div class="task__label">First task</div>
            <div class="container__button taskContainer">
                <img class="imgNotDone" src="img/Del.gif" />
                <button class="task__button"></button>
                </div>
            </div>
    );

}
}
export default {Task};