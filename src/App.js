// Import React from the react module
import React from "react";

// Import the Provider component from react-redux
import { Provider } from "react-redux";

// Import the store from the store file
import store from "./store";

// Import the Todo component from the Todo file
import Todo from "./Todo";

// Define the App component
const App = () => {
  // Return the JSX for the App component
  return (
    // Wrap the Todo component with the Provider component
    // Pass the store to the Provider component
    <Provider store={store}>
      <Todo /> 
    </Provider>
  );
};

// Export the App component as the default export
export default App;