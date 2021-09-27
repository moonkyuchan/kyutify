import React from "react";
import MainNav from "../MainNav/MainNav";
import HomeTemplate from "./Component/HomeTemplate";
import ArtistCard from "../../Components/ArtistCard";
import styled from "styled-components";
import { ArtistCardData } from "../../Data/ArtistCardData";

const latestplay = ArtistCardData.map((data) => {
  return (
    <ArtistCard
      key={data.id}
      name={data.name}
      info={data.info}
      imgSrc={data.imgSrc}
    />
  );
});

const Home = () => {
  return (
    <HomeTemplate>
      <MainNav />
      <Section>
        <span>최근 재생한 항목</span>
        <section>{latestplay}</section>
      </Section>
      <Section>
        <span>인기 아티스트</span>
        <section>{latestplay}</section>
      </Section>
      <Section>
        <span>최근 재생한 항목</span>
        <section>{latestplay}</section>
      </Section>
      <Section>
        <span>인기 아티스트</span>
        <section>{latestplay}</section>
      </Section>
      <Section>
        <span>최근 재생한 항목</span>
        <section>{latestplay}</section>
      </Section>
      <Section>
        <span>인기 아티스트</span>
        <section>{latestplay}</section>
      </Section>
    </HomeTemplate>
  );
};

const Section = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  margin-bottom: 30px;
  span {
    font-size: 25px;
    font-weight: bold;
    padding-bottom: 20px;
  }
  section {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    overflow: hidden;
    place-items: center;
  }
`;

export default Home;
