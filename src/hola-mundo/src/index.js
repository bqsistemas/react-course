import React from 'react';
import ReactDOM from 'react-dom/client';

// Add boostrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
// ! Important: own styles, they must go below bootstrap

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppRoutingOne from './AppRoutingOne';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
{/* <AppRoutingOne></AppRoutingOne> */}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
