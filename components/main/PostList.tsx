import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { RootState } from '../../store/modules';
import { Post } from '../../lib/types';

import PostItem from './PostItem';

function PostList() {
  const [postList, setPostList] = useState<Post[]>([])

  const postsData = useSelector((state: RootState) => state.post.posts.data);
  const { selectedCategory } = useSelector((state: RootState) => state.category);

  useEffect(() => {
    const listByCtg = filteringByCtg();
    setPostList(listByCtg as Post[])
  }, [postsData, selectedCategory])

  const filteringByCtg = () => {
    if (!selectedCategory) return postsData;
    return postsData?.filter(post => post.category === selectedCategory);
  }

  return (
    <>
      {postList && postList.map((post) => {
        return (
          <PostItem key={post.id} post={post} />
        )
      })}
    </>
  )
}

export default PostList;
