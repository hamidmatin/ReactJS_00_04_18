import React, { useState, useEffect } from 'react';

export default function HookSample({ message }) {
  const style = {
    textAlign: 'center',
    padding: '8px 16px',
  };

  const messageStyle = {
    ...style,
    color: 'orangered',
  };
  const paragStyle = {
    ...style,
    color: 'green',
  };

  const increment = () => {
    // console.log('increment');
    setCounter(counter + 1);
  };

  const decrement = () => {
    // console.log('decrement');
    setCounter(counter - 1);
  };

  // console.log(useState({}))

  // const [state, setState] = useState(0)
  // console.log(state)
  // console.log(setState)

  const [counter, setCounter] = useState(0);
  const [description, setDescription] = useState('My Description');

  // console.log(useEffect)
  /*
    useEffect(callback function, dependencies)


    useEffect(() => {
      mounting and after updating
      return () => {
        before updateing and unmounting
      }
    }, [input])
  */

  /* sample 1 */
  useEffect(() => {
    console.log('1. Mount, After Update for any state');
    return () => {
      console.log('1-1. Unmount and Before Update any state');
    };
  });

  /* sample 2 */
  useEffect(() => {
    console.log('2. Mount, After Update depend on counter');
    return () => {
      console.log('2-1. Unmount and Before Update counter');
    };
  }, [counter]);

  /* sample 3 */
  useEffect(() => {
    console.log('3. Mount, After Update depend on description');
    return () => {
      console.log('3-1. Unmount and Before Update description');
    };
  }, [description]);

  /* sample 4 */
  useEffect(() => {
    console.log('4. Mount');
    return () => {
      console.log('4-1. Unmount');
    };
  }, []);

  return (
    <div>
      <h3 style={messageStyle}>{message}</h3>

      <div style={style}>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button
          onClick={() => {
            setDescription(`${description}, add some desc`);
          }}
        >
          Add Descripioon
        </button>
      </div>
      <p style={paragStyle}>
        Counter : <b>{counter}</b>
      </p>
      <p style={paragStyle}>
        Description : <b>{description}</b>
      </p>
    </div>
  );
}
