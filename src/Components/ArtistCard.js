import React from "react";
import styled from "styled-components";
import PlayButton from "./PlayButton";
import { PlayButtonBlock } from "./PlayButton";

const ArtistCard = ({ name, type, imgSrc }) => {
  return (
    <ArtistBlock>
      <ArtistImg src={imgSrc} />
      <PlayButton />
      <ArtistTitleWrap>
        <ArtistName>{name}</ArtistName>
        <ArtistInfo>{type}</ArtistInfo>
      </ArtistTitleWrap>
    </ArtistBlock>
  );
};
const ArtistImg = styled.img`
  width: 170px;
  height: 170px;
  border: 0px solid black;
  border-radius: 50%;
`;

const ArtistBlock = styled.div`
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
    ${ArtistImg} {
      box-shadow: 0.5px 0.5px black, -0.2em 0 1em black;
    }
    ${PlayButtonBlock} {
      display: inherit;
      transform: translateY(-5px);
      opacity: 1;
    }
  }
`;

const ArtistTitleWrap = styled.div`
  width: 170px;
  min-height: 60px;
  margin-top: 15px;
  padding: 5px 0;
  color: white;
`;
const ArtistName = styled.h1`
  font-weight: bold;
`;
const ArtistInfo = styled.h4`
  margin-top: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export default ArtistCard;
