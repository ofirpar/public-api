export interface ApiResponse {
  entries: ApiEntry[];
  count: number;
}

export interface ApiEntry {
  API: string,
  Auth: string,
  Category: string,
  Cors: string,
  Description: string,
  HTTPS: boolean,
  Link: string;
}
