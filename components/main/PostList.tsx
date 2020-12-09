import React from 'react'
import styled from 'styled-components'

import { Post } from '../../lib/types'

import PostItem from './PostItem'

type PostListProps = {
  posts: Post[];
}

function PostList({ posts }: PostListProps) {
  return (
    <Wrapper>
      {posts.map((post) => {
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

export default PostList
