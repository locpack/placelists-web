import { PlaceCompressed } from "./place";
import { UserCompressed } from "./user";

export interface PlacelistCompressed {
  id: string;
  name: string;
  author: string;
}

export interface Placelist {
  id: string;
  name: string;
  author: UserCompressed;
  places: PlaceCompressed[];
}
