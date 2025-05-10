export interface Meta {
  success: boolean;
}

export interface Error {
  message: string;
  code: string;
}

export interface SingleResponseWrapper<T> {
  data?: T;
  meta: Meta;
  errors: Error[];
}

export interface MultipleResponseWrapper<T> {
  data?: T[];
  meta: Meta;
  errors: Error[];
}

export interface WrappedRequest<T> {
  id: string;
  data: T;
}
