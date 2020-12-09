import React from 'react';
import dynamic from 'next/dynamic';
import { ViewerProps as TuiViewerProps } from '@toast-ui/react-editor';

type ViewerProps = {
  htmlContent: string;
};

const TuiViewer = dynamic<TuiViewerProps>(
  () => import('@toast-ui/react-editor').then((module) => module.Viewer),
  {
    ssr: false,
  }
);

function Viewer({ htmlContent }: ViewerProps) {
  return <TuiViewer initialValue={htmlContent} />;
}

export default Viewer;