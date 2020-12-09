import React from 'react'
import styled from 'styled-components'

function CategoryList() {
  return (
    <Wrapper>
      <Category>1</Category>
      <Category>2</Category>
      <Category>3</Category>
    </Wrapper>
  )
}

const Wrapper = styled.ul`
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

export default CategoryList
