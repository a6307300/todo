import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer.jsx';
import TaskList from './TaskList';
import InputForm from './InputForm';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import '../style.css';
import styled from "styled-components";


const CommonForm = () => {


  const buttons = {
    all: "all",
    active: "active",
    completed: "completed",
    clearCompleted: "clear completed"
  }
  const [tasks, setTasks] = useState([]);
  const [buttonAllActive, setButtonAllActive] = useState(false);
  const [inputText, setInputText] = useState("");
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [counterActive, setCounterActive] = useState(tasks.length);
  const [counterCompleted, setCounterCompleted] = useState(0);
  const [buttonActive, setButtonActive] = useState(buttons.all);

  const countActive = () => {
    const activeTasks = tasks.filter((task) => task.active === true)
    setCounterActive(activeTasks.length)
  }

  useEffect(() => {
    setCounterActive(countActive)
  }, [tasks])

  const countCompleted = () => {
    const completedTasks = tasks.filter((task) => task.active === false)
    setCounterCompleted(completedTasks.length)
    console.log (counterCompleted)
  }

  useEffect(() => {
    setCounterCompleted(countCompleted)
  }, [tasks])


  useEffect(() => {
    setFilteredTasks(tasks)
  }, [tasks])

  const addTask = (inputText) => {
    if (inputText) {
      const newTask = {
        id: tasks.length + 1,
        name: inputText,
        active: true,
      }
      setTasks(tasks.concat(newTask))
    }
  }
  const EnterClick = (e) => {
    if (e.key == "Enter") {
      addTask(inputText)
      setInputText("")

    }
    if (e.key == "Escape") {
      setInputText("")
    }
  }
  const handleChange = (e) => {
    setInputText(e.currentTarget.value)
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const changeStatus = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, active: !task.active } : { ...task }
    )
    )
  }

  const changeStatusAll = () => {
    tasks.map((task) => {
      task.active = buttonAllActive;
    });
    setButtonAllActive(!buttonAllActive);

  }

  const filterCompleted = () => {
    const completedTasks = tasks.filter((task) => task.active === false)
    setFilteredTasks(completedTasks)
    setButtonActive(buttons.completed)
  }

  const filterActive = () => {
    const activeTasks = tasks.filter((task) => task.active === true)
    setFilteredTasks(activeTasks)
    setButtonActive(buttons.active)
  }

  const filterAll = () => {
    const allTasks = tasks.filter((task) => (task.active === true || task.active === false));
    setFilteredTasks(allTasks)
    setButtonActive(buttons.all)
  }

  const deleteAllCompleted = () => {
    setTasks(tasks.filter((task) => task.active === true))
    setButtonActive(buttons.clearCompleted)
  }


  return (
    <ActiveArea>
      <WorkArea>
        <InputForm
          buttonAllActive={buttonAllActive}
          inputText={inputText}
          EnterClick={EnterClick}
          handleChange={handleChange}
          changeStatusAll={changeStatusAll}
        />
        <TaskList
          tasks={tasks}
          filteredTasks={filteredTasks}
          deleteTask={deleteTask}
          changeStatus={changeStatus}


        />
        <Footer
          filterCompleted={filterCompleted}
          filteredTasks={filteredTasks}
          filterActive={filterActive}
          filterAll={filterAll}
          deleteAllCompleted={deleteAllCompleted}
          buttons={buttons}
          tasks={tasks}
          counterActive={counterActive}
          counterCompleted={counterCompleted}
          buttonActive={buttonActive}

        />
      </WorkArea>
      <DecorAreaOne>
        <DecorAreaOneInside />
      </DecorAreaOne>
      <DecorAreaTwo>
        <DecorAreaTwoInside />
      </DecorAreaTwo>
    </ActiveArea>
  );
}

const ActiveArea = styled.div`
width: 550px;
border: 1px solid;
border-color: rgb(241, 241, 241);
@media (max-width: 599px) {
width: 100%;
}
`

const WorkArea = styled.div`
width: 550px;
border: 1px solid;
border-color: rgb(221, 221, 221);
box-shadow: 2px 2px 3px 1px rgb(226, 226, 226);
@media (max-width: 599px) {
width: 100%;
`

const DecorAreaOne = styled.div`
width: 550px;
height: 5px; 
display: flex; 
justify-content: center;
@media (max-width: 599px) {
width: 100%;
`
const DecorAreaOneInside = styled.div`
width: 540px;
height: 5px; 
box-shadow: 2px 2px 3px 1px rgb(226, 226, 226);
border: 1px solid;
border-color: rgb(185, 185, 185);
border-top: 0px;
@media (max-width: 599px) {
width: 95%;
`
const DecorAreaTwo = styled.div`
width: 550px;
height: 5px;
display: flex; 
justify-content: center;
@media (max-width: 599px) {
width: 100%;
`
const DecorAreaTwoInside = styled.div`
width: 530px;
height: 5px; 
padding-top: 0.3px;
box-shadow: 2px 2px 3px 1px rgb(226, 226, 226);
border: 1px solid;
border-color: rgb(185, 185, 185); 
border-top: 0px;
@media (max-width: 599px) {
width: 93%;
`

export default CommonForm;