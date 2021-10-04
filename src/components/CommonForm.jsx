import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer.jsx';
import TaskList from './TaskList';
import InputForm from './InputForm';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import '../style.css';

// const idOne = nanoid(4);
// const idTwo = nanoid(4);


// const tasks = [
//   { id: 0, name: 'First Task', active: true },
//   { id: 1, name: 'Second Task', active: false },
// ]


function CommonForm() {
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
  const [counterActive, setCounterActive] = useState(tasks.length)

  const countActive = () => {
    const activeTasks = tasks.filter((task) => task.active == true)
    setCounterActive(activeTasks.length)
    console.log(activeTasks.length)
  }

  useEffect(() => {
    setFilteredTasks(tasks)
  }, [tasks])

  useEffect(() => {
    setCounterActive(countActive)
  }, [tasks])

  const addTask = (inputText) => {
    if (inputText) {
      const newTask = {
        id: tasks.length + 1,
        name: inputText,
        active: true,
      }
      setTasks(tasks.concat(newTask))
      // setTasks(tasks.push(newTask))
      // setTasks([...tasks, newTask])
      // debugger
    }
  }
  const EnterClick = (e) => {
    if (e.key == "Enter") {
      addTask(inputText)
      setInputText("")

    }
  }
  const handleChange = (e) => {
    setInputText(e.currentTarget.value)
  }

  const deleteTask = (id) => {
    // setTasks(tasks.splice(id, 1))
    setTasks(tasks.filter((task) => task.id !== id))
  }
  
  const changeStatus = (id) => {
    setTasks(tasks.map((task) =>
      task.id == id ? { ...task, active: !task.active } : { ...task }
    )
    )
    countActive();
  }

  const changeStatusAll = () => {
    tasks.map((task) => {
      task.active = buttonAllActive;
    });
    setButtonAllActive(!buttonAllActive);
    countActive();
  }

  const filterCompleted = () => {
    const completedTasks = tasks.filter((task) => task.active == false)
    setFilteredTasks(completedTasks)
  }

  const filterActive = () => {
    const activeTasks = tasks.filter((task) => task.active == true)
    setFilteredTasks(activeTasks)
  }

  const filterAll = () => {
    const allTasks = tasks.filter((task) => (task.active == true || task.active == false));
    setFilteredTasks(allTasks)
  }

  const deleteAllCompleted = () => {
  setTasks(tasks.filter((task) => task.active == true))
  }

  return (
    <div className="window">
      <div className="workSpace">
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
          counterActive={counterActive}
        />

        <div className="decor">
          <div className="decor__inside">
          </div>
        </div>
        <div className="decor2">
          <div className="decor__inside2">
          </div>
        </div>
      </div>
    </div>
  );
}
export default CommonForm;