import React from 'react';
import styled from 'styled-components';

type PostAddButtonProps = {
  isLoggedIn: boolean;
}

function PostAddButton({ isLoggedIn }: PostAddButtonProps) {

  if (!isLoggedIn) return null;
  return (
    <Wrapper>
      <Button>{`글 작성`}</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 10px 0;
  text-align: center;
`;

const Button = styled.button`
  border: 1px solid black;
  width: 100%;
  border-radius: 5px;
  padding: 10px;
`;

export default PostAddButton;