import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';
import React from 'react';
import App from './App'; // Import your main component
import store from './redux/store'; // Import your Redux store

const Root = () => {
  return (
      <Provider store={store}>
          <App />
      </Provider>
  );
};

export default Root;

