import React from "react";
import styled from "styled-components";
import AlbumCard from "../../Components/AlbumCard";
import LibraryTemplate from "./Components/LibraryTemplate";
import { useSelector } from "react-redux";

const Library = () => {
  const like = useSelector((state) => state.likeReducer);
  return (
    <LibraryTemplate>
      <Section>
        <div className="section">
          {like.map((data, idx) => {
            return (
              <AlbumCard
                key={idx}
                id={data[0].track.id}
                name={data[0].track.name}
                type={data[0].track.album.album_type}
                imgSrc={data[0].track.album.images[0].url}
              />
            );
          })}
        </div>
      </Section>
    </LibraryTemplate>
  );
};

const Section = styled.div`
  display: flex;
  align-items: center;
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

export default Library;
