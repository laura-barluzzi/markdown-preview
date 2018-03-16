import React, { Component } from 'react';

import {
  MarkdownInput,
  MarkdownPreview } from 'react-marked-markdown';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleTextChange(e) {
    this.setState({ value: e.target.value });
    if (this.props.onTextChange) {
      this.props.onTextChange(e.target.value);
    }
  }


  render() {
    return (
      <div className="horizontal-flex">
        <MarkdownInput
          placeholder="Insert Markdown text here..."
          onChange={ this.handleTextChange.bind(this) }
          value={this.state.value}
          className="flex-item"
        />

        <MarkdownPreview
          value={this.state.value}
          className="flex-item"
        />
      </div>
    );
  }
}
