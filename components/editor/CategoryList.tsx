import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { RootState } from '../../store/modules';

import Categories from '../main/Categories';

type CategoryListProps = {
  selectedCtg: string;
  onClickCategory: (value: string) => void;
}

function CategoryList({ selectedCtg, onClickCategory }: CategoryListProps) {
  const categoryList = useSelector((state: RootState) => state.category.categoryList.data)
  return (
    <Wrapper>
      {categoryList && <Categories categoryList={categoryList} selectedCtg={selectedCtg} onClickCategory={onClickCategory} />}
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  overflow-x: scroll;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }

  .selected {
    border: 2px solid #4c80f1;
    color: #4c80f1;
    font-weight: bolder;
  }
`;

export default CategoryList;
