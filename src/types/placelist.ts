export interface Placelist {
  id: string;
  name: string;
  author_username?: string;
}

export interface PlacelistCreate {
  name: string;
}

export interface PlacelistUpdate {
  name: string;
}
