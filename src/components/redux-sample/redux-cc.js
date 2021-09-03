import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeTestValue, changTestvalueByParam} from '../../redux/actions'
class ReduxCC extends Component {
  constructor() {
    super();
    this.state = {
      inputMessage: '',
    };
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>{this.props.title}</h3>
        <button onClick={this.props.changeMessage}>Change</button>
        <br />
        <input
          type='text'
          value={this.state.inputMessage}
          onChange={(e) => {
            this.setState({ inputMessage: e.target.value });
          }}
        />{' '}
        <button onClick={()=>{this.props.changeByParam(this.state.inputMessage)}}>Change By Param</button>
        <hr />
        <p>Message : {this.props.message}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('IN COMPONENT state = ', state);
  return {
    message: state.test,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeMessage: () => {
      dispatch(changeTestValue());
    },
    changeByParam : (value)=>{
      dispatch(changTestvalueByParam(value))
    }
  };
};
// const t = connect()
// console.log(connect()(ReduxCC))
export default connect(mapStateToProps, mapDispatchToProps)(ReduxCC);
