import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import useCategory from '../../hooks/useCategory';
import { createPostAsync, updatePostAsync } from '../../store/modules/post';
import { PostForm, Post } from '../../lib/types';

import TitleAndButton from './TitleAndButton';
import CategoryList from './CategoryList';
import Description from './Description';
import MarkdownEditor from './MarkdownEditor';

type EditorFormProps = {
  postData?: Post;
}

function EditorForm({ postData }: EditorFormProps) {
  const [editMode, setEditMode] = useState(false);
  const [postForm, setPostForm] = useState({
    title: postData?.title || '',
    category: postData?.category || '',
    description: postData?.description || '',
    mdContent: postData?.mdContent || '',
    htmlContent: postData?.htmlContent || '',
    regDate: new Date()
  })

  useEffect(() => {
    if (!postData) return;
    setEditMode(!editMode);
  }, [])

  const { selectedCtg, onClickCategory } = useCategory(postData?.category);
  const dispatch = useDispatch();

  useEffect(() => {
    if (postForm.category === selectedCtg) return;
    setPostForm({
      ...postForm,
      category: selectedCtg
    })
  }, [postForm.category, selectedCtg])

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPostForm({
      ...postForm,
      [name]: value
    })
  }

  const getContentValue = (value: { mdContent: string; htmlContent: string; }) => {
    const { mdContent, htmlContent } = value;
    setPostForm({
      ...postForm,
      mdContent,
      htmlContent
    });
  }

  const checkValidation = () => {
    let result = true;
    for (let key in postForm) {
      const value = postForm[key];
      if (!value) {
        result = false;
        break;
      }
    }
    return result;
  };

  const handleSubmit = () => {
    const result = checkValidation();
    if (!result) return alert('모두 입력해주세요');
    if (editMode) {
      dispatch(updatePostAsync.request({
        ...postForm,
        id: postData.id
      }))
    } else {
      dispatch(createPostAsync.request(postForm));
    }
  }

  return (
    <>
      <TitleAndButton title={postForm.title} editMode={editMode} onChangeText={handleChangeText} onSubmit={handleSubmit} />
      <Description description={postForm.description} onChangeText={handleChangeText} />
      <CategoryList selectedCtg={selectedCtg} onClickCategory={onClickCategory} />
      <MarkdownEditor mdContent={postForm.mdContent} getContentValue={getContentValue} />
    </>
  )
}

export default EditorForm;
