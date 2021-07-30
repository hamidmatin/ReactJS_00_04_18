import React, { Component } from 'react';
import ClassComponentLifecycle from './class-component-lifecycle';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      message: 'My Counter',
      display: 'block',
      isVisible: false,
    };
  }
  messageChangeHandler = (newMessage) => {
    this.setState({ ...this.state, message: newMessage });
  };

  hideHandler = () => {
    this.setState({ ...this.state, display: 'none' });
  };
  render() {
    return (
      <div>
        <h2>Home</h2>
        <hr />
        <button onClick={this.messageChangeHandler.bind(this, 'My counter changed by bind')}>
          Change message
        </button>

        <button
          onClick={() => {
            this.messageChangeHandler('My counter changed by call method');
          }}
        >
          Change message
        </button>

        <button onClick={this.hideHandler}>Hide</button>

        <button
          onClick={() => {
            this.setState({ ...this.state, display: 'block' });
          }}
        >
          Show
        </button>

        <button
          onClick={() => {
            this.setState({ ...this.state, isVisible: !this.state.isVisible });
          }}
        >
          Toggle
        </button>

        {this.state.isVisible ? (
          <div style={{ display: this.state.display }}>
            <ClassComponentLifecycle message={this.state.message} />
          </div>
        ) : null}
      </div>
    );
  }
}
