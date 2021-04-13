import React from 'react';
import './Login-Register.css';
import logo_white_outline from "../Assets/studius_logo_white_outline.png"

// Define components

class LogoWhiteOutline extends React.Component {
  render() {
      return (
          <div class="containerCenter">
            <img src={logo_white_outline} width="200" height="200"/>
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

class InputBox extends React.Component {
  render() {
    return (
      <div class="container2">
        <form>
          <label for="e-mail"></label>
          <input class="loginFormInput" type="text" id="e-mail" placeholder="e-mail" /><br/>
          <label for="password"></label>
          <input class="loginFormInput" type="password" id="password" placeholder="password" /><br/>
        </form>
      </div>
    );
  }
}

class SubmitButton extends React.Component {
  render() {
    return (
      <div class="containerCenter">
        <button class="submitButton loginButton" type="submit" onClick={function() { alert('click'); }}>
          <h2>==></h2>
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
  return (
    <div class="background">
      <div class="container">
        <div class="bottomMargin">
          <LogoWhiteOutline />

          <StudiusTextLogo/>

          <InputBox />

          <SubmitButton />

          <RegisterButton />

          <div class="orText">or</div>
          <div class="signInAlternatives">sign in with Google // Spotify</div>
        </div>

      </div>
    </div>
  );
}

export default LoginScreen;