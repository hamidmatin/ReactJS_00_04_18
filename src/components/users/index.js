import React, { Component } from 'react';
import axios from 'axios'
import PageTitle from '../page-title';
import UserCard from './user-card';
import './users.css';

export default class UsersIndex extends Component {
  constructor() {
    super();

    this.state = {
      userList: [],
    };
  }

  userDeleteHandler = (id) => {
    console.log('Delete ' + id);

    // const newState = {...this.state}
    // newState.userList = newState.userList.filter(user => user.id !== id)
    // this.setState(newState)
    
    axios.delete('https://jsonplaceholder.typicode.com/users/' + id)
      .then(result => {
        console.log(result)
        
        this.setState({
          ...this.state,
          userList: this.state.userList.filter((user) => user.id !== id),
        });
      })
      .catch(error =>{
        console.log(error)
      })
  };

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(result => {
        console.log(result)
        console.log(result.data)
        this.setState({userList: result.data})
      })
  }
  render() {
    return (
      <div>
        <PageTitle title='Users' />
        <div className='user-container'>
          {this.state.userList.length > 0 ? (
            this.state.userList.map((user) => (
              <UserCard
                key={user.id}
                name={user.name}
                username={user.username}
                email={user.email}
                phone={user.phone}
                onDelete={() => {
                  this.userDeleteHandler(user.id);
                }}
              />
            ))
          ) : (
            <p>List is Empty</p>
          )}
        </div>
      </div>
    );
  }
}
