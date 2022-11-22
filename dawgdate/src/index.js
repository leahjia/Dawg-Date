import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App.js';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import './style-project.css';

// const msgElem = <h1 id="DawgDate" className='title'>Title</h1>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);