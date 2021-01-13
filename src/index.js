import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header'
import RouterView from './router';

ReactDOM.render(
  <React.StrictMode>
    <div className="container h-100">
      <Header />
      <RouterView />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
