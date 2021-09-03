import axios from 'axios'
import React, { Component } from 'react'
import Layout from '../../containers/layout'
import UserForm from './user-form'
import widthLoading from '../../HOC/width-loading'
export default class UserEdit extends Component {
  constructor(){
    super()

    this.state = {
      user : null,
      isLoading: true
    }
  }
  componentDidMount(){
    console.log(this.props.match.params)
    const {id} = this.props.match.params

    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(result =>{
      console.log(result.data)
      this.setState({user: result.data, isLoading: false})
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
    const LayoutWidthLoading = widthLoading(Layout)
    return (
      <Layout title='Edit User' isLoading={this.state.isLoading}>
        <UserForm user={this.state.user} onSave={this.updateUser}/>
      </Layout>
    )
  }
}
