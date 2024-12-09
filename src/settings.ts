import { nanoid } from "nanoid";

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
}

export enum ApiRoute {
  Login = "/login",
  Logout = "/logout",
  Placelists = "/placelsts",
}

export enum RequestStatus {
  Pending,
  Success,
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

export const DISCOVER_PAGE_PLACELISTS = [
  {
    id: nanoid(8),
    name: "First",
    author: "Mathew",
  },
  {
    id: nanoid(8),
    name: "Second",
    author: "Collin",
  },
  {
    id: nanoid(8),
    name: "Third",
    author: "Andrew",
  },
  {
    id: nanoid(8),
    name: "First",
    author: "Mathew",
  },
  {
    id: nanoid(8),
    name: "Second",
    author: "Collin",
  },
  {
    id: nanoid(8),
    name: "Third",
    author: "Andrew",
  },
  {
    id: nanoid(8),
    name: "First",
    author: "Mathew",
  },
  {
    id: nanoid(8),
    name: "Second",
    author: "Collin",
  },
  {
    id: nanoid(8),
    name: "Third",
    author: "Andrew",
  },
  {
    id: nanoid(8),
    name: "First",
    author: "Mathew",
  },
  {
    id: nanoid(8),
    name: "Second",
    author: "Collin",
  },
  {
    id: nanoid(8),
    name: "Third",
    author: "Andrew",
  },
];

export const SAVED_PAGE_PLACELISTS = [
  {
    id: nanoid(8),
    name: "First",
    author: {
      id: nanoid(8),
      name: "Mathew",
    },
  },
  {
    id: nanoid(8),
    name: "Second",
    author: {
      id: nanoid(8),
      name: "Collin",
    },
  },
  {
    id: nanoid(8),
    name: "Third",
    author: {
      id: nanoid(8),
      name: "Andrew",
    },
  },
];

export const PLACELIST_PAGE_PLACES = [
  { id: nanoid(8), name: "First", address: "Mayer st. 23" },
  { id: nanoid(8), name: "Second", address: "Frunze 2" },
  { id: nanoid(8), name: "Third", address: "Adawda aw 1" },
  { id: nanoid(8), name: "First", address: "Mayer st. 23" },
  { id: nanoid(8), name: "Second", address: "Frunze 2" },
  { id: nanoid(8), name: "Third", address: "Adawda aw 1" },
  { id: nanoid(8), name: "First", address: "Mayer st. 23" },
  { id: nanoid(8), name: "Second", address: "Frunze 2" },
  { id: nanoid(8), name: "Third", address: "Adawda aw 1" },
];
