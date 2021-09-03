import React, { Component } from 'react';
import Layout from '../../containers/layout';
import ClassComponentLifecycle from './class-component-lifecycle';
import HookSample from './hook-sample';

import { connect } from 'react-redux'
class Home extends Component {
  constructor() {
    super();

    this.state = {
      message: 'My Counter',
      display: 'block',
      isVisible: false,
      hookMessage: 'Hello React Hook',
      hookIsVisible: false,
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
      <Layout title={this.props.pageTitle}>

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

        <hr />
        <h2>React Hook</h2>
        <button
          onClick={() => {
            this.setState({ ...this.state, hookIsVisible: !this.state.hookIsVisible });
          }}
        >
          Toggle
        </button>

        <button
          onClick={() => {
            this.setState({ ...this.state, hookMessage: 'Hello React Hook 1' });
          }}
        >
          Change Message
        </button>

        <button
          onClick={() => {
            this.setState({ ...this.state, hookMessage: 'Hello React Hook 2' });
          }}
        >
          Change Message 2
        </button>

        {this.state.hookIsVisible ? <HookSample message={this.state.hookMessage} /> : null}
        <hr />
        <h3>Redux</h3>
        <p>Test Redux : {this.props.test}</p>
      </Layout>
    );
  }
}

const mapSatetToProps = (state)=>{
  return {
    test: state.test
  }
}

export default connect(mapSatetToProps)(Home)