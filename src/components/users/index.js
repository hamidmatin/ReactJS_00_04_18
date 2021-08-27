import React, { Component } from 'react';
import axios from 'axios';
import UserCard from './user-card';
import './users.css';
import Confirm from '../confirm';
import { CONFIRM_RESULT_NO, CONFIRM_RESULT_YES } from '../../utils/constants';
import { Link } from 'react-router-dom';
import Layout from '../../containers/layout';
import { NewButton } from '../buttons';

export default class UsersIndex extends Component {
  constructor() {
    super();

    this.state = {
      userList: [],
      showConfirm: false,
    };
  }

  confirmResult = (result) => {
    console.log(result);
    switch (result) {
      case CONFIRM_RESULT_YES:
        break;

      case CONFIRM_RESULT_NO:
        break;

      default:
        break;
    }

    this.setState({ ...this.state, showConfirm: false });
  };
  userDeleteHandler = (id) => {
    console.log('Delete ' + id);

    // const newState = {...this.state}
    // newState.userList = newState.userList.filter(user => user.id !== id)
    // this.setState(newState)

    this.setState({ ...this.state, showConfirm: true });
    // axios
    //   .delete('https://jsonplaceholder.typicode.com/users/' + id)
    //   .then((result) => {
    //     console.log(result);

    //     this.setState({
    //       ...this.state,
    //       userList: this.state.userList.filter((user) => user.id !== id),
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users').then((result) => {
      console.log(result);
      console.log(result.data);
      this.setState({ userList: result.data });
    });
  }
  render() {
    return (
      <Layout title='Users'>
        {this.state.showConfirm ? (
          <Confirm message='Are you sure to delete ?' onResult={this.confirmResult} />
        ) : null}

        <div className='new-wrapper'>
          <NewButton path='/users/new'/>
        </div>

        <div className='user-container'>
          {this.state.userList.length > 0 ? (
            this.state.userList.map((user) => (
              <UserCard
                key={user.id}
                id={user.id}
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
      </Layout>
    );
  }
}
