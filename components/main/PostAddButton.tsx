import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

type PostAddButtonProps = {
  isLoggedIn: boolean;
}

function PostAddButton({ isLoggedIn }: PostAddButtonProps) {
  if (!isLoggedIn) return null;
  return (
    <Wrapper>
      <Link href='/editor'>
        <Button >{`글 작성`}</Button>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 10px 0;
  text-align: center;
`;

const Button = styled.button`
  border: 1px solid ${props => props.theme.borderColor};
  width: 100%;
  border-radius: 5px;
  padding: 10px;
  color: ${props => props.theme.mainFont};

  &:hover {
    border: 1px solid ${props => props.theme.mainColor};
    color: ${props => props.theme.mainColor};
    font-weight: bold;
  }
`;

export default PostAddButton;