import React from 'react';
import styled from 'styled-components';

import { PageProps } from '../../lib/types';

import LoginForm from '../../components/login/LoginForm';

function LoginPage({ isLoggedIn }: PageProps) {
  return (
    <Wrapper>
      <LoginForm isLoggedIn={isLoggedIn} />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: 100vh;
  padding-top: 100px;
`;

export default LoginPage;