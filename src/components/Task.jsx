import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import '../style.css';
import ButtonActive from './ButtonActive';
import ButtonDelete from './ButtonDelete';
import InputReplace from './InputReplace';
import { useState } from 'react';
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { renameTask } from '../store/tasksSlice';


const Task = ({ task}) => {

    const [replaceText, setReplaceText] = useState(task.name);
    const [opacityDel, setOpacityDel] = useState(0)
    const [isShowInput, setIsShowInput] = useState(false)
    
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
            changeOccuringDiv();
        }
        if (e.key === "Escape") {
            changeOccuringDiv();
        }
    }
    const changeOccuringInput = () => {
        setIsShowInput(true);
    }


    const changeOccuringDiv = (e) => {
            setIsShowInput(false);
    }
    if (task.active === true) {
        return (
            <TaskArea
                onMouseOver={() => setOpacityDel(1)}
                onMouseLeave={() => setOpacityDel(0)}
                tabIndex={2}
                >
                
                <ButtonActive
                    active={true}
                    id={task.id} />
                <TaskContainer
                    tabIndex={1}
                    onClick={() => {changeOccuringInput()}}
                    onBlur={() => changeOccuringDiv()}
>
                    <TaskText show={isShowInput} > {task.name}</TaskText>
                    <InputReplace
                        show={isShowInput}
                        changeOccuringDiv={changeOccuringDiv}
                        EnterClickReplace={EnterClickReplace}
                        replaceText={replaceText}
                        task={task}
                        handleChangeReplace={handleChangeReplace} />
                </TaskContainer>
                <ButtonDelete
                    id={task.id}
                    opacityDel={opacityDel}
                    show={isShowInput}
                />
            </TaskArea>
        )
    } else {
        return (
            <TaskArea
                onMouseOver={() => setOpacityDel(1)}
                onMouseLeave={() => setOpacityDel(0)}>
                <ButtonActive
                    active={false}
                    id={task.id} />
                <TaskContainer
                    onClick={() => changeOccuringInput()}>
                    <TaskTextCompleted show={isShowInput} > {task.name}</TaskTextCompleted>
                    <InputReplace
                        show={isShowInput}
                        changeOccuringDiv={changeOccuringDiv}
                        EnterClickReplace={EnterClickReplace}
                        replaceText={replaceText}
                        task={task}
                        handleChangeReplace={handleChangeReplace} />
                </TaskContainer>
                <ButtonDelete
                    id={task.id}
                    opacityDel={opacityDel}
                    show={isShowInput}
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
    padding-top: 14px;
    padding-left: 4px;
    display: ${ props => props.show ? 'none' : 'flex' };
    opacity: 1;
    background-color: white;
    width: 440px;
    min-height: 44px;
    white-space: pre-wrap;
    @media (max-width: 599px) {
    width: 80%;
    `
const TaskTextCompleted = styled.div`
    padding-top: 14px;
    padding-left: 4px;
    display: ${ props => props.show ? 'none' : 'flex' };
    opacity: 1;
    background-color: white;
    width: 440px;
    min-height: 44px;
    color: #d9d9d9;
    text-decoration: line-through;
    white-space: pre-wrap;
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