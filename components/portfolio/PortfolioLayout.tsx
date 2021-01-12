import React, { ReactNode } from 'react'
import styled from 'styled-components';

import Header from './Header';

type PortfolioLayoutProps = {
  children: ReactNode
}

function PortfolioLayout({ children }: PortfolioLayoutProps) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
`;

export default PortfolioLayout
