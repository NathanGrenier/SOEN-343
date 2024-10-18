export const API_PATH = process.env.API_PATH || "/api";

export function makeAPIPath(path: string) {
  return API_PATH + path;
}
