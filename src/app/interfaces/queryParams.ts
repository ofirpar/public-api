export enum ParamNames {
  TITLE = 'title',
  CATEGORY = 'category',
  HTTPS = 'https'
}

export interface QueryParams {
  [ParamNames.TITLE]?: string;
  [ParamNames.CATEGORY]?: string;
  [ParamNames.HTTPS]?: string;
}



