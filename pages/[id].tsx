import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { getPostAsync } from '../store/modules/post'
import PostDetail from '../components/post/PostDetail';

function PostPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostAsync.request('14QCjMwbdgy1zyMZqwxN'))
  }, [])
  return <PostDetail />;
}

export default PostPage;