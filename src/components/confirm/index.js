import React, { Component } from 'react';
import { CONFIRM_RESULT_NO, CONFIRM_RESULT_YES } from '../../utils/constants';

import './confirm.css';

export default class Confirm extends Component {
  render() {
    return (
      <div className='confirm'>
        <div className='confirm-dialog'>
          <div className='confirm-body'>{this.props.message}</div>
          <div className='confirm-footer'>
            <button onClick={()=>{this.props.onResult(CONFIRM_RESULT_YES)}}>Yes</button>
            <button onClick={()=>{this.props.onResult(CONFIRM_RESULT_NO)}}>No</button>
          </div>
        </div>
      </div>
    );
  }
}
