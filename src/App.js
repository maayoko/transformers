import React, { Component } from 'react';
import Header from "./components/Header/Header";
import Background from "./components/Background/Background";
import "./styles/_main.scss";

class App extends Component {
  render() {
    return (
        <Background>
            <Header />
            {this.props.children}
        </Background>
    );
  }
}

export default App;
