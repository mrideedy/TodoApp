// Import the createSlice function from @reduxjs/toolkit
import { createSlice } from '@reduxjs/toolkit';

// Create a slice for the todos reducer
const todoSlice = createSlice({
  // Name of the slice
  name: 'todos',
  
  // Initial state of the slice, an empty array
  initialState: [],
  
  // Reducers for the slice
  reducers: {
    // Add a new todo to the state
    addTodo: (state, action) => {
      // Create a new todo object with the current date as the id
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      // Add the new todo to the state
      state.push(newTodo);
    },
    
    // Toggle the completion of a todo
    toggleComplete: (state, action) => {
      // Find the todo with the matching id
      const todo = state.find((todo) => todo.id === action.payload);
      // If the todo exists, toggle its completion status
      if (todo) {
        todo.completed =!todo.completed;
      }
    },
    
    // Delete a todo from the state
    deleteTodo: (state, action) => {
      // Filter out the todo with the matching id
      return state.filter((todo) => todo.id!== action.payload);
    },
    
    // Update a todo in the state
    updateTodo: (state, action) => {
      // Extract the id and text from the action payload
      const { id, text } = action.payload;
      // Find the todo with the matching id
      const todo = state.find((todo) => todo.id === id);
      // If the todo exists, update its text
      if (todo) {
        todo.text = text;
      }
    },
  },
});

// Export the actions from the slice
export const { addTodo, toggleComplete, deleteTodo, updateTodo } = todoSlice.actions;

// Export the reducer from the slice
export default todoSlice.reducer;