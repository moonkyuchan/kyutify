import React from "react";
import styled from "styled-components";
import PlayButton from "./PlayButton";
import { PlayButtonBlock } from "./PlayButton";

const AlbumCrad = ({ name, type, imgSrc }) => {
  return (
    <AlbumBlock>
      <AlbumImg src={imgSrc} />
      <PlayButton />
      <AlbumTitleWrap>
        <AlbumName>{name}</AlbumName>
        <AlbumInfo>{type}</AlbumInfo>
      </AlbumTitleWrap>
    </AlbumBlock>
  );
};
const AlbumImg = styled.img`
  width: 170px;
  height: 170px;
  border: 0px solid black;
`;

const AlbumBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 200px;
  height: 280px;
  border-radius: 5px;
  padding: 15px 0;
  background: #212121;

  transition: background 0.3s ease-in;

  &:hover {
    background: #484848;
    ${AlbumImg} {
      box-shadow: 0.5px 0.5px black, -0.2em 0 1em black;
    }
    ${PlayButtonBlock} {
      display: inherit;
      transform: translateY(-5px);
      opacity: 1;
    }
  }
`;

const AlbumTitleWrap = styled.div`
  width: 170px;
  min-height: 60px;
  margin-top: 15px;
  padding: 5px 0;
  color: white;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const AlbumName = styled.h1`
  font-weight: bold;
`;
const AlbumInfo = styled.h4`
  margin-top: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export default AlbumCrad;
