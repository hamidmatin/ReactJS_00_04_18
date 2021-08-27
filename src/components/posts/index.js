import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Layout from '../../containers/layout';
import { NewButton } from '../buttons';
import PostCard from './post-card';

export default function PostsIndex() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((result) => {
      setPostList(result.data);
    });
  }, []);

  return (
    <Layout title='Posts'>
      <div className='new-wrapper'>
        <NewButton caption='New Posts' path='/posts/new' />
      </div>
      {postList.length > 0 ? (
        postList.map((post) => (
          <PostCard key={post.id} id={post.id} body={post.body} onDelete={() => {}}>
            {post.body}
          </PostCard>
        ))
      ) : (
        <p>List Is Empty</p>
      )}
    </Layout>
  );
}
