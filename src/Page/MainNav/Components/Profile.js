import React from "react";
import styled from "styled-components";
import { CgProfile } from "react-icons/cg";
import { BiDownArrow } from "react-icons/bi";

const Profile = () => {
  return (
    <ProfileBlock>
      <CgProfile style={{ fontSize: "40px" }} />
      <span>KYU</span>
      <BiDownArrow />
    </ProfileBlock>
  );
};

const ProfileBlock = styled.div`
  display: flex;
  align-items: center;
  min-width: 90px;
  background: black;
  border: 0px solid black;
  border-radius: 50px;
  padding: 0 9px;
  cursor: pointer;
  &:hover {
    background: white;
    color: black;
  }

  span {
    padding: 0 8px;
    font-size: 15px;
    font-weight: bold;
  }
`;

export default Profile;
