import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import Navtemplate from "./Components/Navtemplate";
import { BiCaretRightCircle } from "react-icons/bi";
import NavMenu from "./Components/NavMenu";
import NavOptions from "./Components/NavOptions";
import axios from "axios";
import { TOKEN_REQUEST_API, TOKEN_AUTH, instance } from "../config";
import { useDispatch, useSelector } from "react-redux";
import { fetchToken } from "../store/action/index";

const Nav = () => {
  const track = useSelector((state) => state.trackReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getToken() {
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
      <TrackInfoBlock>
        <InfoWrap>
          <TrackImg
            src={
              track[0]?.track?.album?.images[0].url || track[0]?.images[0].url
            }
          />
          <TrackTitle>
            <span className="mainTitle">
              {track[0]?.track?.name || track[0]?.name}
            </span>
            <span className="subTitle">
              {track[0]?.track?.album?.album_type || track[0]?.type}
            </span>
          </TrackTitle>
        </InfoWrap>
      </TrackInfoBlock>
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
const TrackInfoBlock = styled.div`
  display: flex;
  margin-top: 40px;
  position: relative;
  left: 7px;
  width: 330px;
  height: 400px;
  border: 0px solid white;
`;

const InfoWrap = styled.div``;

const TrackImg = styled.img`
  ${(props) =>
    props.src &&
    css`
      width: 330px;
      height: 400px;
      border-radius: 15px;
    `}
`;

const TrackTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  color: white;
  .mainTitle {
    font-size: 15px;
    font-weight: bold;
  }
  .subTitle {
    font-size: 10px;
    font-weight: bold;
    margin-top: 5px;
  }
`;

export default Nav;
