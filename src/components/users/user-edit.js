import axios from 'axios'
import React, { Component } from 'react'
import Layout from '../../containers/layout'
import UserForm from './user-form'

export default class UserEdit extends Component {
  constructor(){
    super()

    this.state = {
      user : null
    }
  }
  componentDidMount(){
    console.log(this.props.match.params)
    const {id} = this.props.match.params

    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(result =>{
      console.log(result.data)
      this.setState({user: result.data})
    })
    .catch(error => {
      console.log(error)
    })
  }

  updateUser = (user) => {
    // console.log(user)
    const {id} = this.props.match.params
    axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, user)
    .then(result =>{
      console.log(result)

      this.props.history.goBack()
    })
    .catch(error=>{
      console.log(error)
    })
  }
  render() {
    return (
      <Layout title='Edit User'>
        <UserForm user={this.state.user} onSave={this.updateUser}/>
      </Layout>
    )
  }
}
