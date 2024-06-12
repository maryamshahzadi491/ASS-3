// src/components/AddToDo.js
import React, { useState } from 'react';

function AddToDo({ addTask }) {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value.trim()) return;  // Prevent adding empty tasks
        addTask(value);
        setValue('');  // Clear input field after submission
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input
                type="text"
                className="task-input"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Enter a new task"
            />
            <button type="submit" className="task-button">Add Task</button>
        </form>
    );
}

export default AddToDo;
