import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ id, title, body, onDelete }) => {
  return (
    <div className='card'>
      <h2 className='card-title'>{title}</h2>
      <div className='card-row'>
        <div className='card-label'>id </div>
        <div className='card-text'>{id}</div>
        <div className='card-label'>Body </div>
        <div className='card-text'>{body}</div>
      </div>
      <div className='card-footer'>
        <Link className='btn btn-edit' to={`posts/edit/${id}`}>
          Edit
        </Link>
        <button className='btn btn-delete' onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default PostCard;
