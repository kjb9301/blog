import React from 'react'
import styled from 'styled-components';

import Header from './Header';

function PortfolioLayout({ children }) {
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
`;

export default PortfolioLayout
