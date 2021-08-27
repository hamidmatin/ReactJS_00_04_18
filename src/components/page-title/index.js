import React from 'react';
import PropTypes from 'prop-types'

import './page-title.css';

export default function PageTitle({title}) {
  return (
    <>
      <h2 className='page-title'>
        <span>{title}</span>
      </h2>
      <hr />
    </>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired
}
