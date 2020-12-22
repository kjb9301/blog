import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { getCategoriesAsync } from '../../store/modules/category';

import EditorForm from '../../components/editor/EditorForm';

function WritePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoriesAsync.request())
  }, [])

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