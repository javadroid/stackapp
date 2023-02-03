const LIVE = process.env.REACT_APP_API_URL_LIVE;
const TEST = process.env.REACT_APP_API_URL_TEST;
const LOCAL = process.env.REACT_APP_API_URL_LOCAL;
const MODE = process.env.REACT_APP_MODE;

export const API_URL =
  MODE === "local"
    ? LOCAL
    : MODE === "testNet"
    ? TEST
    : MODE === "mainNet"
    ? LIVE
    : LOCAL;

export const APP_MODE = MODE;
export const GOOGLE_KEY = process.env.REACT_APP_GOOGLE_KEY;
export const SITE_KEY = process.env.REACT_APP_SITE_KEY;
