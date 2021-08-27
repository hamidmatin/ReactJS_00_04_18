import React, { PureComponent } from 'react';
import { InputLabel } from '../form-controls/input-label';

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
        <InputLabel
          label='Name :'
          type='text'
          name='name'
          value={this.state.userdata.name}
          onChange={this.changeHandler}
          errorMessage='sdsdsd dkajfgakjdf akjdf agf adj'
        />
        
        <InputLabel
          label='Username :'
          type='text'
          name='username'
          value={this.state.userdata.username}
          onChange={this.changeHandler}
        />
        
        <InputLabel
          label='E-Mail :'
          type='email'
          name='email'
          value={this.state.userdata.email}
          onChange={this.changeHandler}
        />
    
        
        <InputLabel
          label='Phone :'
          type='text'
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
