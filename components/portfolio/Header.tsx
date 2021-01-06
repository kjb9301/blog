import React from 'react'
import styled from 'styled-components';

function Header() {
  return (
    <Wrapper>
      <Nav />
    </Wrapper>
  )
}

const Wrapper = styled.header`

`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 12px;
  z-index: 10;
  font-family: 'Helvetica';
`;

export default Header
