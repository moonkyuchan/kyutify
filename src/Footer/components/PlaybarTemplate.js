import React from "react";
import styled from "styled-components";

const PlaybarTemplate = ({ children }) => {
  return <PlaybarBlock>{children}</PlaybarBlock>;
};

const PlaybarBlock = styled.div`
  display: flex;
  align-items: center;
  border: 0.1px solid grey;
  width: 100%;
  height: 90px;
  background: black;
  position: sticky;
  bottom: 0px;
`;

export default PlaybarTemplate;
