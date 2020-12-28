import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { END } from 'redux-saga';

import { getPostAsync } from '../../store/modules/post'
import { GetPostIds } from '../../lib/apis/post'
import { Post } from '../../lib/types'
import { wrapper, SagaStore } from '../../store/store'

import PostDetail from '../../components/post/PostDetail';

type PostPageProps = {
  post: Post;
}

function PostPage({ post }: PostPageProps) {
  return <PostDetail post={post} />;
}

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  async ({ store, params }) => {
    store.dispatch(getPostAsync.request(params?.id as string))
    store.dispatch(END);
    await (store as SagaStore).sagaTask.toPromise();

    const { data } = store.getState().post.post

    return {
      props: { post: data }
    }
  }
)

export const getStaticPaths: GetStaticPaths = async () => {
  const postIds = await GetPostIds()
  const paths = postIds.map((id) => ({ params: { id } }));

  return {
    paths,
    fallback: false
  };
}

export default PostPage;