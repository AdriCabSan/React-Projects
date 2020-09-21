import React from 'react';
import ReactDOM from 'react-dom';
import {Route,BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import LoginComponent from './components/login/login';
import SignupComponent from './components/signup/signup';
import DashboardComponent from './components/dashboard/dashboard';
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
var firebaseConfig = {
  apiKey: "AIzaSyAzHmfV7jSbzfzbx6EeE-7Ew8WCYaKA8EA",
  authDomain: "react-chat-app-a3a4a.firebaseapp.com",
  databaseURL: "https://react-chat-app-a3a4a.firebaseio.com",
  projectId: "react-chat-app-a3a4a",
  storageBucket: "react-chat-app-a3a4a.appspot.com",
  messagingSenderId: "993754796825",
  appId: "1:993754796825:web:e1a4dc325f2df1e02ceb88"
}
firebase.initializeApp(firebaseConfig)
const routing = (
  <Router>
    <Route path='/login' component={LoginComponent}></Route>
    <Route path='/signup' component={SignupComponent}></Route>
    <Route path='/dashboard' component={DashboardComponent}></Route>
  </Router>
)
ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
