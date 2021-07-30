import React, { Component, Fragment } from 'react';
import Footer from '../footer';
import Header from '../header/header';

import * as constants from '../../react-modules/my_constant'
import './layout.css'

export default class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header title='Session 4' projectName={constants.MY_PROJECT_NAME}/>
        <main>{this.props.children}</main>
        <Footer />
      </Fragment>
    );
  }
}
