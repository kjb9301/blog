import React, { useEffect } from 'react'
import styled from 'styled-components'

import { GetPosts } from '../../lib/apis/post'

import PostItem from './PostItem'

function PostList() {
  useEffect(() => {
    console.log('useEffect');
    const getData = async () => {
      const data = await GetPosts();
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
