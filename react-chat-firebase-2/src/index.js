import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom'

import App from './components/App';

import { initializeApp } from "firebase/app";

//import CSS
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXb9Ujkdew6RDyFF4RUsmRhGf6Z15Jaao",
  authDomain: "react-chat-sp24.firebaseapp.com",
  databaseURL: "https://react-chat-sp24-default-rtdb.firebaseio.com",
  projectId: "react-chat-sp24",
  storageBucket: "react-chat-sp24.appspot.com",
  messagingSenderId: "994121042890",
  appId: "1:994121042890:web:22ccfdc90361a50ced1d33"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>    
);