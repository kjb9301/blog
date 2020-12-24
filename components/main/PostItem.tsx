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
    <Link href={{ pathname: `/post/${id}` }}>
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
  border-bottom: 1px solid ${props => props.theme.borderColor};
  margin-bottom: 20px;
  padding: 0.8rem;
  cursor: pointer;

  &:hover {
    p {
      color: ${props => props.theme.mainColor};
    }
  }
`;

const ItemHeader = styled.div`
  .post-title {
    font-size: 1.6rem;
    font-weight: bolder;
    margin-bottom: 5px;
  }

  .post-date {
    text-align: right;
    font-size: 80%;
    color: ${props => props.theme.subFont};
  }
`;

const ItemBody = styled.div`
  .post-content {
    line-height: 1.5;
    margin-bottom: 10px;
    height: 90px;
    font-size: 100%;
    font-weight: 500;
    padding: 15px 0;
  }

  .text-readmore {
    color: ${props => props.theme.subFont};
    font-size: 70%;
    font-style: italic;
  }
`;

export default PostItem;
