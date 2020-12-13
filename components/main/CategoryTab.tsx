import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { RootState } from '../../store/modules';
import useCategory from '../../hooks/useCategory';

import Categories from './Categories';

function CategoryTab() {
  const { selectedCtg, onClickCategory } = useCategory();
  const categoryList = useSelector((state: RootState) => state.category.categoryList.data)

  return (
    <Wrapper>
      <CtgWrapper>
        <Category className={selectedCtg === '' ? 'selected' : ''} onClick={() => onClickCategory('')}>All</Category>
        {categoryList && <Categories categoryList={categoryList} selectedCtg={selectedCtg} onClickCategory={onClickCategory} />}
      </CtgWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom: 20px;
`;

const CtgWrapper = styled.ul`
  width: 100%;
  padding: 10px 0;
  background-color: #f4f7f8;
  border-style: solid;
  border-width: 1px 5px;
  border-color: darkgray;
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

const Category = styled.li`
  border: 1px solid darkgray;
  border-radius: 10px;
  text-align: center;
  line-height: 1.3;
  margin-right: 10px;
  padding: 5px 25px;
  background-color: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:first-child {
    margin-left: 10px;
  }

  &:hover {
    border: 1px solid #4c80f1;
    color: #4c80f1;
  }
`;

export default CategoryTab
