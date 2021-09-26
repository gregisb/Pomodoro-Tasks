import React, { useState } from 'react'
import Button from './Button'

function EditDetails({handleDetailsAddition}) {

    const [editDetails, setEditDetails] = useState('');

    const handleEditDetails = (e) => {
        setEditDetails(e.target.value);

    const handleEditClick = () => {
        handleDetailsAddition(editDetails);
        setEditDetails('')
    }

    };
    return (
        <div>
            <input 
                  className="add-task-input" 
                  type="text"
                  onChange={handleEditDetails}
                  value={editDetails}
                  />
                <Button onClick={handleEditDetails}>Editar detalhes</Button>
        </div>
    )
}

export default EditDetails
