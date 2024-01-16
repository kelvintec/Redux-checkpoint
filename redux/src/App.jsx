import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import AddTask from './Component/AddTask';
import ListTask from './Component/ListTask';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Todo App</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
};

export default App;