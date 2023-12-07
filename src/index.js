import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import Exo29 from './exo29/Exo29a';
import Exo30b from './exo30/Exo30b';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Exo30b />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
