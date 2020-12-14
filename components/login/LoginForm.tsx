import React from 'react';
import styled from 'styled-components';

import FormGroup from './FormGroup';

function LoginForm() {
  return (
    <Wrapper>
      <p className='form-text'>{`로그인 페이지`}</p>
      <FormGroup />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 350px;
  height: 200px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid #a4a4a4;
  border-radius: 10px;

  .form-text {
    margin-bottom: 20px;
  }
`;

export default LoginForm;