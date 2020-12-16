import React from 'react';
import styled from 'styled-components';

import WriteForm from '../../components/editor/WriteForm';

function WritePage() {
  console.log('writepage');
  return (
    <Wrapper>
      <WriteForm />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default WritePage;