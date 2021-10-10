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
