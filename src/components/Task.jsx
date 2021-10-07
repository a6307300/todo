import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import '../style.css';
import ButtonActive from './ButtonActive';
import ButtonDelete from './ButtonDelete';
import InputReplace from './InputReplace';
import { useState } from 'react';
import styled from "styled-components";
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { renameTask } from '../store/tasksSlice';

const Task = ({ task }) => {

    const [replaceText, setReplaceText] = useState(task.name);
    const [occureInput, setOccureInput] = useState(0);
    const [occureDiv, setOccureDiv] = useState(1);
    const [opacityInput, setOpacityInput] = useState(0)
    const [opacityDel, setOpacityDel] = useState(0)

    const dispatch = useDispatch();

    const handleChangeReplace = (e) => {
        setReplaceText(e.currentTarget.value);
    }

    const EnterClickReplace = (e) => {
        if (e.key === "Enter") {
            dispatch(renameTask({
                nameTarget: replaceText, 
                idTarget: task.id,
            }));
            setReplaceText("")
            changeOccuringDiv();
        }
        if (e.key === "Escape") {
            setReplaceText("")
            changeOccuringDiv();
        }
    }

    const changeOccuringInput = () => {
        setOccureDiv(1);
        setOccureInput(10);
        setOpacityInput(1)
    }

    const changeOpacityDelOn = () => { setOpacityDel(1) }
    const changeOpacityDelOff = () => { setOpacityDel(0) }



    const changeOccuringDiv = (e) => {
            setOccureDiv(10);
            setOccureInput(1);
            setOpacityInput(0)
    }

    if (task.active === true) {
        return (
            <TaskArea
                onMouseOver={() => changeOpacityDelOn()}
                onMouseLeave={() => changeOpacityDelOff()}>
                <ButtonActive
                    active={true}
                    id={task.id} />
                <TaskContainer
                    onClick={() => changeOccuringInput()}>
                    <TaskText> {task.name}</TaskText>
                    <InputReplace
                        opacityInput={opacityInput}
                        occureInput={occureInput}
                        changeOccuringDiv={changeOccuringDiv}
                        EnterClickReplace={EnterClickReplace}
                        replaceText={replaceText}
                        task={task}
                        handleChangeReplace={handleChangeReplace} />
                </TaskContainer>
                <ButtonDelete
                    id={task.id}
                    opacityDel={opacityDel}
                />
            </TaskArea>
        )
    } else {
        return (
            <TaskArea
                onMouseOver={() => changeOpacityDelOn()}
                onMouseLeave={() => changeOpacityDelOff()}>
                <ButtonActive
                    active={false}
                    id={task.id} />
                <TaskContainer
                    onClick={() => changeOccuringInput()}>
                    <TaskTextCompleted> {task.name}</TaskTextCompleted>
                    <InputReplace
                        opacityInput={opacityInput}
                        occureInput={occureInput}
                        changeOccuringDiv={changeOccuringDiv}
                        EnterClickReplace={EnterClickReplace}
                        replaceText={replaceText}
                        task={task}
                        handleChangeReplace={handleChangeReplace} />
                </TaskContainer>
                <ButtonDelete
                    id={task.id}
                    opacityDel={opacityDel}
                />
            </TaskArea>
        )
    }

}
const TaskArea = styled.div`
width: 550px;
min-height: 60px;
color: rgb(70, 70, 70);
border-bottom: 1px solid #f5f5f5;
font-size: 24px;
display: flex;
align-items: center;
@media (max-width: 599px) {
width: 100%;
`
const TaskContainer = styled.div`
padding-left: 15px;
width: 450px;
min-height: 60px;
position: relative;
padding-top: 10px;
background-color: white;
font-size: 24px;
@media (max-width: 599px) {
width: 80%;
`

const TaskText = styled.div`
    position: absolute;
    padding-top: 14px;
    padding-left: 4px;
    z-index: ${props => props.occureDiv};
    opacity: 1;
    background-color: white;
    width: 440px;
    min-height: 44px;
    white-space: pre-wrap;
    @media (max-width: 599px) {
    width: 80%;
    `
const TaskTextCompleted = styled.div`
    position: absolute;
    padding-top: 14px;
    padding-left: 4px;
    z-index: ${props => props.occureDiv};
    opacity: 1;
    background-color: white;
    width: 450px;
    min-height: 60px;
    color: #d9d9d9;
    text-decoration: line-through;
    @media (max-width: 599px) {
    width: 80%;
    `
    const TaskTextReplace = styled.div`
width: 450px;
min-height: 60px;
font-size: 24px;
position: absolute;
opacity: 0;
z-index:1;
@media (max-width: 599px) {
width: 80%;
`
export default Task;