export interface JwtPayload {
  id: number;

  username: string;

  role: string;

  exp?: number;

  iat?: number;
}
