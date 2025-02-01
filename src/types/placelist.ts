import { Id } from "./common";

export type PlacelistContent = string;

export interface Placelist {
  id: Id;
  name: PlacelistContent;
  authorUsername: PlacelistContent | null;
}

export interface PlacelistCreate {
  name: PlacelistContent;
}

export interface PlacelistUpdate {
  name: PlacelistContent;
}
