export type LoginRequest = {
  username: string;
  password: string;
};

export type RegisterRequest = {
  username: string;
  email: string;
  password: string;
  name: string;
};

export type GoogleLoginRequest = {
  credential: string;
};
