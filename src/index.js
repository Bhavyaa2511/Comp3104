import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // If you don't have this file, you can comment out or remove this line
import App from './App'; // Ensure you have an App.js file in the src folder

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
