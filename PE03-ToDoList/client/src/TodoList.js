import React, { useState } from 'react';
import Todo from './Todo';
import './TodoList.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="container todo-list">
      <h1 className="text-center">ToDo List App</h1>
      <form onSubmit={addTodo} className="mb-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter task description"
          className="form-control mb-2"
        />
        <button type="submit" className="btn btn-primary btn-block">Add Task</button>
      </form>
      <div className="tasks">
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} index={index} removeTodo={removeTodo} />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
