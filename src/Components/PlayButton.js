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
  transition: 1s;
`;
export default PlayButton;
