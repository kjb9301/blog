import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import React, { forwardRef, useRef, MutableRefObject } from 'react';
import dynamic from 'next/dynamic';
import { Editor as EditorType, EditorProps } from '@toast-ui/react-editor';

import { TuiEditorWithForwardedProps } from './Editor';

interface EditorPropsWithHandlers extends EditorProps {
  onChange: () => void;
}

const Editor = dynamic<TuiEditorWithForwardedProps>(() => import('./Editor'), {
  ssr: false,
});

const EditorWithForwardedRef = forwardRef<
  EditorType | undefined,
  EditorPropsWithHandlers
>((props, ref) => (
  <Editor {...props} forwardedRef={ref as MutableRefObject<EditorType>} />
));

type TuiEditorProps = {
  mdContent: string;
  onChangeEditor(value: Value): void;
};

type Value = {
  mdValue: string;
  htmlValue: string;
};

function TuiEditor() {

  return (
    <EditorWithForwardedRef
      placeholder='글을 작성해주세요...'
      previewStyle='vertical'
      height='100%'
      initialEditType='markdown'
      useCommandShortcut={true}
    />
  );
}

export default TuiEditor;