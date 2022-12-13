import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";

import App from './components/App.js';

import 'bootstrap/dist/css/bootstrap.css';
import './style.css';


const firebaseConfig = {
	apiKey: "AIzaSyBJDHv8W0b6P2XuYFpJVPEe5X4YRy6Nb3E",
	authDomain: "dawgdate-info340-project.firebaseapp.com",
	projectId: "dawgdate-info340-project",
	storageBucket: "dawgdate-info340-project.appspot.com",
	messagingSenderId: "594425194974",
	appId: "1:594425194974:web:4ef6be7714499a304d154f"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);