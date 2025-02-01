import { Namespace } from "@/settings";
import { createAction } from "@reduxjs/toolkit";

export const clearPlaces = createAction(`${Namespace.Places}/clear`);
