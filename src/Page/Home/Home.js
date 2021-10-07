import React, { useEffect, useState } from "react";
import MainNav from "../MainNav/MainNav";
import HomeTemplate from "./Component/HomeTemplate";
// import ArtistCard from "../../Components/ArtistCard";
import AlbumCard from "../../Components/AlbumCard";
import styled from "styled-components";
import { instance, GET_CATEGORIES } from "../../config";
import { useSelector } from "react-redux";
import DropDown from "./Component/DropDown";
import axios from "axios";

const Home = () => {
  const token = useSelector((state) => state.tokenReducer);

  const [genres, setGenres] = useState({
    selectedGenre: "",
    listOfGenresFromAPI: [],
  });
  const [playlist, setPlaylist] = useState({
    selectedPlaylist: "",
    listOfPlaylistFromAPI: [],
  });
  const [tracks, setTracks] = useState({
    selectedTrack: "",
    listOfTracksFromAPI: [],
  });
  console.log(tracks);

  useEffect(() => {
    async function getCategories() {
      const res = await instance.get(GET_CATEGORIES);
      setGenres({
        selectedGenre: genres.selectedGenre,
        listOfGenresFromAPI: res.data.categories.items,
      });
    }
    getCategories();
  }, [genres.selectedGenre, token]);

  const genreChanged = (val) => {
    setGenres({
      selectedGenre: val,
      listOfGenresFromAPI: genres.listOfGenresFromAPI,
    });
    axios(
      `https://api.spotify.com/v1/browse/categories/${val}/playlists?limit=20`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }
    ).then((playlistResponse) => {
      setPlaylist({
        selectedPlaylist: playlist.selectedPlaylist,
        listOfPlaylistFromAPI: playlistResponse.data.playlists.items,
      });
    });
  };

  const playlistChanged = (val) => {
    setPlaylist({
      selectedPlaylist: val,
      listOfPlaylistFromAPI: playlist.listOfPlaylistFromAPI,
    });
  };

  const handleOnsubmit = async (e) => {
    e.preventDefault();
    const res = await instance.get(
      `playlists/${playlist.selectedPlaylist}/tracks?limit=10`
    );
    setTracks({
      selectedTrack: tracks.selectedTrack,
      listOfTracksFromAPI: res.data.items,
    });
  };

  return (
    <HomeTemplate>
      <MainNav />
      <Section>
        <form onSubmit={handleOnsubmit}>
          <DropDown
            options={genres.listOfGenresFromAPI}
            seletedValue={genres.selectedGenre}
            changed={genreChanged}
          />
          <DropDown
            options={playlist.listOfPlaylistFromAPI}
            seletedValue={playlist.selectedPlaylist}
            changed={playlistChanged}
          />
          <SearchButton type="submit">Search</SearchButton>
        </form>
        <div className="section">
          {tracks?.listOfTracksFromAPI?.map((data, idx) => (
            <AlbumCard
              key={idx}
              name={data.track.name}
              type={data.track.album.album_type}
              imgSrc={data.track.album.images[0].url}
            />
          ))}
        </div>
      </Section>
    </HomeTemplate>
  );
};

const Section = styled.div`
  display: flex;
  flex-direction: column;
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
    margin-top: 50px;
  }
`;

const SearchButton = styled.button`
  border: 1px solid white;
  border-radius: 10px;
  background: black;
  margin-top: 10px;
  width: 100px;
  height: 40px;
  font-size: 15px;
  color: white;
  &:hover {
    background: grey;
  }
`;

export default Home;
