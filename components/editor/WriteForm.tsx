import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import useCategory from '../../hooks/useCategory';
import { createPostAsync } from '../../store/modules/post';

import TitleAndButton from './TitleAndButton';
import CategoryList from './CategoryList';
import Description from './Description';
import MarkdownEditor from './MarkdownEditor';

function WriteForm() {
  const [postForm, setPostForm] = useState({
    title: '',
    category: '',
    description: '',
    mdContent: '',
    htmlContent: '',
    regDate: new Date()
  })

  const { selectedCtg, onClickCategory } = useCategory();
  const dispatch = useDispatch();

  useEffect(() => {
    setPostForm({
      ...postForm,
      category: selectedCtg
    })
  }, [selectedCtg])

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
    dispatch(createPostAsync.request(postForm));
  }

  return (
    <>
      <TitleAndButton title={postForm.title} onChangeText={handleChangeText} onSubmit={handleSubmit} />
      <Description description={postForm.description} onChangeText={handleChangeText} />
      <CategoryList selectedCtg={selectedCtg} onClickCategory={onClickCategory} />
      <MarkdownEditor mdContent={postForm.mdContent} getContentValue={getContentValue} />
    </>
  )
}

export default WriteForm;
