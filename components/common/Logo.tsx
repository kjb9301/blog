import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

function Logo() {
  return (
    <Link href='/'>
      <Wrapper>
        <span className='text-logo'>JBLog</span>
      </Wrapper>
    </Link>
  );
}

const Wrapper = styled.div`
  cursor: pointer;

  .text-logo {
    font-size: 2rem;
    color: #021969;
    letter-spacing: -2px;
    font-weight: bolder;
  }
`;

export default Logo;
