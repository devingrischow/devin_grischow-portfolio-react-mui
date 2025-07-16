import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//Top Takes Priority

import './styles/cssReset.css'

import 'bootstrap/dist/css/bootstrap.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


