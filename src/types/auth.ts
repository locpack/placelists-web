export interface Register {
  username: string;
  email: string;
  password: string;
}

export interface Login {
  username: string;
  password: string;
}

export interface Refresh {
  value: string;
}

export interface AccessToken {
  value: string;
  refreshToken: string;
  expiresIn: string;
}

export interface Token {
  preferred_username: string;
}
