export type PlaceContent = string;

export interface Place {
  id: string;
  name: PlaceContent;
  address: PlaceContent;
  visited: boolean;
}

export interface PlaceCreate {
  name: PlaceContent;
  address: PlaceContent;
}

export interface PlaceUpdate {
  id: string;
  name: PlaceContent;
  address: PlaceContent;
  visited: boolean;
}
