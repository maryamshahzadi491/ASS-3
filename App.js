// src/App.js
import React, { useState, useEffect } from 'react';
import ToDoList from './components/ToDoList';
import AddToDo from './components/AddToDo';
import './App.css';


function App() {
    const [toDos, setToDos] = useState([]);

    useEffect(() => {
        const storedToDos = JSON.parse(localStorage.getItem('todos'));
        if (storedToDos) {
            setToDos(storedToDos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(toDos));
    }, [toDos]);

    const addTask = (task) => {
        const newTask = { id: Date.now(), task, completed: false };
        setToDos([...toDos, newTask]);
    };

    const clearList = () => {
        setToDos([]);
    };

    return (
        <div className="app">
            <h1>To-Do List</h1>
            <AddToDo addTask={addTask} />
            <ToDoList items={toDos} />
            <button onClick={clearList} className="clear-list-button">Clear List</button>
        </div>
    );
}

export default App;
