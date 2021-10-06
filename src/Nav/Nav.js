import React, { useEffect } from "react";
import styled from "styled-components";
import Navtemplate from "./Components/Navtemplate";
import { BiCaretRightCircle } from "react-icons/bi";
import NavMenu from "./Components/NavMenu";
import NavOptions from "./Components/NavOptions";
import axios from "axios";
import { TOKEN_REQUEST_API, TOKEN_AUTH, instance } from "../config";
import { useDispatch } from "react-redux";
import { fetchToken } from "../store/action/index";

const Nav = () => {
  // console.log("Nav component");

  const dispatch = useDispatch();

  useEffect(() => {
    // console.log("Nav component-useEffect getToken()");

    async function getToken() {
      // console.log("Nav component-getToken()");
      await axios(TOKEN_REQUEST_API, {
        headers: { Authorization: TOKEN_AUTH },
        data: "grant_type=client_credentials",
        method: "POST",
      })
        .then((tokenRes) => {
          dispatch(fetchToken(tokenRes.data.access_token));
          instance.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${tokenRes.data.access_token}`;
        })
        .catch((err) => {
          console.log("token Err", err);
        });
    }
    getToken();
  }, [dispatch]);

  return (
    <Navtemplate>
      <NavTitle>
        <BiCaretRightCircle style={{ fontSize: "45px", marginRight: "5px" }} />
        <h1>Kyutify</h1>
      </NavTitle>
      <NavMenu />
      <NavOptions />
    </Navtemplate>
  );
};

const NavTitle = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  h1 {
    font-size: 40px;
  }
  cursor: pointer;
`;

export default Nav;
