import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

type ButttonGroupProps = {
  postId: string;
  onRemove: () => void;
}

function ButtonGroup({ postId, onRemove }: ButttonGroupProps) {
  return (
    <Wrapper>
      <Link href={{ pathname: `/editor/${postId}` }}>
        <Button type='button' className='btn-modify'>
          수정
        </Button>
      </Link>
      <Button type='button' className='btn-remove' onClick={onRemove}>
        삭제
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 60px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 20px;
  .btn-modify {
    background-color: #4c80f1;
    margin-right: 10px;
  }
  .btn-remove {
    background-color: red;
  }
`;

const Button = styled.button`
  width: 100px;
  height: 100%;
  font-weight: bold;
  outline: none;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
`;
export default ButtonGroup;