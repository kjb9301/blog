import React from 'react'
import styled from 'styled-components'

import PostItem from './PostItem'

function PostList() {
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
