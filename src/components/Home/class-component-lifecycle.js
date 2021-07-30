import React, { Component } from 'react';

import './class-component-lifecycle.css';

export default class ClassComponentLifecycle extends Component {
  constructor() {
    super();

    console.log('(1. Mounting) constructor');

    this.increment = this.increment.bind(this);

    this.state = {
      counter: 0,
    };
  }

  increment() {
    // console.log(this)
    this.setState({ counter: this.state.counter + 1 });
  }

  decrement = () => {
    // console.log(this)
    this.setState({ counter: this.state.counter - 1 });
  };

  static getDerivedStateFromProps(props, state) {
    console.log('(2. Mounting) (5. Updating) getDerivedStateFromProps');
    // console.log('props', props);
    // console.log('state', state);
    if (state.counter > 9) {
      return { ...state, counter: 9 };
    }
    if (state.counter < -9) {
      return { ...state, counter: -9 };
    }
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('(6. Updating) shouldComponentUpdate');
    // console.log('nextProps', nextProps)
    // console.log('nextState', nextState)

    return nextState.counter < 10 && nextState.counter > -10;
    // return true
  }

  render() {
    console.log('(3. Mounting) (7. Updating) render');

    const style = {
      textAlign: 'center',
      padding: '8px 16px',
    };

    const paragStyle = {
      ...style,
      color: 'green',
    };

    return (
      <div style={style}>
        <h3
          style={{
            color: 'red',
            fontStyle: 'italic',
          }}
        >
          {this.props.message}
        </h3>

        <button onClick={this.increment} style={style} className='my-button'>
          +
        </button>
        <button onClick={this.decrement} style={style}>
          -
        </button>
        <p style={paragStyle}>
          Counter : <b>{this.state.counter}</b>
        </p>
      </div>
    );
  }

  componentDidMount() {
    console.log('(4. Mounting) componentDidMount');
    // this.setState({...this.state, counter: 5})
  }
  
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('(8. Updating) getSnapshotBeforeUpdate');
    return 'set value for snapshot or return null'
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(`(9. Updating) componentDidUpdate `);
    console.log('prevProps = ', prevProps);
    console.log('prevState = ', prevState);
    console.log('this.props = ', this.props);
    console.log('this.state = ', this.state);
    console.log('snapshot = ', snapshot);
    
    // if(this.state.counter !== prevState.counter)
    //   this.setState({...this.state, counter: 5})
    
  }

  
  componentWillUnmount() {
    console.log('(10. Unmounting) componentWillUnmount');
  }
}
