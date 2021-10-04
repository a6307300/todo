import React from 'react';
import ReactDOM from 'react-dom';
import Task from './Task';
import '../style.css';
import { useState } from 'react';

function TaskList({ filteredTasks, tasks, deleteTask, changeStatus }) {
  return (
    <div className="tasksSpace">
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
    </div>
  )
}
export default TaskList;