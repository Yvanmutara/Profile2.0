import React from 'react';
import ReactDOM from "react-dom/client";
import './i18n';
import App from './App';
import {BrowserRouter}  from "react-router-dom";
// import ReactDOM from 'react-dom/client';


// the translations

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </React.StrictMode>
  )
  // ReactDOM.render(
  //   <React.StrictMode>
  //       <App />
  //   </React.StrictMode>,
  //   document.getElementById('root')
  // );
