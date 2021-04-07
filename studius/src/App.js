import React from 'react';
import './App.css';
import logoWithText from "./components/logo-with-text.png"

// Define components

class LogoWithText extends React.Component {
  render() {
      return (
          <div class="containerCenter">
            <img src={logoWithText} width="280" height="211"/>
          </div>
      );
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

function App() {
  return (
    <div class="container">
      <div class="bottomMargin">
        <LogoWithText />

        <InputBox />

        <SubmitButton />

        <RegisterButton />
      </div>

    </div>
  );
}

export default App;
