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

  const searchForm = (e) => {
    e.preventDefault();
  };

  return (
    <SearchTemplate>
      <SearchSection>
        <form onSubmit={searchForm}>
          <SearchBar placeholder="검색" onChange={handleInput} />
          <SearchButton type="submit">Search</SearchButton>
        </form>
      </SearchSection>
    </SearchTemplate>
  );
};

const SearchSection = styled.div`
  display: flex;
`;
const SearchBar = styled.input`
  border-radius: 10px;
  width: 400px;
  height: 50px;
  padding: 0 15px 0 15px;

  ::placeholder {
    color: grey;
  }
`;

const SearchButton = styled.button`
  border: 0px solid black;
  border-radius: 10px;
  background: #eeeeee;
  width: 120px;
  height: 40px;
  margin-left: 20px;
  &:hover {
    background: #1b1b1b;
    color: #f5f5f5;
    border: 1px solid white;
  }
`;

export default Search;
