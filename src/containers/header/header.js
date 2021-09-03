import React, { Component } from 'react';
import Navbar from './navbar'
import './header.css';

// class Header extends React.Component{

// }

class Header extends Component {
  state = {};

  constructor() {
    super();

    // this.timer = new Date().toLocaleTimeString()
    // console.log(this.state)
    this.state = {
      timer: new Date(),
    };
  }

  componentDidMount() {
    // setInterval(() => {
    //   // this.timer = new Date().toLocaleTimeString()
    //   this.setState({ timer: new Date() });
    // }, 1000);
  }
  render() {
    //Javascript code ...
    // return jsxElement
    // console.log(this.props)
    return (
      <div className='header'>
        <h1>{this.props.projectName}</h1>
        <p>{this.props.title}</p>
        <p>{this.state.timer.toLocaleTimeString()}</p>
        {this.props.children}
        <Navbar />
      </div>
    );
  }
}
export default Header;
