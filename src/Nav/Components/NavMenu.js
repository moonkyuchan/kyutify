import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { NavMenuData } from "../../Data/NavData";

const NavMenu = () => {
  const [select, setSelect] = useState(null);
  const handleSelect = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    console.log(name, value);
  };
  return (
    <NavMenuBlock>
      <NavMenuTitle>
        {NavMenuData.map((data) => {
          return (
            <NavMenuElement
              key={data.id}
              onClick={(event) => handleSelect(event)}
              name={data.name}
              value={data.id}
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

  /* li {
    flex: 1;
    color: #bdbdbd;
    display: flex;
    align-items: center;
    padding: 20px 0 20px 10px;
    cursor: pointer;
    &:hover {
      color: white;
    }
    span {
      padding-left: 14px;
    }
    ${(props) =>
    props.select &&
    css`
      background: "red";
    `}
  } */
`;

const NavMenuElement = styled.button`
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
`;

export default NavMenu;
