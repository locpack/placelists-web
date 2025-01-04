export interface Meta {
  success: boolean;
}

export interface Error {
  message: string;
}

export interface SingleResponseWrapper<T> {
  data?: T;
  meta: Meta;
  errors: Error[];
}

export interface MultipleResponseWrapper<T> {
  data: T[];
  meta: Meta;
  errors: Error[];
}
