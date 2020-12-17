import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';

import React, { forwardRef, useRef, MutableRefObject } from 'react';
import dynamic from 'next/dynamic';
import { Editor as EditorType, EditorProps } from '@toast-ui/react-editor';

import { TuiEditorWithForwardedProps } from './TuiEditor';

interface EditorPropsWithHandlers extends EditorProps {
  onChange: () => void;
}

type MarkdownEditorProps = {
  mdContent: string;
  getContentValue(value: Content): void;
};

type Content = {
  mdContent: string;
  htmlContent: string;
};

const Editor = dynamic<TuiEditorWithForwardedProps>(() => import('./TuiEditor'), {
  ssr: false,
});

const EditorWithForwardedRef = forwardRef<
  EditorType | undefined,
  EditorPropsWithHandlers
>((props, ref) => (
  <Editor {...props} forwardedRef={ref as MutableRefObject<EditorType>} />
));

function MarkdownEditor({ mdContent, getContentValue }: MarkdownEditorProps) {
  const editorRef = useRef<EditorType>();

  const onChangeEditor = () => {
    if (!editorRef.current) {
      return;
    }

    const instance = editorRef.current.getInstance();

    const mdContent = instance.getMarkdown();
    const htmlContent = instance.getHtml();

    const value = { mdContent, htmlContent };
    getContentValue(value)
  }

  return (
    <EditorWithForwardedRef
      initialValue={mdContent}
      placeholder='글을 작성해주세요...'
      previewStyle='vertical'
      height='100%'
      initialEditType='markdown'
      useCommandShortcut={true}
      ref={editorRef}
      onChange={onChangeEditor}
    />
  );
}

export default MarkdownEditor;