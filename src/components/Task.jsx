import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css';
import ButtonActive from './ButtonActive';

function Task () {
    const name = this.props.task.name;
    const active = this.props.task.active;
        if (active == true) {
            return (
                <div class="tasksSpace__task task">
                <ButtonActive active={true}/>
                <div class="task__label">{this.name}</div>
                </div>
            )
            }

        if (active == false) {
            return (
                <div class="tasksSpace__task task">
                   <ButtonActive active={false}/>
                    <div class="task__label task__label_completed">{this.name}</div>
                </div>
            )
        }
        }
export default Task;