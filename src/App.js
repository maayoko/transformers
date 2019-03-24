import React, { Component } from 'react';
import bgShapeSrc1x from "./assets/images/bg_shape@1x.png";
import bgShapeSrc2x from "./assets/images/bg_shape@2x.png";
import underlay from "./assets/images/underlay-gold.png";

class App extends Component {
  render() {
    return (
      <div>
        <img src={bgShapeSrc1x} srcSet={`${bgShapeSrc2x} 2x`} alt="Background shape" />
        <img src={underlay} alt="Golden underlay" />
      </div>
    );
  }
}

export default App;
