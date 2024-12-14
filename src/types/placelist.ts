import { Place } from "./place";
import { UserCompressed } from "./user";

export interface Placelist {
  id: string;
  name: string;
  author: UserCompressed;
}

export interface PlacelistWithPlaces {
  placelist: Placelist;
  places: Place[];
}
