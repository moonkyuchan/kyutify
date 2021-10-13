import axios from "axios";
import base64 from "base-64";

const Credentials = () => {
  return {
    ClientId: "8592401c6be54b63b292e9f2f1b6e394",
    ClientSecret: "b41d9d388b0f417eafaf1762a2930a93",
  };
};

const spotify = Credentials();

export const TOKEN_REQUEST_API = "https://accounts.spotify.com/api/token";
export const TOKEN_AUTH = `Basic ${base64.encode(
  spotify.ClientId + ":" + spotify.ClientSecret
)}`;
const BASE_URL = "https://api.spotify.com/v1/";

export const instance = axios.create({
  baseURL: BASE_URL,
});

export const ARTIST_API = "artists";
export const NEW_RELEASE = "browse/new-releases?country=KR";
export const GET_CATEGORIES = "browse/categories?locale=sv_KR";
export const SEARCH = "search";
