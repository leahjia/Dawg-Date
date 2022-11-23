import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App.js';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import './style-project.css';

import SAMPLE_PROFILES from './profile-data.json';


// const msgElem = <h1 id="DawgDate" className='title'>Title</h1>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<App profileData={SAMPLE_PROFILES} />
	</BrowserRouter>
);