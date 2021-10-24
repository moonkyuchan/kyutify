import React from "react";
import styled from "styled-components";
import PlayButton from "./PlayButton";
import { AiTwotoneHeart } from "react-icons/ai";
import { PlayButtonBlock } from "./PlayButton";

const AlbumCrad = ({ id, name, type, imgSrc, getTrackId, goToLike }) => {
  return (
    <AlbumBlock>
      <AlbumImg src={imgSrc} />
      <PlayButton getTrackId={getTrackId} id={id} />
      <AlbumTitleWrap>
        <AlbumName>{name}</AlbumName>
        <AlbumInfo>{type}</AlbumInfo>
      </AlbumTitleWrap>
      <ButtonLike onClick={() => goToLike(id)} id={id}>
        <AiTwotoneHeart style={{ color: "#ba2d65" }} />
      </ButtonLike>
    </AlbumBlock>
  );
};
const AlbumImg = styled.img`
  width: 170px;
  height: 170px;
  border: 0px solid black;
`;

const AlbumName = styled.h1`
  font-weight: bold;
  display: inline-block;

  -webkit-transition: 3.3s;
  -moz-transition: 3.3s;
  transition: 3.3s;

  -webkit-transition-timing-function: linear;
  -moz-transition-timing-function: linear;
  transition-timing-function: linear;
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
  cursor: pointer;
  transition: background 0.3s ease-in;

  -webkit-transition: 3.3s;
  -moz-transition: 3.3s;
  transition: 3.3s;

  -webkit-transition-timing-function: linear;
  -moz-transition-timing-function: linear;
  transition-timing-function: linear;

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
    ${AlbumName} {
      margin-left: -120px;
      text-decoration: none;
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

const AlbumInfo = styled.h4`
  margin-top: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ButtonLike = styled.div`
  position: relative;
  bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  border-radius: 50%;
  padding: 10px;
  width: 40px;
  height: 40px;
  background: black;
  cursor: pointer;
  &:hover {
    background: white;
    border: none;
  }
`;

export default AlbumCrad;
