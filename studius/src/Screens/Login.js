import React, { useState, useEffect } from 'react';
import './Login-Register.css';
import logo_white_outline from "../Assets/studius_logo_white_outline.png"
import white_arrow from "../Assets/whitearrow.png"
import app from "../Firebase.js";
import {withRouter, useHistory} from 'react-router-dom';

// Define components

class LogoWhiteOutline extends React.Component {
  render() {
      return (
          <div class="containerCenter">
            <img src={logo_white_outline} width="180" height="180"/>
          </div>
      );
  }
}

class StudiusTextLogo extends React.Component {
  render() {
    return (
      <p>studius</p>
    )
  }
}

class SubmitButton extends React.Component {
  render() {
    return (
      <div class="containerCenter">
        <button class="submitButton loginButton" type="submit" onClick={function() { alert('click'); }}>
          <img src={white_arrow} width="60" height="70"/>
          {/* <h2>==></h2> */}
        </button>
      </div>
    )
  }
}

class RegisterButton extends React.Component {
  render () {
    return (
      <div class="containerCenter">
        <button class="registerButton">new to studius? register</button>
      </div>
    )
  }
}

// Load components into screen

function LoginScreen() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  }

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  }

  const handleLogin = () => {
    clearErrors();
    app
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(err => {
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;
      }
    });
  };
 
  const authListener = () => {
    app.auth().onAuthStateChanged(user => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  const history = useHistory();

  const routeChange = () =>{ 
      let path = '/study'; 
      history.push(path);
    }

  useEffect(() => {
    authListener();
  }, []);


  return (
    <div class="background">
      <div class="container">
        <div class="bottomMargin">
          <LogoWhiteOutline />

          <StudiusTextLogo/>

          <div class="container2">
            <form>
              <label for="e-mail"></label>
              <input class="loginFormInput" type="text" id="e-mail" placeholder="e-mail" required value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
              <p class="errorMessage">{emailError}</p>
              <label for="password"></label>
              <input class="loginFormInput" type="password" id="password" placeholder="password" required value={password} onChange={e => setPassword(e.target.value)} /><br/>
              <p class="errorMessage">{passwordError}</p>
            </form>
          </div>

          <div class="containerCenter">
            <button class="submitButton loginButton" type="submit" onClick={routeChange}>
              <img src={white_arrow} width="60" height="70"/>
                {/* <h2>==></h2> */}
            </button>
          </div>

          <RegisterButton />

          <div class="orText">or</div>
          <div class="signInAlternatives">sign in with Google // Spotify</div>
        </div>

      </div>
    </div>
  );
}

export default LoginScreen;