import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';

import React from 'react';
import dynamic from 'next/dynamic';

import { EditorProps as TuiEditorProps } from '@toast-ui/react-editor';

const TuiEditor = dynamic<TuiEditorProps>(
  () => import('@toast-ui/react-editor').then((module) => module.Editor),
  {
    ssr: false,
  }
);

function Editor() {
  return (
    <TuiEditor
      placeholder='글을 작성해주세요...'
      previewStyle='vertical'
      height='100%'
      initialEditType='markdown'
    />
  );
}

export default Editor;