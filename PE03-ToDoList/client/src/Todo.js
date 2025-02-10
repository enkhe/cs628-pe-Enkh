import React from 'react';
import './Todo.css';

function Todo({ todo, index, removeTodo }) {
  return (
    <div className="todo">
      <span>{todo}</span>
      <button onClick={() => removeTodo(index)} className="btn btn-danger">Delete</button>
    </div>
  );
}

export default Todo;
