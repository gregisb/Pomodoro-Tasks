import React, { useState, useRef, useEffect } from 'react'
import Button from './Button'
import './AddTask.css'

const AddTask = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    })


    const handleInputChange = (e) => {
        setInputData(e.target.value);
        
    };

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData);
        
        setInputData('')
    }

    return (
        <div className="add-task-container">
            <form >
            <input 
                  className="add-task-input" 
                  type="text"
                  onChange={handleInputChange}
                  value={inputData}
                  maxLength='42'
                  ref={inputRef}
                  
                  />
            <div className="add-task-button-container">
            <Button onClick={handleAddTaskClick}>Add Task</Button>
            </div>
            </form>
        </div>
    )
}

export default AddTask
