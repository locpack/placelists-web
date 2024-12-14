export interface UserIdentity {
  id: string;
  username: string;
  email: string;
  token: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface UserCompressed {
  id: string;
  name: string;
}
