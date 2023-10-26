import React, { useState } from 'react';
import axios from 'axios';

const CreateSlotForm = ({ onClose, onSlotCreated }) => {
    const [startDateTime, setStartDateTime] = useState('');
    const [endDateTime, setEndDateTime] = useState('');

    const handleCreateSlot = () => {
        // Perform validation for startDateTime and endDateTime if needed

        // Send a request to create a new slot
        axios.post('/api/slots/create', { startDateTime, endDateTime })
            .then(response => {
                console.log(response.data.message);
                // Notify the parent component that a new slot has been created
                onSlotCreated();
                // Close the form
                onClose();
            })
            .catch(error => {
                console.error('Error creating slot:', error);
            });
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Create New Slot</h2>
                <label>Start Date and Time:</label>
                <input type="datetime-local" value={startDateTime} onChange={(e) => setStartDateTime(e.target.value)} required />
                <label>End Date and Time:</label>
                <input type="datetime-local" value={endDateTime} onChange={(e) => setEndDateTime(e.target.value)} required />
                <button onClick={handleCreateSlot}>Create Slot</button>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
};

export default CreateSlotForm;
