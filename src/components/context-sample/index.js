import React, { /*useContext,*/ useState } from 'react';
import Layout from '../../containers/layout';

// import { MyContext } from '../../context/my-context'
import { changeTestValue, changTestvalueByParam } from '../../context/actions';
import { useMyContext } from '../../context/my-context';

const ContextSampleIndex = () => {
  // const {myState, dispatch} = useContext(MyContext)
  const { myState, dispatch } = useMyContext();
  const [inputMessage, setInputMessage] = useState('');
  // console.log(context)
  return (
    <Layout title='FC Context Sample'>
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
      <p>Message : {myState.test}</p>
    </Layout>
  );
};

export default ContextSampleIndex;
