import React from 'react';
import './Loading.css';
import logo_white_outline from "../Assets/studius_logo_white_outline.png"

// Define Components

class LogoWhiteOutline extends React.Component {
    render () {
        return (
            <div class="containerCenter">
                <img src={logo_white_outline} width="200" height="200"/>
            </div>
        )
    }
}

class LogoText extends React.Component {
    render () {
        return (
            <body class="logoText">studius</body>
        )
    }
}


class LoadingDotsText extends React.Component {
    render () {
        return (
            <body class="loadingDots">. . .</body>
        )
    }
}

class SloganText extends React.Component {
    render () {
        return (
            <body class="sloganText">made to study</body>
        )
    }
}
  
  // Load components into screen
  
function LoadingScreen() {
    return (
        <div class="background">
            <div class="container">
                <div class="bottomMargin">
                    <LogoWhiteOutline />

                    <LogoText/>
                    
                    <LoadingDotsText/>

                    <SloganText/>
                </div>
            </div>
        </div>
    );
}
  
  export default LoadingScreen;