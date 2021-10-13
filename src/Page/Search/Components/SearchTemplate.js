import React from "react";
import styled from "styled-components";

const SearchTemplate = ({ children }) => {
  return <SearchTemplateBlock>{children}</SearchTemplateBlock>;
};
const SearchTemplateBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 40px;
  flex: 1;
  position: relative;
  max-width: 1600px;
`;
export default SearchTemplate;
