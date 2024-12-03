import { nanoid } from "nanoid";

export enum ButtonType {
  Primary,
  Secondary,
  Destructive,
}

export enum InputType {
  Number = "number",
  Search = "search",
  Text = "text",
  Email = "email",
  Password = "password",
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

export const CURRENT_AUTH_STATUS = AuthStatus.Authorized;

export const MENU_HIDDEN = false;

export const DISCOVER_PAGE_PLACELISTS = [
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
