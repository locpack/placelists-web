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
  Places = "/places",
}

export enum AuthStatus {
  Unknown,
  NotAuthorized,
  Authorized,
}

export const CURRENT_AUTH_STATUS = AuthStatus.Authorized;
