import React from "react";
import styled from "styled-components";
import Arrow from "./Components/Arrow";
import Profile from "./Components/Profile";

const MainNav = () => {
  return (
    <MainNavBlock>
      <Arrow />
      <Profile />
    </MainNavBlock>
  );
};

const MainNavBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  height: 60px;
  position: sticky;
`;

export default MainNav;
