import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css';
import ButtonActive from './ButtonActive';
import ButtonDelete from './ButtonDelete';

function Task({ task, deleteTask, changeStatus }) {
    if (task.active == true) {
        return (
            <div className="tasksSpace__task">
                <ButtonActive
                    active={true}
                    id={task.id}
                    changeStatus={changeStatus} />
                <div className="task__label">{task.name}</div>
                <ButtonDelete deleteTask={deleteTask} task={task} />
            </div>
        )
    } else {
        return (
            <div className="tasksSpace__task task">
                <ButtonActive
                    active={false}
                    id={task.id}
                    changeStatus={changeStatus} />
                <div className="task__label task__label_completed">{task.name}</div>
                <ButtonDelete deleteTask={deleteTask} />
            </div>
        )
    }
}
export default Task;