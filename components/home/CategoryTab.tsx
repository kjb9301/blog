import React from 'react'
import styled from 'styled-components'

import CategoryList from './CategoryList'

function CategoryTab() {
  return (
    <Wrapper>
      <CategoryList />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom: 20px;
`;

export default CategoryTab
