import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { GetPosts } from '../../lib/apis/post'
import { getPostsAsync } from '../../store/modules/post'

import PostItem from './PostItem'

function PostList() {
  const data = useSelector(state => state.post)
  console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('useEffect');
    const getData = () => {
      const data = dispatch(getPostsAsync.request());
      console.log(data);
      return data
    }

    getData();
  }, [])

  return (
    <Wrapper>
      <PostItem />
      <PostItem />
      <PostItem />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  border: 1px solid green;
`;

export default PostList
