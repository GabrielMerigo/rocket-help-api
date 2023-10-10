export interface AuthRequest extends Request {
  headers: { authorization: string } & Headers;
}
