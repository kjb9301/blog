import React from 'react';
import styled from 'styled-components';

function FormButtons() {
  return (
    <Wrapper>
      <button className='btn-register' type='submit'>
        등록하기
      </button>
      <button className='btn-back'>
        나가기
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  margin-left: auto;

  button {
    width: 100px;
    padding: 10px 0;
    font-weight: bold;
    outline: none;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
  }

  .btn-register {
    background-color: #4c80f1;
    margin-right: 20px;
  }

  .btn-back {
    border: 1px solid darkgray;
    color: #000000;
  }
`;

export default FormButtons;