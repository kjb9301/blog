import React from 'react';
import styled from 'styled-components';

import FormButtons from './FormButtons';

type TitleAndButtonProps = {
  title: string;
  onChangeText: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function TitleAndButton({ title, onChangeText }: TitleAndButtonProps) {
  return (
    <Wrapper>
      <Title
        className='title-input'
        name='title'
        type='text'
        placeholder='제목을 입력하세요.'
        value={title}
        onChange={onChangeText}
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
