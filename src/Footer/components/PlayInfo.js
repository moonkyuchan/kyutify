import React from "react";
import styled, { css } from "styled-components";
import { useSelector } from "react-redux";

const PlayInfo = () => {
  const track = useSelector((state) => state.trackReducer);

  return (
    <PlayInfoBlock>
      <TrackImg src={track[0]?.track?.album?.images[2].url} />
      <TrackTitle>
        <span className="mainTitle">{track[0]?.track?.name}</span>
        <span className="subTitle">{track[0]?.track?.album?.album_type}</span>
      </TrackTitle>
    </PlayInfoBlock>
  );
};

const PlayInfoBlock = styled.div`
  display: flex;
  align-items: center;
  width: 25%;
  height: 90px;
  /* border: 0px solid black;
  background: pink; */
  padding: 0 20px 0 40px;
`;

const TrackImg = styled.img`
  ${(props) =>
    props.src &&
    css`
      width: 56px;
      height: 56px;
    `}
`;

const TrackTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  color: white;
  .mainTitle {
    font-size: 15px;
    font-weight: bold;
  }
  .subTitle {
    font-size: 10px;
    font-weight: bold;
    margin-top: 5px;
  }
`;

export default PlayInfo;
