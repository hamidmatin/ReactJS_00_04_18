import React from 'react';
import { Link } from 'react-router-dom';
import './button.css';

export const NewButton = ({ caption = 'New', path }) => {
  return <LinkButton path={path} className='btn-new' caption={caption} />;
};

export const EditButton = ({ caption = 'Edit', path }) => {
  return <LinkButton path={path} className='btn-edit' caption={caption} />;
};

export const DeleteButton = ({ caption = 'Delete', onDelete }) => {
  return (
    <button className='btn btn-delete' onClick={onDelete}>
      {caption}
    </button>
  );
};

const LinkButton = ({ path, caption, className }) => {
  return (
    <Link to={path} className={`btn ${className}`}>
      {caption}
    </Link>
  );
};
