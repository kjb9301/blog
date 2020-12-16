import React from 'react'

import TitleAndButton from './TitleAndButton';
import CategoryList from './CategoryList';
import Description from './Description';
import Editor from './Editor';

function WriteForm() {
  return (
    <>
      <TitleAndButton />
      <Description />
      <CategoryList />
      <Editor />
    </>
  )
}

export default WriteForm;
