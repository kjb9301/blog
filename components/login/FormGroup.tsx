import React from 'react';
import styled from 'styled-components';

function FormGroup() {

  return (
    <Wrapper>
      <Input
        type='text'
        name='email'
        placeholder='email'
      />
      <Input
        type='text'
        name='password'
        placeholder='password'
      />
      <ErrorText>{`errorMsg`}</ErrorText>
      <Button type='submit'>
        {`로그인`}
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  border: 1px solid #e1e4e6;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const ErrorText = styled.p`
  color: red;
  font-size: 10px;
  padding: 5px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  color: #fff;
  background-color: #04b486;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default FormGroup;