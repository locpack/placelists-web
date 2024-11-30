export interface PlacelistUser {
  id: string;
  name: string;
}

export interface PlacelistCompressed {
  id: string;
  name: string;
  author: PlacelistUser;
}
