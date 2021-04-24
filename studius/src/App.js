import React from 'react';
import './App.css';

import LoginScreen from "./Screens/Login"
import RegisterScreen from "./Screens/Register"
import LoadingScreen from "./Screens/Loading"
import StudyScreen from "./Screens/Study"
import CalendarScreen from "./Screens/Calender"
import TasksScreen from "./Screens/Tasks"
import MusicScreen from "./Screens/Music"
import SettingsScreen from "./Screens/Settings"
import ProfileScreen from "./Screens/Profile"

import NavBar from "./components/NavBar"

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

/* Load screens into App */


function App() {
  return (
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
  );
}

export default App;

