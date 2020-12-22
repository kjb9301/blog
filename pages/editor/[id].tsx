import React from 'react';
import { END } from 'redux-saga';
import styled from 'styled-components';

import { wrapper } from '../../store/store';
import { getPostAsync } from '../../store/modules/post';

import EditorForm from '../../components/editor/EditorForm';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/modules';

function EditPage() {
  const postData = useSelector((state: RootState) => state.post.post.data);

  if (!postData) return null;
  return (
    <Wrapper>
      <EditorForm postData={postData} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const getServerSideProps = wrapper.getServerSideProps(async (ctx) => {
  const postId = ctx.params?.id;
  ctx.store.dispatch(getPostAsync.request(postId as string))
  ctx.store.dispatch(END);
  await ctx.store.sagaTask.toPromise();
});

export default EditPage;