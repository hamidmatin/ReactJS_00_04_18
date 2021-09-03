import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
  return (
    <div className='navbar'>
      <NavLink to='/' exact activeStyle={{ borderBottom: '2px solid red' }}>
        Home
      </NavLink>
      <NavLink
        to='/users'
        activeClassName='custom-active'
        activeStyle={{ borderBottom: '2px solid red' }}
      >
        Users
      </NavLink>
      <NavLink to='/posts'>Posts</NavLink>
      <NavLink to='/redux-sample'>Redux Sample</NavLink>
      <NavLink to='/products'>Products</NavLink>
      <NavLink to='/context-sample'>Context Sample</NavLink>
    </div>
  );
}
