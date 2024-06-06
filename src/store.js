// Import the configureStore function from @reduxjs/toolkit
import { configureStore } from "@reduxjs/toolkit";

// Import the todoReducer from the todoSlice file
import todoReducer from './todoSlice';

// Create a store using the configureStore function
const store = configureStore({
  // Define the reducer for the store
  reducer: {
    // Use the todoReducer for the 'todos' slice of the state
    todos: todoReducer,
  },
});

// Export the store as the default export
export default store;