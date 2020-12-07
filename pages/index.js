import styled from 'styled-components'

import About from '../components/home/About'
import CategoryTab from '../components/home/CategoryTab'
import PostList from '../components/home/PostList'

function Home() {
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

export default Home;
