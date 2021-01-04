import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useSelector } from 'react-redux';
import { END } from 'redux-saga';
import Head from 'next/head';

import { getPostAsync } from '../../store/modules/post'
import { GetPostIds } from '../../lib/apis/post'
import { PageProps } from '../../lib/types'
import { wrapper, SagaStore } from '../../store/store'
import { RootState } from '../../store/modules';

import PostDetail from '../../components/post/PostDetail';

function PostPage({ isLoggedIn }: PageProps) {
  const { data: post } = useSelector((state: RootState) => state.post.post);
  if (!post) return null;
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="keywords" content={post.category} />
        <meta name="description" content={post.description} />
      </Head>
      <PostDetail post={post} isLoggedIn={isLoggedIn} />
    </>
  );
}

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  async (ctx) => {
    const { params } = ctx;
    console.log(params);
    ctx.store.dispatch(getPostAsync.request(params?.id as string))

    ctx.store.dispatch(END);
    await (ctx.store as SagaStore).sagaTask.toPromise();

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