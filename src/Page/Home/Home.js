import React from "react";
import MainNav from "../MainNav/MainNav";
import HomeTemplate from "./Component/HomeTemplate";
import ArtistCard from "../../Components/ArtistCard";

const Home = () => {
  return (
    <HomeTemplate>
      <MainNav />
      <ArtistCard />
    </HomeTemplate>
  );
};

export default Home;
