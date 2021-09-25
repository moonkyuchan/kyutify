import React from "react";
import styled from "styled-components";
import PlayButton from "./PlayButton";
import test from "../test.jpeg";

const ArtistCard = () => {
  return (
    <ArtistBlock>
      <ArtistImg>
        <PlayButton />
      </ArtistImg>
      <ArtistTitleWrap>
        <ArtistName>Ed Sheeran</ArtistName>
        <ArtistInfo>아티스트</ArtistInfo>
      </ArtistTitleWrap>
    </ArtistBlock>
  );
};

const ArtistBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 220px;
  height: 280px;
  border-radius: 5px;
  padding: 15px;
  background: #212121;
  &:hover {
    background: #484848;
  }
`;

const ArtistImg = styled.div`
  width: 170px;
  height: 170px;
  border: 0px solid black;
  border-radius: 50%;
  background-image: url(${test});
  background-size: 100% 100%;
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
