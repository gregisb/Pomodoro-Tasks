import React from 'react'
import { useHistory } from 'react-router-dom'

import './Task.css'
import { CgClose, CgInfo } from 'react-icons/cg'

function Task({task, handleTaskClick, handleTaskDelete}) {
  const history = useHistory();

  const handleTaskDetailsClick = () => {
    history.push(`/${task.title}`)
  }

    return (
      <div className="task-container" style={task.completed ? {borderRight: '2px solid rgb(19, 173, 199)', textDecoration: 'line-through', backgroundColor: 'rgba(19, 173, 199, .1)'} : {}}>
        <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}

        </div>
        <div className="buttons-container">
          <button className="remove-task-button" onClick={() => handleTaskDelete(task.id)}><CgClose /></button>
          {/* <button className="see-task-details-button" onClick={handleTaskDetailsClick}><CgInfo /></button> */}

        </div>
      </div>

      )
}

export default Task
