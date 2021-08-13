import axios from 'axios'
import React, { Component } from 'react'
import UserForm from './user-form'

export default class UserNew extends Component {
  constructor(){
    super()

    this.state = {
      user : null
    }
  }
  newUser = (user)=>{
    console.log(user)
    axios.post('https://jsonplaceholder.typicode.com/users', user)
    .then(result =>{
      console.log(result)

      // window.history.back()
      console.log(this.props)
      this.props.history.goBack()
      // this.props.history.push('/users')
    })
    .catch(error=>{
      console.log(error)
    })
  }
  componentDidMount(){
    this.setState({user: {
      name: '',
      username: '',
      email: '',
      phone: '',
    }})
  }
  render() {

    return (
      <div>
        <UserForm user={this.state.user} onSave={this.newUser}/>
      </div>
    )
  }
}
