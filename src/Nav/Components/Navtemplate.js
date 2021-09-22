import React from "react";
import styled from "styled-components";

const Navtemplate = ({ children }) => {
  return <NavtemplateBlock>{children}</NavtemplateBlock>;
};

const NavtemplateBlock = styled.div`
  max-width: 393px;
  height: 100vh;
  background: #000;
  padding: 24px;
  color: white;
`;

export default Navtemplate;
