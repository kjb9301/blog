import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { getPostAsync } from '../../store/modules/post';
import { getCategoriesAsync } from '../../store/modules/category';
import { RootState } from '../../store/modules';

import EditorForm from '../../components/editor/EditorForm';

function EditPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const postId = router.query.id;

  useEffect(() => {
    dispatch(getPostAsync.request(postId as string))
    dispatch(getCategoriesAsync.request())
  }, [])

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

export default EditPage;