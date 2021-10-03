import React, { useEffect, useState } from "react";
import MainNav from "../MainNav/MainNav";
import HomeTemplate from "./Component/HomeTemplate";
import ArtistCard from "../../Components/ArtistCard";
import styled from "styled-components";
// import { ArtistCardData } from "../../Data/ArtistCardData";
// import AlbumCard from "../../Components/AlbumCard";
import axios from "axios";
import {
  TOKEN_REQUEST_API,
  TOKEN_AUTH,
  instance,
  ARTIST_API,
} from "../../config";
import { useDispatch, useSelector } from "react-redux";
import { fetchToken } from "../../store/action";

// const albumCards = ArtistCardData.map((album) => {
//   return (
//     <AlbumCard
//       key={album.id}
//       name={album.name}
//       info={album.info}
//       imgSrc={album.src}
//     />
//   );
// });
const Home = () => {
  console.log("home Component");
  const token = useSelector((state) => state.tokenReducer);
  const dispatch = useDispatch();

  const [artist, setArtist] = useState({});

  useEffect(() => {
    getToken();
    console.log("useEffect getToken()");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getArtist();
    console.log("useEffect getArtist()");
  }, [token]);

  const getToken = async () => {
    console.log("getToken()");
    await axios(TOKEN_REQUEST_API, {
      headers: { Authorization: TOKEN_AUTH },
      data: "grant_type=client_credentials",
      method: "POST",
    })
      .then((tokenRes) => {
        dispatch(fetchToken(tokenRes.data.access_token));
        instance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${tokenRes.data.access_token}`;
      })
      .catch((err) => {
        console.log("token Err", err);
      });
  };

  const getArtist = async () => {
    console.log("getArtist");
    const res = await instance.get(
      ARTIST_API +
        "?ids=2CIMQHirSU0MQqyYHq0eOx%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6"
    );
    setArtist(res.data);
  };

  return (
    <HomeTemplate>
      <MainNav />
      <Section>
        <span>최근 재생한 항목</span>
        <div className="section">
          {artist.artists.map((data) => (
            <ArtistCard key={data.id} name={data.name} type={data.type} />
          ))}
        </div>
      </Section>
      {/* <Section>
        <span>인기 아티스트</span>
        <section>{artistCards}</section>
      </Section> */}
      {/* <Section>
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
      </Section> */}
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
  .section {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    overflow: hidden;
    place-items: center;
  }
`;

export default Home;
