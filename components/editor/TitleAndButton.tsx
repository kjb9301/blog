import React from 'react';
import styled from 'styled-components';

type TitleAndButtonProps = {
  title: string;
  editMode: boolean;
  onChangeText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

function TitleAndButton({ title, editMode, onChangeText, onSubmit }: TitleAndButtonProps) {
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
      <BtnWrapper>
        <button className='btn-register' type='submit' onClick={onSubmit}>
          {editMode ? '수정하기' : '등록하기'}
        </button>
        <button className='btn-back'>
          나가기
      </button>
      </BtnWrapper>
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

const BtnWrapper = styled.div`
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

export default TitleAndButton
