export interface Place {
  id: string;
  name: string;
  address: string;
  visited: boolean;
}

export interface PlaceCreate {
  name: string;
  address: string;
  visited: boolean;
}

export interface PlaceUpdate {
  name: string;
  address: string;
  visited: boolean;
}
