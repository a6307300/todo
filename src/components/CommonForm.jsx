import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer.jsx';
import TaskList from './TaskList';
import InputForm from './InputForm';
import { useState } from 'react';
import styled from "styled-components";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {addTask} from "../store/tasksSlice"
import {changeSelectedTask} from "../store/tasksSlice"


const CommonForm = () => {

  const tasks = useSelector(state => state.tasks.tasks)
  const selectedTask = useSelector(state => state.tasks.selectedTask)
  const dispatch = useDispatch();

  const [buttonAllActive, setButtonAllActive] = useState(false);
  const [inputText, setInputText] = useState("");
  const [counterActive, setCounterActive] = useState(tasks.length);
  const [counterCompleted, setCounterCompleted] = useState(0);


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
  }
  useEffect(() => {
    setCounterCompleted(countCompleted)
  }, [tasks])

  const EnterClick = (e) => {
    if (e.key == "Enter") {
      if (inputText!==""){
      dispatch(addTask(inputText));
      setInputText("")
      }
    }
    if (e.key == "Escape") {
      setInputText("")
    }
  }
  const handleChange = (e) => {
    setInputText(e.currentTarget.value)
  }

  return (
    <ActiveArea>
      <WorkArea>
        <InputForm
          buttonAllActive={buttonAllActive}
          inputText={inputText}
          EnterClick={EnterClick}
          handleChange={handleChange}
        />
        <TaskList />
        <Footer
          counterActive={counterActive}
          counterCompleted={counterCompleted}
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