import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { Post } from '../../lib/types';

type PostItemProps = {
  post: Post;
}

function PostItem({ post }: PostItemProps) {
  const { id, title, description, regDate } = post;
  return (
    <Link as={`/${title}`} href={{ pathname: `/${id}` }}>
      <Wrapper>
        <ItemHeader>
          <p className='post-title'>{title}</p>
          <p className='post-date'>{regDate}</p>
        </ItemHeader>
        <ItemBody>
          <p className='post-content'>{description}</p>
          <p className='text-readmore'>{`...read more`}</p>
        </ItemBody>
      </Wrapper>
    </Link>
  );
}

const Wrapper = styled.article`
  border-bottom: 1px solid #e1e4e6;
  margin-bottom: 20px;
  padding: 0.8rem;
  cursor: pointer;
`;

const ItemHeader = styled.div`
  .post-title {
    font-size: 1.5rem;
    margin-bottom: 5px;
  }
  .post-date {
    text-align: right;
    font-size: 80%;
    color: #999999;
  }
`;

const ItemBody = styled.div`
  .post-content {
    line-height: 1.5;
    margin-bottom: 10px;
    height: 90px;
    font-size: 90%;
  }

  .text-readmore {
    font-size: 70%;
    font-style: italic;
  }
`;

export default PostItem;
