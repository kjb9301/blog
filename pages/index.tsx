import styled from 'styled-components';
import { GetStaticProps } from 'next';
import { END } from 'redux-saga';

import { getPostsAsync } from '../store/modules/post'
import { wrapper } from '../store/store'
import { Post } from '../lib/types'

import About from '../components/main/About'
import CategoryTab from '../components/main/CategoryTab'
import PostList from '../components/main/PostList'

type MainPageProps = {
  posts: Post[];
}

function MainPage({ posts }: MainPageProps) {
  return (
    <Wrapper>
      <About />
      <CategoryTab />
      <PostList posts={posts} />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  border: 1px solid orange;
  width: 100%;
  max-width: 40rem;
  padding: 2rem 1rem;
`;

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  async ({ store }) => {

    store.dispatch(getPostsAsync.request())
    store.dispatch(END)

    await store.sagaTask.toPromise();
    const { data } = store.getState().post.posts
    console.log('data', data)
    return {
      props: { posts: data }
    }
  }
)

export default MainPage;
