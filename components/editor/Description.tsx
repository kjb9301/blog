import React from 'react';
import styled from 'styled-components';

type DescriptionProps = {
  description: string;
  onChangeText: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function Description({ description, onChangeText }: DescriptionProps) {
  return (
    <Wrapper>
      <TextArea
        name='description'
        placeholder='글에 대한 설명을 적으세요...'
        value={description}
        onChange={onChangeText}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 10px 20px;
  border-bottom: 1px solid #e1e4e6;
`;

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  height: 60px;
  border: none;
  resize: none;

  &::placeholder {
    font-weight: bolder;
    color: darkgray;
    padding-left: 10px;
  }

  &:focus {
    outline: none;
  }
`;

export default Description;
