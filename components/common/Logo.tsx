import React from 'react';
import styled from 'styled-components';

function Logo() {
  return (
    <Wrapper>
      <span className='text-logo'>JBLog</span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .text-logo {
    font-size: 2rem;
    color: #021969;
  }
`;

export default Logo;