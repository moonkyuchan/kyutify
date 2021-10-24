import React from "react";
import styled from "styled-components";

const LibraryTemplate = ({ children }) => {
  return <LibraryTemplateBlock>{children}</LibraryTemplateBlock>;
};

const LibraryTemplateBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 40px;
  flex: 1;
  position: relative;
  max-width: 1600px;
`;

export default LibraryTemplate;
