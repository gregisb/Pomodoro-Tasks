import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'

import EditDetails from './EditDetails'
import Button from './Button';

import './TaskDetails.css'

const TaskDetails = () => {
    const [details, setDetails] = useState('');

    const handleDetailsAddition = () => {
        setDetails(details)
      };

    

    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack()
    }

    return (
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
                <EditDetails handleDetailsAddition={handleDetailsAddition}/>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>{details}</p>
            </div>
        </>
    )
}

export default TaskDetails
