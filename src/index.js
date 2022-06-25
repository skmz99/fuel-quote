import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//Some reason index.js and App.js need this exact line (line 6) in each file for routing to work
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
