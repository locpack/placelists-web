import { Error, Id } from "./common";

export interface Meta {
  success: boolean;
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

export interface WrappedRequest<T> {
  id: Id;
  data: T;
}
