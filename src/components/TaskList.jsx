import React from 'react';
import ReactDOM from 'react-dom';
import Task from './Task';
import '../style.css';

function TaskList() {
    const [tasks, setTasks] = useState(tasks);

    
    return (
        <>
        {(this.props.tasks).map(task => (<Task task={task}/>
        ))}
        </>

        );
        }
        export default TaskList;