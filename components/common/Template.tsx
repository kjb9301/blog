import React, { ReactNode } from 'react';
import styled from 'styled-components';

import Header from './Header';

type TemplateProps = {
  children: ReactNode;
};

function Template({ children }: TemplateProps) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
}

const Container = styled.main`
  display: flex;
  justify-content: center;
`;

export default Template;
