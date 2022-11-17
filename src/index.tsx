import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
} from "react-router-dom";

// CSS imports
import 'bootstrap/dist/css/bootstrap.css';
import './assets/stylesheets/theme.scss';
import './assets/stylesheets/index.scss';

// JS imports
import 'bootstrap/dist/js/bootstrap.bundle.min';

import reportWebVitals from './reportWebVitals';
import router from './routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
