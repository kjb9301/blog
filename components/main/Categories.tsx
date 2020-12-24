import React from 'react';
import styled from 'styled-components';

type CategoryListProps = {
  categoryList: string[];
  selectedCtg: string;
  onClickCategory: (value: string) => void;
}

function Categories({ categoryList, selectedCtg, onClickCategory }: CategoryListProps) {
  return (
    <>
      {categoryList.map(category => {
        return (
          <Category key={category} className={selectedCtg === category ? 'selected' : ''} onClick={() => onClickCategory(category)}>{category}</Category>
        )
      })}
    </>
  )
}

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
  }
`;

export default Categories
