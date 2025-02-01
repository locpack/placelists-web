export const FRONTEND_URL = "http://localhost:8081";
export const BACKEND_URL = "http://localhost:8082";
export const REQUEST_TIMEOUT = 5000;

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
  Users = "Users",
  Placelists = "Placelists",
  Places = "Places",
}

export const MENU_HIDDEN = false;
