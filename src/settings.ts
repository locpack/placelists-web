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
  Placelist = "Placelist",
  Place = "Place",
}

export enum RequestStatus {
  Pending,
  Fulfilled,
  Error,
}

export const AUTH_STATUS = AuthStatus.NotAuthorized;

export const FRONTEND_URL = "http://localhost:80";

export const BACKEND_URL = "http://localhost:8082";
export const REQUEST_TIMEOUT = 5000;
export const TOKEN_KEY_NAME = "placelists-token";

export const USER = {
  id: nanoid(8),
  name: "Aleksey",
  username: "kfcgenius",
  mail: "minecraft@gmail.com",
};

export const MENU_HIDDEN = false;
