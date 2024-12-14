import { nanoid } from "nanoid";
import { Place } from "./types/place";
import { Placelist } from "./types/placelist";

export enum ButtonType {
  Primary,
  Accent,
  Tertiary,
}

export enum Path {
  Home = "/",
  Login = "/login",
  Register = "/register",
  Discover = "/discover",
  Saved = "/saved",
  Profile = "/profile",
  Placelists = "/placelists",
  PlacelistsCreate = "/placelists/create",
  Places = "/places",
  PlacesCreate = "/places/create",
}

export enum AuthStatus {
  Unknown,
  NotAuthorized,
  Authorized,
}

export enum Namespace {
  User = "User",
  Placelists = "Placelists",
  Placelist = "Placelist",
  Place = "Place",
}

export enum ApiRoute {
  Login = "/login",
  Logout = "/logout",
  Placelists = "/placelsts",
}

export enum RequestStatus {
  Pending,
  Fulfilled,
  Error,
}

export const AUTH_STATUS = AuthStatus.NotAuthorized;

export const BACKEND_URL = "https://jsonplaceholder.typicode.com";
export const REQUEST_TIMEOUT = 5000;
export const TOKEN_KEY_NAME = "placelists-token";

export const USER = {
  id: nanoid(8),
  name: "Aleksey",
  username: "kfcgenius",
  mail: "minecraft@gmail.com",
};

export const MENU_HIDDEN = false;

export const DISCOVER_PAGE_PLACELISTS: Placelist[] = [
  {
    id: nanoid(8),
    name: "First",
    author: { id: nanoid(8), name: "Mathew" },
  },
  {
    id: nanoid(8),
    name: "Second",
    author: { id: nanoid(8), name: "Collin" },
  },
  {
    id: nanoid(8),
    name: "Third",
    author: { id: nanoid(8), name: "Andrew" },
  },
  {
    id: nanoid(8),
    name: "Fourth",
    author: { id: nanoid(8), name: "Ewrin" },
  },
];

export const PLACELIST_PAGE_PLACES: Place[] = [
  { id: nanoid(8), name: "First", address: "Mayer st. 23", visited: true },
  { id: nanoid(8), name: "Second", address: "Frunze 2", visited: true },
  { id: nanoid(8), name: "Third", address: "Adawda aw 1", visited: true },
  { id: nanoid(8), name: "First", address: "Mayer st. 23", visited: false },
  { id: nanoid(8), name: "Second", address: "Frunze 2", visited: false },
  { id: nanoid(8), name: "Third", address: "Adawda aw 1", visited: true },
  { id: nanoid(8), name: "First", address: "Mayer st. 23", visited: false },
  { id: nanoid(8), name: "Second", address: "Frunze 2", visited: true },
  { id: nanoid(8), name: "Third", address: "Adawda aw 1", visited: false },
  { id: nanoid(8), name: "Third", address: "Adawda aw 1", visited: false },
  { id: nanoid(8), name: "Third", address: "Adawda aw 1", visited: false },
  { id: nanoid(8), name: "Third", address: "Adawda aw 1", visited: false },
];

export const PLACELIST: Placelist = {
  id: nanoid(8),
  name: "First",
  author: { id: nanoid(8), name: "selfisher" },
};
