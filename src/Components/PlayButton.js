import React from "react";
import styled from "styled-components";
import { BiRightArrow } from "react-icons/bi";

const PlayButton = () => {
  return (
    <PlayButtonBlock>
      <BiRightArrow />
    </PlayButtonBlock>
  );
};

const PlayButtonBlock = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  top: 125px;
  left: 120px;
  width: 45px;
  height: 45px;
  background: #8bc34a;
  cursor: pointer;
`;
export default PlayButton;
