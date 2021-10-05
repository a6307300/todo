import React from 'react';
import ReactDOM from 'react-dom';
import Task from './Task';
import '../style.css';
import styled from "styled-components";
const TaskList = ({ filteredTasks, deleteTask, changeStatus}) => {
    return (
    <TasksSpace>
      {filteredTasks.map((task) => {
        return (
          <Task
            task={task}
            deleteTask={deleteTask}
            changeStatus={changeStatus}
          />
        );
      }
      )
      }
    </TasksSpace>
  )
}

const TasksSpace = styled.div `
background-color: white;
width: 550px;
display:flex;
flex-flow: column nowrap;
@media (max-width: 599px) {
width: 100%;
`

export default TaskList;