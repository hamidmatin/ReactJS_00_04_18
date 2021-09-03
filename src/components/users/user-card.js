import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { DeleteButton, EditButton } from '../buttons';

export default class UserCard extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string,
    phone: PropTypes.string,
    onDelete: PropTypes.func,
  };

  render() {
    return (
      <div className='card'>
        <h2 className='card-title'>{this.props.name}</h2>
        <div className='card-row'>
          <div className='card-label'>User Name :</div>
          <div className='card-text'>{this.props.username}</div>
        </div>
        <div className='card-row'>
          <div className='card-label'>E-Mail :</div>
          <div className='card-text'>{this.props.email}</div>
        </div>
        <div className='card-row'>
          <div className='card-label'>Phone :</div>
          <div className='card-text'>{this.props.phone}</div>
        </div>
        <div className='card-footer'>
          <EditButton path={`/users/edit/${this.props.id}`} />
          <DeleteButton onDelete={this.props.onDelete} />
        </div>
      </div>
    );
  }
}
