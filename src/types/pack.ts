import { PackStatus } from "@/enums/enums";
import type { Place } from "@/types/place";
import type { User } from "@/types/user";

export interface Pack {
  id: string;
  name: string;
  status: PackStatus;
  author: User;
  places: Place[];
}

export interface PackCreate {
  name: string;
}

export interface PackUpdate {
  name: string;
  placesIds: string[];
  status: PackStatus;
}
