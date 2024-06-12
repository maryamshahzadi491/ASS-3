import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

function ToDoList() {
  const [items, setItems] = useState([
    { id: 1, task: 'First Task', completed: false },
    { id: 2, task: 'Second Task', completed: false },
    { id: 3, task: 'Web Technology', completed: false },
  ]);

  const toggleTask = (id) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteTask = (id) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <div>
      {items.map(item => (
        <ToDoItem key={item.id} item={item} toggleTask={toggleTask} deleteTask={deleteTask} />
      ))}
    </div>
  );
}

export default ToDoList;
