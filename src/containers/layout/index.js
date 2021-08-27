import React, { Fragment } from 'react';
import Footer from '../footer';
import Header from '../header/header';

import * as constants from '../../react-modules/my_constant';
import './layout.css';
import PageTitle from '../../components/page-title';

export default function Layout({ title, children }) {
  return (
    <Fragment>
      <Header title='Session 4' projectName={constants.MY_PROJECT_NAME} />
      <main className='container'>
        <PageTitle title={title}/>
        {children}
      </main>
      <Footer />
    </Fragment>
  );
}


