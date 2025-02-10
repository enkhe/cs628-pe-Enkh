# ToDo list app

## Input

**User Interaction:** 
- Users provide input by typing a task description into an input field and clicking the "Add Task" button. This action triggers an event that captures the user's input.

**React Components:**
- The `TodoList` component contains the input field and the button. It uses React's `useState` hook to manage the current input value (`input`) and the list of tasks (`todos`).

```jsx
const [todos, setTodos] = useState([]);
const [input, setInput] = useState('');
```

**Event Handling:**
- The `addTodo` function handles the `submit` event from the form. It checks if the input is not empty and then updates the state with the new task.

```jsx
const addTodo = (e) => {
  e.preventDefault();
  if (input.trim()) {
    setTodos([...todos, input]);
    setInput('');
  }
};
```

---

## Process

**State Management:**
- React's `useState` hook is utilized to manage the application state. The state includes an array of tasks (`todos`) and the current value of the input field (`input`).

**Component Re-Rendering:**
- Whenever the state changes (e.g., a new task is added or an existing task is deleted), React automatically re-renders the components to reflect the latest state. This is achieved through React's virtual DOM diffing algorithm, which ensures efficient updates.

**Task Deletion:**
- The `removeTodo` function handles task deletion by filtering out the task at the specified index and updating the state with the new list.

```jsx
const removeTodo = (index) => {
  const newTodos = todos.filter((_, i) => i !== index);
  setTodos(newTodos);
};
```

**Component Structure:**
- The `TodoList` component maps over the `todos` array to create individual `Todo` components for each task. This dynamic rendering ensures that the UI is always up-to-date with the current state.

```jsx
{todos.map((todo, index) => (
  <Todo key={index} todo={todo} index={index} removeTodo={removeTodo} />
))}
```

---

## Output

**Rendered UI:**
- The output is a visually updated list of tasks displayed on the web page. Each task appears as a separate `Todo` component with a "Delete" button.

**Responsive Design:**
- The app's UI is styled using Bootstrap and custom CSS to ensure it is responsive and user-friendly. Input fields and task lists span the width of the page, providing a seamless user experience.

**Dynamic Updates:**
- As users add or delete tasks, React's efficient rendering mechanism ensures that the UI updates in real-time without requiring a full page refresh.

```jsx
<div className="todo">
  <span>{todo}</span>
  <button onClick={() => removeTodo(index)} className="btn btn-danger">Delete</button>
</div>
```

