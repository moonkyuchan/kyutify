import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import styled from "styled-components";
import { BiRightArrow } from "react-icons/bi";
import { AiOutlinePause } from "react-icons/ai";
import { useSelector } from "react-redux";

const PlayButton = ({ getTrackId, id, trackId }) => {
  const test = useSelector((state) => state.trackReducer);
  const playurl = test[0]?.track?.preview_url;
  console.log("리덕스로 넘어온 data", test);
  console.log("prop로 넘어온 data", trackId);

  return (
    <PlayButtonBlock onClick={() => getTrackId(id)}>
      {trackId?.playPause ? <AiOutlinePause /> : <BiRightArrow />}
      {/* <ReactAudioPlayer src={playurl} autoPlay="true" volume="0.1" /> */}
    </PlayButtonBlock>
  );
};

export const PlayButtonBlock = styled.div`
  position: absolute;
  right: 30px;
  top: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  background: #8bc34a;
  cursor: pointer;

  transform: translateY(0);
  opacity: 0;
  transition: 0.7s;
`;
export default PlayButton;
