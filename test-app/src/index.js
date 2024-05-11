import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import'bootstrap/dist/css/bootstrap.min.css'
import'./App.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import'./styles/header.css'
import'./styles/section1.css'
import'./styles/section2.css'
import'./styles/section3.css'
import'./styles/footer.css'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
