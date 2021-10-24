import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTrack } from "../../store/action";
import styled from "styled-components";
import { instance } from "../../config";
import SearchTemplate from "./Components/SearchTemplate";
import AlbumCard from "../../Components/AlbumCard";

const Search = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [artists, setArtists] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [trackId, setTrackId] = useState(null);

  useEffect(() => {
    async function getSearch(val) {
      const res = await instance.get(
        `search?query=${inputValue}&type=artist%2Ctrack%2Calbum&offset=0&limit=20`
      );
      const setting = (res) => {
        setArtists(res.data.artists.items);
        setTracks(
          res.data.tracks.items.filter((data) => {
            return data.artists[0].name === inputValue;
          })
        );
      };
      return setting(res);
    }
    getSearch();
  }, [inputValue]);

  const handleInput = (e) => {
    const {
      target: { value },
    } = e;
    setInputValue(value);
  };

  const searchForm = (e) => {
    e.preventDefault();
  };

  const getTrackId = (id) => {
    const currentTracks = [...artists];
    const fliterTrackId = currentTracks?.filter((data) => data.id === id);
    setTrackId(fliterTrackId[0]?.id);
    dispatch(fetchTrack(fliterTrackId));
  };

  return (
    <SearchTemplate>
      <SearchInput>
        <form onSubmit={searchForm}>
          <SearchBar placeholder="검색" onChange={handleInput} />
        </form>
      </SearchInput>
      <SearchSection>
        {artists.map(
          (data, idx) =>
            data.images.length !== 0 && (
              <AlbumCard
                key={idx}
                id={data.id}
                imgSrc={data.images[1]?.url}
                name={data.name}
                type={data.type}
                getTrackId={getTrackId}
              />
            )
        )}
      </SearchSection>
    </SearchTemplate>
  );
};

const SearchInput = styled.div`
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

// const SearchButton = styled.button`
//   border: 0px solid black;
//   border-radius: 10px;
//   background: #eeeeee;
//   width: 120px;
//   height: 40px;
//   margin-left: 20px;
//   &:hover {
//     background: #1b1b1b;
//     color: #f5f5f5;
//     border: 1px solid white;
//   }
// `;

const SearchSection = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  place-items: center;
  grid-gap: 20px;
  margin-top: 50px;
`;

export default Search;
