import React from 'react';
import styled from 'styled-components';

import EditorForm from '../../components/editor/EditorForm';

function WritePage() {
  return (
    <Wrapper>
      <EditorForm />
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