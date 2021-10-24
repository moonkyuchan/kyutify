export const TOKEN = "TOKEN";

export const fetchToken = (localToken) => {
  return {
    type: TOKEN,
    payload: localToken,
  };
};

export const TRACK = "TRACK";

export const fetchTrack = (track) => {
  return {
    type: TRACK,
    payload: track,
  };
};

export const LIKE = "LIKE";

export const fetchLike = (like) => {
  return {
    type: LIKE,
    payload: like,
  };
};
