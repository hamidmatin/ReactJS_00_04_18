import React, { Component } from 'react';

import './page-title.css';

export default class PageTitle extends Component {
  render() {
    return (
      <>
        <h2 className='page-title'>
          <span>{this.props.title}</span>
        </h2>
        <hr />
      </>
    );
  }
}
