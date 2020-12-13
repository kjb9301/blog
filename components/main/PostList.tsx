import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { RootState } from '../../store/modules';

import PostItem from './PostItem';

function PostList() {
  const posts = useSelector((state: RootState) => state.post.posts.data);

  return (
    <Wrapper>
      {posts && posts.map((post) => {
        return (
          <PostItem key={post.id} post={post} />
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  border: 1px solid green;
`;

export default PostList;
