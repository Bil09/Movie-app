import React from 'react';
import ReactDOM from 'react-dom';
import './styles/Css/index.module.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MoviesProvider } from './context/MoviesProvider';

const root = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <MoviesProvider>
      <App />
    </MoviesProvider>
  </React.StrictMode>,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
