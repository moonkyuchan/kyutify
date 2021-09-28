import React from "react";
import MainNav from "../MainNav/MainNav";
import HomeTemplate from "./Component/HomeTemplate";
import ArtistCard from "../../Components/ArtistCard";
import styled from "styled-components";
import { ArtistCardData } from "../../Data/ArtistCardData";
import AlbumCard from "../../Components/AlbumCard";

const artistCards = ArtistCardData.map((data) => {
  return (
    <ArtistCard
      key={data.id}
      name={data.name}
      info={data.info}
      imgSrc={data.imgSrc}
    />
  );
});

const albumCards = ArtistCardData.map((album) => {
  return (
    <AlbumCard
      key={album.id}
      name={album.name}
      info={album.info}
      imgSrc={album.src}
    />
  );
});

const Home = () => {
  return (
    <HomeTemplate>
      <MainNav />
      <Section>
        <span>최근 재생한 항목</span>
        <section>{artistCards}</section>
      </Section>
      <Section>
        <span>인기 아티스트</span>
        <section>{artistCards}</section>
      </Section>
      <Section>
        <span>인기 앨범</span>
        <section>{albumCards}</section>
      </Section>
      <Section>
        <span>음악으로 집안을 가득 채우세요</span>
        <section>{albumCards}</section>
      </Section>
      <Section>
        <span>최신 인기 음악</span>
        <section>{albumCards}</section>
      </Section>
      <Section>
        <span>무드</span>
        <section>{albumCards}</section>
      </Section>
    </HomeTemplate>
  );
};

const Section = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  margin-bottom: 50px;
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
