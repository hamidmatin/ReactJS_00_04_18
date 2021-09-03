import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeTestValue, changTestvalueByParam } from '../../redux/actions';

const ReduxFC = ({ title }) => {
  const [inputMessage, setInputMessage] = useState('');

  const message = useSelector((state) => state.test);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{title}</h3>
      <button
        onClick={() => {
          dispatch(changeTestValue());
        }}
      >
        Change
      </button>
      <br />
      <input
        type='text'
        value={inputMessage}
        onChange={(e) => {
          setInputMessage(e.target.value);
        }}
      />{' '}
      <button
        onClick={() => {
          dispatch(changTestvalueByParam(inputMessage));
        }}
      >
        Change By Param
      </button>
      <hr />
      <p>Message : {message}</p>
    </div>
  );
};

export default ReduxFC;
