import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleComplete, deleteTodo, updateTodo } from "./todoSlice";
import './App.css';

// Define the Todo component
const Todo = () => {
  // Initialize the text state with an empty string
  const [text, setText] = useState("");
  
  // Initialize the editing state with null
  const [editing, setEditing] = useState(null);
  
  // Initialize the updatedText state with an empty string
  const [updatedText, setUpdatedText] = useState(""); 
  
  // Get the todos from the Redux store
  const todos = useSelector((state) => state.todos);
  
  // Get the dispatch function from Redux
  const dispatch = useDispatch();

  // Handle input change event
  const handleInputChange = (e) => {
    // Update the text state with the input value
    setText(e.target.value);
  };

  // Handle add todo event
  const handleAddTodo = () => {
    // Check if the text is not empty
    if (text) {
      // Dispatch the addTodo action with the text
      dispatch(addTodo(text));
      // Reset the text state
      setText("");
    }
  };

  // Handle toggle complete event
  const handleToggleComplete = (id) => {
    // Dispatch the toggleComplete action with the id
    dispatch(toggleComplete(id));
  };

  // Handle delete todo event
  const handleDeleteTodo = (id) => {
    // Dispatch the deleteTodo action with the id
    dispatch(deleteTodo(id));
  };

  // Handle edit todo event
  const handleEditTodo = (id) => {
    // Set the editing state to the id
    setEditing(id);
    // Initialize the updatedText state with the current todo text
    setUpdatedText(todos.find((todo) => todo.id === id).text);
  };

  // Handle update input change event
  const handleUpdateInputChange = (e) => {
    // Update the updatedText state with the input value
    setUpdatedText(e.target.value);
  };

  // Handle submit update event
  const handleSubmitUpdate = (id) => {
    // Check if the updatedText is not empty
    if (updatedText.trim()) {
      // Dispatch the updateTodo action with the id and updatedText
      dispatch(updateTodo({ id, text: updatedText }));
      // Reset the editing state
      setEditing(null);
      // Reset the updatedText state
      setUpdatedText("");
    }
  };

  // Render the Todo component
  return (
    <div className="outer-container">
      <div className="inner-container">
        <h1>Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            value={text}
            onChange={handleInputChange}
            placeholder="Enter a new todo"
            className="input-field"
          />
          <button onClick={handleAddTodo} className="add-btn">
            Add Todo
          </button>
        </div>
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id} className="todo-item">
              {editing === todo.id ? (
                <input
                  type="text"
                  value={updatedText}
                  onChange={handleUpdateInputChange}
                  className="edit-input"
                />
              ) : (
                <span
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none"
                  }}
                >
                  {todo.text}
                </span>
              )}
              <div className="btn-container">
                <button
                  onClick={() => handleToggleComplete(todo.id)}
                  className={todo.completed ? "uncomplete-btn" : "complete-btn"}
                >
                  {todo.completed ? "Mark Incomplete" : "Mark Complete"}
                </button>
                <button onClick={() => handleEditTodo(todo.id)} className="edit-btn">
                  Edit
                </button>
                <button onClick={() => handleDeleteTodo(todo.id)} className="delete-btn">
                  Delete
                </button>
                {editing === todo.id && (
                  <button onClick={() => handleSubmitUpdate(todo.id)} className="submit-btn">
                    Submit
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;