import { Id } from "./common";

export type PlaceContent = string;

export interface Place {
  id: Id;
  name: PlaceContent;
  address: PlaceContent;
  visited: boolean;
}

export interface PlaceCreate {
  name: PlaceContent;
  address: PlaceContent;
}

export interface PlaceUpdate {
  name: PlaceContent;
  address: PlaceContent;
  visited: boolean;
}
