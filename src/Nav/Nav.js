import React from "react";
import styled from "styled-components";
import Navtemplate from "./Components/Navtemplate";
import { BiCaretRightCircle } from "react-icons/bi";
import NavMenu from "./Components/NavMenu";
import NavOptions from "./Components/NavOptions";

const Nav = () => {
  return (
    <Navtemplate>
      <NavTitle>
        <BiCaretRightCircle style={{ fontSize: "45px", marginRight: "5px" }} />
        <h1>Kyutify</h1>
      </NavTitle>
      <NavMenu />
      <NavOptions />
    </Navtemplate>
  );
};

const NavTitle = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  h1 {
    font-size: 40px;
  }
  cursor: pointer;
`;

export default Nav;
