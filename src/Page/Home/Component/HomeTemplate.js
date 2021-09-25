import React from "react";
import styled from "styled-components";

const HomeTemplate = ({ children }) => {
  return <HomeTemplateBlock>{children}</HomeTemplateBlock>;
};

const HomeTemplateBlock = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 30px 40px;
`;

export default HomeTemplate;
