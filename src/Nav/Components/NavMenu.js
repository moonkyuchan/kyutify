import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { NavMenuData } from "../../Data/NavData";

const NavMenu = () => {
  const [selectedBack, setSelectedBack] = useState(0);
  const selectedMenu = (id) => {
    const currentMenu = [...NavMenuData];
    const menuId = currentMenu?.filter((data) => data.id === id);
    setSelectedBack(menuId[0].id);
  };
  return (
    <NavMenuBlock>
      <NavMenuTitle>
        {NavMenuData.map((data, idx) => {
          return (
            <NavMenuElement
              key={idx}
              id={data.id}
              onClick={() => selectedMenu(data.id)}
              selectedBack={selectedBack}
            >
              <Link to={data.path}>
                {data.icon}
                <span>{data.title}</span>
              </Link>
            </NavMenuElement>
          );
        })}
      </NavMenuTitle>
    </NavMenuBlock>
  );
};

const NavMenuBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavMenuTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-top: 10px;
`;

const NavMenuElement = styled.button`
  width: 100%;
  height: auto;
  font-size: 20px;
  font-weight: bolder;
  color: #bdbdbd;
  display: flex;
  align-items: center;
  padding: 20px 0 20px 10px;
  cursor: pointer;
  &:hover {
    color: white;
  }
  span {
    margin-left: 14px;
  }
  ${(props) =>
    props.selectedBack === props.id &&
    css`
      border: 0px solid black;
      border-radius: 5px;
      background: #c7c7c7;
      color: black;
      &:hover {
        color: black;
      }
    `}
`;

export default NavMenu;
