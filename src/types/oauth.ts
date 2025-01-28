import { OauthProvider } from "@/settings";

export interface OauthRequest {
  redirectUrl: string;
}

export interface OauthCredentials {
  code: string;
  provider: OauthProvider;
}

export interface OauthToken {
  userEmail: string;
  expiresIn: number;
  type: string;
  scopes: string[];
}
