import React, { Component } from 'react';
import Header from "./components/Header/Header";
import Background from "./components/Background/Background";
import Toolbar from "./components/Toolbar/Toolbar";
import "./styles/_main.scss";

class App extends Component {
  render() {
    return (
        <Background>
            <Header />
            {this.props.children}
            <Toolbar style={{ position: "fixed" , width: "100%", bottom: 0 }} />
        </Background>
    );
  }
}

export default App;
