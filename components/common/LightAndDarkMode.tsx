import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Switch, { ReactSwitchProps } from 'react-switch';

import { setMode } from '../../store/modules/category'
import { RootState } from '../../store/modules';

function LightAndDarkMode() {
  const { darkMode } = useSelector((state: RootState) => state.category)
  const dispatch = useDispatch();

  const onChangeMode = () => {
    dispatch(setMode())
  };

  const switchProps: ReactSwitchProps = {
    checked: darkMode,
    checkedIcon: <span>D</span>,
    uncheckedIcon: <span>L</span>,
    offColor: '#d9dfe2',
    onColor: '#999999',
    onHandleColor: "#282c35",
    onChange: onChangeMode,
  }

  return (
    <Wrapper>
      <Switch {...switchProps} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: right;
  margin-bottom : 20px;

  .react-switch-bg {
    div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default LightAndDarkMode;
