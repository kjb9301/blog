import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { Post } from '../../lib/types'
import useCategory from '../../hooks/useCategory'
import { getPostsAsync } from '../../store/modules/post'

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
