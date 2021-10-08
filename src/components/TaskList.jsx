import React from 'react';
import ReactDOM from 'react-dom';
import Task from './Task';
import styled from "styled-components";
import { useSelector } from 'react-redux'
import buttons from "../constants"

const TaskList = () => {

  const { tasks, buttonOn} = useSelector(state => state.tasks)

  const filtration = (tasks, buttonOn) => {
    if (buttonOn == buttons.completed) {
      return tasks.filter((task) => task.active === false);
    }
    if (buttonOn == buttons.active) {
      return tasks.filter((task) => task.active === true);
    }
    if (buttonOn == buttons.all) {
      return tasks.filter((task) => task.active === true || task.active === false);
    }
  }

  return (
    <TasksSpace
    >
      {filtration (tasks, buttonOn).map((task) => {
        return (
          <Task
            key={task.id}
            task={task}
          />
        );
      }
      )
      }
    </TasksSpace>
  )
}

const TasksSpace = styled.div`
background-color: white;
width: 550px;
display:flex;
flex-flow: column nowrap;
@media (max-width: 599px) {
width: 100%;
`

export default TaskList;