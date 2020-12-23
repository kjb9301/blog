import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { RootState } from '../../store/modules';

function About() {
  const { data: user } = useSelector((state: RootState) => state.auth.user);
  return (
    <Wrapper>
      <ImgWrapper>
        <div className="box-image">
          <img src={`/images/user.jpg`} />
        </div>
      </ImgWrapper>
      <TextWrapper>
        <p className="profile-name">
          <span className="profile-name-prefix">{`Written by`}</span>
          <a>{user?.nickName}</a>
        </p>
        <p className="profile-introduction">{user?.introduction}</p>
        <p className="profile-socials">
          <a href="https://github.com/kjb9301" target="_blank">{`@GitHub`}</a>
        </p>
      </TextWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  display: flex;
  margin-bottom: 20px;
`;
const ImgWrapper = styled.div`
  padding: 5px 10px 10px 10px;
  
  .box-image {
    margin: auto;
    width: 80px;
    height: 80px;
    overflow: hidden;
    border-radius: 100%;
    border: 1px solid #ecf0f2;
    position: relative;

    img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
const TextWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  p {
    display: flex;
    align-items: center;
    padding: 0 10px;
  }

  .profile-name {
    flex: .5;
    .profile-name-prefix {
      font-size: 90%;
      margin-right: 4px;
    }

    a {
      background-color: #ecf0f2;
      font-size: 95%;
      padding: 2px 10px;
      font-weight: bolder;
      border-radius: 8px;
    }
  }

  .profile-introduction {
    flex: 1;
    font-size: 80%;
    line-height: 1.4;
    color: #7d7d7d;
  }

  .profile-socials {
    flex: .5;
    font-size: 80%;
  }
`;

export default About
