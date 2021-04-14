import React from 'react';
import './App.css';
import LoginScreen from "./Screens/Login"
import RegisterScreen from "./Screens/Register"
import LoadingScreen from "./Screens/Loading"
// import { Route, Switch, Redirect } from 'react-router-dom';

/* Load screens into App */
function App() {
  return (
    <div>
      <LoginScreen/>
    </div>
  );
}

export default App;
