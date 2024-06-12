import React, { useState } from 'react';

function ToDoItem({ item, toggleTask, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(item.task);

  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  const handleToggleEdit = () => {
    if (isEditing) {
      editTask(item.id, editText); // Call the editTask function passed from parent
      setIsEditing(false); // Exit editing mode
    } else {
      setIsEditing(true); // Enter editing mode
      setEditText(item.task); // Initialize the text input with the current task
    }
  };

  return (
    <div className="task-item" style={{ marginBottom: "10px" }}>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => toggleTask(item.id)}
        className="checkbox"
      />
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={handleEditChange}
          className="task-input"
          style={{ marginLeft: '10px' }}
        />
      ) : (
        <span style={{ textDecoration: item.completed ? 'line-through' : 'none', marginLeft: '10px' }}>
          {item.task}
        </span>
      )}
      {isEditing ? (
        <button onClick={handleToggleEdit} style={{ marginLeft: '10px' }}>
          Save 
        </button>
        
      ) : (
        <>
          <button onClick={handleToggleEdit} style={{ marginLeft: '10px', color: 'Blue' , backgroundColor: 'light-pink'}}>
            Edit
          </button>
          <button onClick={() => deleteTask(item.id)} style={{ marginLeft: '10px' , color: 'red' }}>
            Delete
          </button>
        </>
      )}
    </div>
  );
}

export default ToDoItem;
