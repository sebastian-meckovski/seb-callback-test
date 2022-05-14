import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SebComponent from './SebComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <App />
    <SebComponent />
  </React.Fragment>
);
