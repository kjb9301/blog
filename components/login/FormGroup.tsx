import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { loginAsync, logoutAsync } from '../../store/modules/auth';
import { RootState } from '../../store/modules';

type FormGroupProps = {
  isLoggedIn: boolean;
}

function FormGroup({ isLoggedIn }: FormGroupProps) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const { error } = useSelector((state: RootState) => state.auth.login)

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!isLoggedIn) {
      dispatch(loginAsync.request(formData));
    } else {
      dispatch(logoutAsync.request());
    }
  };

  return (
    <Wrapper>
      {!isLoggedIn ? (
        <>
          <Input
            type='text'
            name='email'
            placeholder='email'
            value={formData.email}
            onChange={onChangeInput}
          />
          <Input
            type='text'
            name='password'
            placeholder='password'
            value={formData.password}
            onChange={onChangeInput}
          />
        </>
      ) : null}
      {error ? <ErrorText>{error.message}</ErrorText> : null}
      <Button type='submit' onClick={onSubmit}>
        {!isLoggedIn ? '로그인' : '로그아웃'}
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  border: 1px solid #e1e4e6;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const ErrorText = styled.p`
  color: red;
  font-size: 10px;
  padding: 5px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  color: #fff;
  background-color: #04b486;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default FormGroup;