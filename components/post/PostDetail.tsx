import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { Post } from '../../lib/types';
import { removePostAsync } from '../../store/modules/post';

import ButtonGroup from './ButtonGroup';
import Viewer from './Viewer';

type PostDetailProps = {
  post: Post;
}

function PostDetail({ post }: PostDetailProps) {
  const { id, title, regDate, htmlContent } = post;

  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removePostAsync.request(id))
  }

  return (
    <Wrapper>
      <ButtonGroup postId={id} onRemove={handleRemove} />
      <Title>{title}</Title>
      <Date>{regDate}</Date>
      <Viewer htmlContent={htmlContent} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 40rem;
  min-height: calc(100vh - 60px);
  padding-bottom: 5rem;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  margin-top: 30px;
  margin-bottom: 20px;
`;

const Date = styled.p`
  text-align: right;
  font-size: 12px;
  font-weight: bold;
  font-style: italic;
  color: #7d7d7d;
  padding-bottom: 20px;
  border-bottom: 1px solid #7d7d7d;
`;

export default PostDetail;