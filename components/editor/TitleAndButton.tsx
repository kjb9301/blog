import React from 'react';
import styled from 'styled-components';

import FormButtons from './FormButtons';

function TitleAndButton() {
  return (
    <Wrapper>
      <Title
        className='title-input'
        name='title'
        type='text'
        placeholder='제목을 입력하세요.'
      />
      <FormButtons />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  padding: 10px 20px;
  border-bottom: 1px solid #e1e4e6;
`;

const Title = styled.input`
  width: 80%;

  &::placeholder {
      font-weight: bolder;
      font-size: 1rem;
      color: darkgray;
      padding-left: 10px;
    }
`;

export default TitleAndButton
