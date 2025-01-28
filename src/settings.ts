import { nanoid } from "nanoid";

export enum AuthStatus {
  Unknown,
  NotAuthorized,
  Authorized,
}

export const AUTH_STATUS = AuthStatus.NotAuthorized;

export const GITHUB_OAUTH_CLIENT_ID = "Iv23liXhGDSKbk62rTnM";

export const FRONTEND_URL = "http://localhost:8081";

export const BACKEND_URL = "http://localhost:8082";
export const REQUEST_TIMEOUT = 5000;
export const TOKEN_KEY_NAME = "placelists-token";

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

export enum Namespace {
  User = "User",
  Placelists = "Placelists",
  Placelist = "Placelist",
  Place = "Place",
  Oauth = "Oauth",
}

export enum RequestStatus {
  Pending,
  Fulfilled,
  Error,
}

export enum OauthProvider {
  Github = "github",
  Yandex = "yandex",
}

export const USER = {
  id: nanoid(8),
  name: "Aleksey",
  username: "kfcgenius",
  mail: "minecraft@gmail.com",
};

export const MENU_HIDDEN = false;
