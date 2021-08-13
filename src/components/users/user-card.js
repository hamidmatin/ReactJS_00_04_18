import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class UserCard extends Component {
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
        <div className="card-footer">
          <Link to='/users/detail' className='btn btn-detail'>Detail</Link>
          <Link to={`/users/edit/${this.props.id}`} className='btn btn-edit'>Edit</Link>
          <button className='btn btn-delete' onClick={this.props.onDelete}>Delete</button>
        </div>
      </div>
    )
  }
}
