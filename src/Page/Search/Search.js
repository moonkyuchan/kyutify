import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { instance } from "../../config";
import SearchTemplate from "./Components/SearchTemplate";
// import axios from "axios";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [artists, setArtists] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [albums, setAlbums] = useState([]);
  console.log(inputValue);
  // console.log("useEffect artist", artists);
  // console.log("useEffect tracks", tracks);
  // console.log("useEffect albums", albums);

  useEffect(() => {
    async function getSearch(val) {
      const res = await instance.get(
        `search?query=${val}&type=artist%2Ctrack%2Calbum&offset=0&limit=20`
      );
      const setting = (res) => {
        setArtists(res.data.artists.items);
        setTracks(res.data.tracks.items);
        setAlbums(res.data.albums.items);
      };
      return setting(res);
    }
    getSearch();
  }, []);

  const handleInput = (e) => {
    const {
      target: { value },
    } = e;
    setInputValue(value);
  };

  return (
    <SearchTemplate>
      <SearchBar placeholder="검색" onChange={handleInput} />
    </SearchTemplate>
  );
};
const SearchBar = styled.input`
  width: 400px;
  height: 50px;
  padding: 10px;

  ::placeholder {
    color: grey;
  }
`;
export default Search;
