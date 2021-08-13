import React, { Component, PureComponent } from 'react';

export default class UserForm extends PureComponent {
  constructor() {
    super();

    this.state = {
      userdata: {
        name: '',
        username: '',
        email: '',
        phone: '',
      },
    };
  }

  nameChangeHandler = (e) => {
    // console.log(e.target.value)
    this.setState({ ...this.state, userdata: { ...this.state.userdata, name: e.target.value } });
  };
  usernameChangeHandler = (e) => {
    // console.log(e.target.value)
    this.setState({
      ...this.state,
      userdata: { ...this.state.userdata, username: e.target.value },
    });

    // let a = 'test';

    // let obj = {
    //   p1: a,
    //   a,
    //   [a]: 'dsdsds'
    // }

    // console.log(obj)
  };

  changeHandler = (e) => {
    this.setState({
      ...this.state,
      userdata: { ...this.state.userdata, [e.target.name]: e.target.value },
    });
  };

  submitHandler = (e) => {
    e.preventDefault();

    /*
        validation
    */

    // console.log(this.state)
    this.props.onSave(this.state.userdata);
  };

  /*************** */
  componentDidUpdate(prevProps) {
    // if (prevProps.user !== this.props.user)
      this.setState({ ...this.state, userdata: this.props.user });
  }

  render() {
    return (
      <form className='user-form' onSubmit={this.submitHandler}>
        <label className='label-control'>Name :</label>
        <input
          type='text'
          className='input-control'
          name='name'
          value={this.state.userdata.name}
          onChange={this.changeHandler}
        />

        <label className='label-control'>Username :</label>
        <input
          type='text'
          className='input-control'
          name='username'
          value={this.state.userdata.username}
          onChange={this.changeHandler}
        />

        <label className='label-control'>E-Mail :</label>
        <input
          type='text'
          className='input-control'
          name='email'
          value={this.state.userdata.email}
          onChange={this.changeHandler}
        />

        <label className='label-control'>Phone :</label>
        <input
          type='text'
          className='input-control'
          name='phone'
          value={this.state.userdata.phone}
          onChange={this.changeHandler}
        />

        <button type='submit' className='btn btn-save'>
          Save
        </button>
      </form>
    );
  }
}
