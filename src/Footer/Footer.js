import React from "react";
// import styled from "styled-components";
import PlaybarTemplate from "./components/PlaybarTemplate";
import PlayInfo from "./components/PlayInfo";
import Playbar from "./components/Playbar";
import PlayVolume from "./components/PlayVolume";

const Footer = () => {
  return (
    <PlaybarTemplate>
      <PlayInfo />
      <Playbar />
      <PlayVolume />
    </PlaybarTemplate>
  );
};

export default Footer;
