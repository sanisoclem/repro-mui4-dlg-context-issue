import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from './ThemeProvider';
import App from './App';


ReactDOM.render(
  <ThemeProvider>
      <App />
  </ThemeProvider>,
  document.querySelector('#root'),
);