import React from 'react';
import styled from 'styled-components';

import LoginForm from '../../components/login/LoginForm';

function LoginPage() {
  return (
    <Wrapper>
      <LoginForm />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: 100vh;
  padding-top: 100px;
`;

export default LoginPage;