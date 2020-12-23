import React from 'react';
import styled from 'styled-components';

function About() {
  return (
    <Wrapper>
      <ImgWrapper>
        <div className="box-image">image</div>
      </ImgWrapper>
      <TextWrapper>
        <p className="profile-name">
          <span className="profile-name-prefix">Written By</span><a>name</a></p>
        <p className="profile-introduction">intro</p>
        <p className="profile-socials">
          <a>GitHub</a>
        </p>
      </TextWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  border: 1px solid blue;
  display: flex;
  margin-bottom: 20px;
`;
const ImgWrapper = styled.article`
  border: 1px solid red;
  flex: 1;
  padding: 10px 0;
  
  .box-image {
    margin: auto;
    width: 80px;
    height: 80px;
    border-radius: 100%;
    border: 1px solid black;
  }
`;
const TextWrapper = styled.article`
  border: 1px solid green;
  flex: 3;
  display: flex;
  flex-direction: column;

  p {
    flex: 1;
    border: 1px solid red;
    display: flex;
    align-items: center;
    padding: 0 10px;
  }

  .profile-name {
    .profile-name-prefix {
      font-size: 90%;
      margin-right: 4px;
    }

    a {
      background-color: #ecf0f2;
      font-size: 95%;
      padding: 2px 6px;
      font-weight: bolder;
      border-radius: 8px;
    }
  }

  .profile-introduction {
    font-size: 80%;
    line-height: 1.4;
    color: #7d7d7d;
  }

  .profile-socials {
    font-size: 80%;
  }
`;

export default About
