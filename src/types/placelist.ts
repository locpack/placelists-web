import { Place } from "./place";

export interface Placelist {
  id: string;
  name: string;
  authorUsername?: string;
}

export interface PlacelistWithPlaces extends Placelist {
  places: Place[];
}
