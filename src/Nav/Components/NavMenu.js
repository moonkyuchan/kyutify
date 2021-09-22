import React from "react";
import styled from "styled-components";
import { NavMenuData } from "../../Data/NavData";

const NavMenu = () => {
  const onClick = (e) => {
    console.log(e.target.value);
  };
  return (
    <NavMenuBlock>
      <NavMenuTitle>
        {NavMenuData.map((data) => {
          return (
            <ul key={data.id}>
              <li onClick={onClick}>
                {data.icon}
                <span>{data.name}</span>
              </li>
            </ul>
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
  li {
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
  }
`;
export default NavMenu;
