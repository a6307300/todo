import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css';

function ButtonDelete({ task, deleteTask }) {
   return (
      <div className="container__button taskContainer">
         <img className="imgNotDone" src="images/Del.gif" />
         <button
            className="task__button"
            onClick={() => deleteTask(task.id)}>
         </button>
      </div>
   )
}
export default ButtonDelete;