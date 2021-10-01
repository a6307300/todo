import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer.jsx';
import TaskList from './TaskList';
import InputForm from './InputForm';
import { nanoid } from 'nanoid';
import '../style.css';

// const idOne = nanoid(4);
// const idTwo = nanoid(4);


const tasks = [   
    {id:0, name: 'First Task', active: true },
    {id:1, name: 'Second Task', active: false },
]
const buttons = {
    all: "all",
    active: "active",
    completed: "completed",
    clearCompleted: "clear completed"
}

function CommonForm (tasks) {
    const [tasks, setTasks] = useState(tasks);
    const [selectedButton, setSelectedButton] = useState(buttons.all);
    const [buttonAllActive, setButtonAllActive] = useState();
    const [inputText, setCount] = useState("");

    setTasks(selectedButton) {
        if (selectedButton==buttons.active) {
            const tasksActive=tasks.filter((task)=>task.active)
            tasks=tasksActive;
        }
        if (selectedButton==buttons.completed) {
            const tasksNotActive=tasks.filter((task)=>!task.active)
            tasks=tasksNotActive;
    }
        if (selectedButton==buttons.all) {
        tasks=tasks;
}

}

        return (
            <div class="window">
                <div class="workSpace">
                    <InputForm buttonAllActive="buttonAllActive"/>
                    <TaskList tasks="this.props.tasks"/>
                    <Footer selectedButton="selectedButton"/>

                    <div class="decor">
                        <div class="decor__inside">
                        </div>
                    </div>
                    <div class="decor2">
                        <div class="decor__inside2">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
export default CommonForm;