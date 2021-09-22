import React from "react";
import styled from "styled-components";
import { AiTwotoneHeart } from "react-icons/ai";
import { BsFillPlusSquareFill } from "react-icons/bs";
const NavOptions = () => {
  return (
    <NavOptionsBlock>
      <NavPlayList>
        <BsFillPlusSquareFill style={{ color: "ffffff" }} />
        <span>플레이리스트 만들기</span>
      </NavPlayList>
      <NavLike>
        <AiTwotoneHeart style={{ color: "#ba2d65" }} />
        <span>좋아요 표시한 곡</span>
      </NavLike>
      <BottomLine />
    </NavOptionsBlock>
  );
};

const NavOptionsBlock = styled.div`
  display: flex;
  flex-direction: column;
  color: #bdbdbd;
  font-size: 20px;
  margin-top: 30px;
`;

const NavPlayList = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0 10px 10px;
  cursor: pointer;
  &:hover {
    color: white;
  }
  span {
    padding-left: 14px;
  }
  font-weight: bold;
`;
const NavLike = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0 10px 10px;
  cursor: pointer;
  &:hover {
    color: white;
  }
  span {
    padding-left: 14px;
  }
  font-weight: bold;
`;

const BottomLine = styled.div`
  border-bottom: 0.1mm solid white;
  margin-top: 18px;
`;
export default NavOptions;
