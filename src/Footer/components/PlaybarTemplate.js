import React from "react";
import styled from "styled-components";

const PlaybarTemplate = ({ children }) => {
  return <PlaybarBlock>{children}</PlaybarBlock>;
};

const PlaybarBlock = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid grey;
  width: 100%;
  height: 90px;
  background: black;
  position: sticky;
  bottom: 1px;
`;

export default PlaybarTemplate;
