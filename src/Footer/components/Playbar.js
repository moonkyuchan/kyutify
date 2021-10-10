import React from "react";
import styled from "styled-components";

const Playbar = () => {
  return <PlaybarBlock></PlaybarBlock>;
};

const PlaybarBlock = styled.div`
  width: 50%;
  height: 90px;
  border: 0px solid black;
  background: blue;
`;

export default Playbar;
