import React, { Fragment } from 'react'

export const InputLabel = ({label, type, name, value, errorMessage, onChange}) => {
  return (
    <Fragment>
      <label className='label-control'>{label}</label>
        <input
          type={type}
          className='input-control'
          name={name}
          value={value}
          onChange={onChange}
        />
        <span style={{color: 'red', fontStyle:'italic', gridColumnStart: '2'}}>{errorMessage}</span>
    </Fragment>
  )
}
