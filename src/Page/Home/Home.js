import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { instance, GET_CATEGORIES } from "../../config";
import axios from "axios";
import styled from "styled-components";
import MainNav from "../MainNav/MainNav";
import HomeTemplate from "./Components/HomeTemplate";
import AlbumCard from "../../Components/AlbumCard";
import DropDown from "./Components/DropDown";
import { fetchTrack, fetchLike } from "../../store/action";

const Home = () => {
  const token = useSelector((state) => state.tokenReducer);
  const dispatch = useDispatch();

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
  const [trackId, setTrackId] = useState(null);
  const [likeTrack, setLikeTrack] = useState({});

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

  const getTrackId = (id) => {
    const currentTracks = [...tracks.listOfTracksFromAPI];
    const fliterTrackId = currentTracks?.filter((data) => data.track.id === id);
    setTrackId(fliterTrackId[0]?.track?.id);
    dispatch(fetchTrack(fliterTrackId));
  };

  const goToLike = (id) => {
    const currentTracks = [...tracks.listOfTracksFromAPI];
    const fliterLikeTrack = currentTracks?.filter(
      (data) => data.track.id === id
    );
    dispatch(fetchLike(fliterLikeTrack));
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
              id={data.track.id}
              name={data.track.name}
              type={data.track.album.album_type}
              imgSrc={data.track.album.images[0].url}
              getTrackId={getTrackId}
              goToLike={goToLike}
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
    grid-gap: 30px;
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
