import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css';
import ButtonActive from './ButtonActive';
import ButtonDelete from './ButtonDelete';
import InputReplace from './InputReplace';
import { useState } from 'react';
import styled from "styled-components";

const TaskArea = styled.div `
width: 550px;
min-height: 60px;
color: rgb(70, 70, 70);
border-bottom: 1px solid #f5f5f5;
font-size: 24px;
display: flex;
align-items: center;
`
const TaskContainer = styled.div `
padding-left: 15px;
width: 450px;
min-height: 60px;
position: relative;
padding-top: 15px;
`

const TaskText = styled.div `
position: absolute;
z-index: 2;
opacity: 1;
background-color: white;
width: 450px;
min-height: 60px;
`
const TaskTextCompleted = styled.div `
position: absolute;
z-index: 2;
opacity: 1;
background-color: white;
width: 450px;
min-height: 60px;
color: #d9d9d9;
text-decoration: line-through;
`

const TaskTextReplace = styled.div `
width: 450px;
min-height: 60px;
font-size: 24px;
position: absolute;
opacity: 0;
z-index:1;
`

function Task({ task, deleteTask, changeStatus}) {
    const [replaceText, setReplaceText] = useState(task.name);
     
    const handleChangeReplace = (e) => {
        setReplaceText(e.currentTarget.value)
        task.name=replaceText
        console.log(replaceText)
}   
      const EnterClickReplace = (e) => {
          if (e.key === "Enter") {
          setReplaceText("")
      }
    }
    
    
    if (task.active === true) {
        return (
            <TaskArea>
                <ButtonActive
                    active={true}
                    id={task.id}
                    changeStatus={changeStatus} />
                <TaskContainer>
                <TaskText> {task.name}</TaskText>
                <InputReplace EnterClickReplace={EnterClickReplace} replaceText={replaceText} task={task} handleChangeReplace={handleChangeReplace}/>
                </TaskContainer>
                <ButtonDelete deleteTask={deleteTask} task={task} />
            </TaskArea>
        )
    } else {
        return (
            <TaskArea>
                <ButtonActive
                    active={false}
                    id={task.id}
                    changeStatus={changeStatus} />
                    <TaskContainer>
                <TaskTextCompleted>
                {task.name}</TaskTextCompleted>
                <InputReplace EnterClickReplace={EnterClickReplace} replaceText={replaceText} task={task} handleChangeReplace={handleChangeReplace}/>
                </TaskContainer>
                <ButtonDelete deleteTask={deleteTask} />
            </TaskArea>
        )
    }
}
export default Task;