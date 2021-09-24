import React from "react";
import styled from "styled-components";
import { CgProfile } from "react-icons/cg";

const Profile = () => {
  return (
    <ProfileBlock>
      <CgProfile style={{ fontSize: "40px" }} />
      <span>하위</span>
    </ProfileBlock>
  );
};

const ProfileBlock = styled.div`
  display: flex;
  align-items: center;
  min-width: 90px;
  background: green;
`;

export default Profile;
