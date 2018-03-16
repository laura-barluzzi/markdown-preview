import React, { Component } from 'react';
import SplitPane from 'react-split-pane';
import './App.css';

class App extends Component {
  render() {
    return (
      <SplitPane split="vertical" minSize='50%' defaultSize='50%'>
        <div>Left</div>
        <div>Right</div>
      </SplitPane>
    );
  }
}

export default App;
