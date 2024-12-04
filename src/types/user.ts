export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
}

export interface UserLogin {
  username: string;
  password: string;
}

export interface UserRegister {
  name: string;
  username: string;
  email: string;
  password: string;
}

export interface UserRegisterForm {
  name: string;
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
}
