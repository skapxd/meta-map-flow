export interface RespAuth {
  access_token: string;
  expiresIn: number;
  payload: Payload;
}

export interface Payload {
  user: User;
}

export interface User {
  _id: string;
}