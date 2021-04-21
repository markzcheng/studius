import React from 'react';
import './App.css';
import LoginScreen from "./Screens/Login"
import RegisterScreen from "./Screens/Register"
import LoadingScreen from "./Screens/Loading"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/* Load screens into App */
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <LoginScreen/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
