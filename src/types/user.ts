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
