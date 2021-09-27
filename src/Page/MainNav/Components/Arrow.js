import React from "react";
import styled from "styled-components";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

const Arrow = () => {
  return (
    <ArrowWrap>
      <FaRegArrowAltCircleLeft className="arrow" />
      <FaRegArrowAltCircleRight className="arrow" />
    </ArrowWrap>
  );
};

const ArrowWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80px;
  .arrow {
    font-size: 30px;
    cursor: pointer;
  }
`;
export default Arrow;
