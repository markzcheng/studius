import React from 'react';
import './App.css';

import LoginScreen from "./Screens/Login"
import RegisterScreen from "./Screens/Register"
import LoadingScreen from "./Screens/Loading"
<<<<<<< Updated upstream
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
=======
import StudyScreen from "./Screens/Study"
import CalendarScreen from "./Screens/Calender"
import TasksScreen from "./Screens/Tasks"
import MusicScreen from "./Screens/Music"
import SettingsScreen from "./Screens/Settings"
import ProfileScreen from "./Screens/Profile"

import NavBar from "./components/NavBar"

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
>>>>>>> Stashed changes

/* Load screens into App */


function App() {
  return (
<<<<<<< Updated upstream
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <LoginScreen/>
          </Route>
        </Switch>
      </div>
    </Router>
=======
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={LoginScreen}/>
          <Route path="/register" exact component={RegisterScreen}/>
          <Route path="/study" exact component={StudyScreen}/>
          <Route path="/calendar" component={CalendarScreen}/>
          <Route path="/tasks" component={TasksScreen}/>
          <Route path="/music" component={MusicScreen}/>
          <Route path="/profile" component={ProfileScreen}/>
          <Route path="/settings" component={SettingsScreen}/>
        </Switch>
      </Router>
    </div>
>>>>>>> Stashed changes
  );
}

export default App;

