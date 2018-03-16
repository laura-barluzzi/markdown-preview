import React, { Component } from 'react';
import SplitPane from 'react-split-pane';
import Markdown from './Markdown';
import Preview from './Preview';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <SplitPane className="App" split="vertical" minSize='50%' defaultSize='50%'>
        <Markdown />
        <Preview />
      </SplitPane>
    );
  }
}
