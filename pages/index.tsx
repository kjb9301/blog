import styled from 'styled-components';
import { GetStaticProps } from 'next';
import { END } from 'redux-saga';

import { wrapper, SagaStore } from '../store/store';
import { getUserInfoAsync } from '../store/modules/auth';
import { getPostsAsync } from '../store/modules/post';
import { getCategoriesAsync } from '../store/modules/category';
import { PageProps } from '../lib/types';

import LightAndDarkMode from '../components/common/LightAndDarkMode';
import About from '../components/main/About';
import CategoryTab from '../components/main/CategoryTab';
import PostList from '../components/main/PostList';
import PostAddButton from '../components/main/PostAddButton';

function MainPage({ isLoggedIn }: PageProps) {
  return (
    <Wrapper>
      <LightAndDarkMode />
      <About />
      <CategoryTab isLoggedIn={isLoggedIn} />
      <PostAddButton isLoggedIn={isLoggedIn} />
      <PostList />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  max-width: 40rem;
  padding: 2rem 1rem;
`;

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  async (ctx) => {

    const getUserInfo = ctx.store.dispatch(getUserInfoAsync.request());
    const getPosts = ctx.store.dispatch(getPostsAsync.request());
    const getCtgs = ctx.store.dispatch(getCategoriesAsync.request());

    Promise.all([getUserInfo, getPosts, getCtgs]);

    ctx.store.dispatch(END);
    await (ctx.store as SagaStore).sagaTask.toPromise();
  }
)

export default MainPage;
