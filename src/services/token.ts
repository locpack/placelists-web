import { TOKEN_KEY_NAME } from "@/cfg/cfg.ts";
import { jwtDecode } from "jwt-decode";
import type { AccessToken, Token } from "@/types/auth.ts";
import isJwtTokenExpired from "jwt-check-expiry";

export function getToken() {
  const tokenString = localStorage.getItem(TOKEN_KEY_NAME);
  if (!tokenString) {
    return null;
  }
  const decoded: AccessToken = JSON.parse(tokenString);
  return decoded;
}

export function setToken(token: AccessToken) {
  const encoded = JSON.stringify(token);
  localStorage.setItem(TOKEN_KEY_NAME, encoded);
}

export function decodeToken() {
  const token = getToken();
  if (!token) {
    return null;
  }
  return jwtDecode<Token>(token.value);
}

export function isTokenValid() {
  const token = getToken();
  if (!token) {
    return false;
  }
  return isJwtTokenExpired(token.value);
}

export function deleteToken() {
  localStorage.removeItem(TOKEN_KEY_NAME);
}
