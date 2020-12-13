import styled from 'styled-components';
import { GetStaticProps } from 'next';
import { END } from 'redux-saga';

import { wrapper } from '../store/store';
import { getPostsAsync } from '../store/modules/post';
import { getCategoriesAsync } from '../store/modules/category';

import About from '../components/main/About';
import CategoryTab from '../components/main/CategoryTab';
import PostList from '../components/main/PostList';

function MainPage() {
  return (
    <Wrapper>
      <About />
      <CategoryTab />
      <PostList />
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
  async (ctx) => {
    const getPosts = ctx.store.dispatch(getPostsAsync.request());
    const getCtgs = ctx.store.dispatch(getCategoriesAsync.request());

    Promise.all([getPosts, getCtgs]);
    ctx.store.dispatch(END);

    await ctx.store.sagaTask.toPromise();

  }
)

export default MainPage;
