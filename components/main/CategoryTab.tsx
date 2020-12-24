import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { RootState } from '../../store/modules';
import useCategory from '../../hooks/useCategory';

import Categories from './Categories';

type CategoryTabProps = {
  isLoggedIn: boolean;
}

function CategoryTab({ isLoggedIn }: CategoryTabProps) {
  const { selectedCtg, onClickCategory } = useCategory('');
  const categoryList = useSelector((state: RootState) => state.category.categoryList.data);
  const { darkMode } = useSelector((state: RootState) => state.category);

  return (
    <Wrapper>
      <CtgWrapper darkMode={darkMode}>
        {isLoggedIn ? <Category>{`+`}</Category> : null}
        <Category className={selectedCtg === '' ? 'selected' : ''} onClick={() => onClickCategory('')}>all</Category>
        {categoryList && <Categories categoryList={categoryList} selectedCtg={selectedCtg} onClickCategory={onClickCategory} />}
      </CtgWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom: 20px;
`;

const CtgWrapper = styled.ul<{ darkMode: boolean }>`
  width: 100%;
  padding: 10px 0;
  background-color: ${props => props.darkMode ? '#24272c' : '#f8f7f7'};
  border-style: solid;
  border-width: 1px 5px;
  border-color: ${props => props.theme.borderColor};
  display: flex;
  overflow-x: scroll;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }

  .selected {
    border: 2px solid ${props => props.theme.mainColor};
    color: ${props => props.theme.mainColor};
    font-weight: bold;
  }
`;

const Category = styled.li`
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: 10px;
  text-align: center;
  line-height: 1.3;
  margin-right: 10px;
  padding: 5px 25px;
  background-color: ${props => props.theme.basicBg};
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:first-child {
    margin-left: 10px;
  }

  &:hover {
    border: 1px solid ${props => props.theme.mainColor};
    color: ${props => props.theme.mainColor};
    font-weight: 600;
  }
`;

export default CategoryTab
