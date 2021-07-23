import logo from './logo.svg';
import './App.css';
/** import modules */
// import { MY_PROJECT_NAME, START_DATE, SESSION_COUNT } from './react-modules/my_constant'
// import {MY_PROJECT_NAME as MPN, START_DATE, SESSION_COUNT} from './react-modules/my_constant'
import * as constants from './react-modules/my_constant';
// import myFucntion, { Course } from './react-modules/my-module';
import mfn, { Course } from './react-modules/my-module';

import Header from './containers/header/header'
import Footer from './containers/footer'

function App() {
  // myFucntion()
  mfn()
  const myCourse = new Course('ReactJS', 40)
  
  return (
    <div className='App'>
      <Header />

      <header className='App-header'>
        {/* <h1>{MY_PROJECT_NAME}</h1> */}
        {/* <h1>{MPN}</h1>
        <p>Start Date {START_DATE}, Session Count is {SESSION_COUNT}</p> */}
        <h1>{constants.MY_PROJECT_NAME}</h1>
        <p>
          Start Date {constants.START_DATE}, Session Count is {constants.SESSION_COUNT}
        </p>
        <p>{myCourse.showInfo()}</p>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
      <Footer />
    </div>
  );
}

export default App;
