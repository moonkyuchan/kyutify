import React from "react";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { VscLibrary } from "react-icons/vsc";

export const NavMenuData = [
  {
    id: 1,
    title: "HOME",
    name: "home",
    icon: <AiOutlineHome />,
    path: "/",
  },
  {
    id: 2,
    title: "SEARCH",
    name: "search",
    icon: <AiOutlineSearch />,
    path: "/search",
  },
  {
    id: 3,
    title: "MY LIBRARY",
    name: "mylibrary",
    icon: <VscLibrary />,
    path: "/library",
  },
];
