import { Namespace } from "@/settings";
import { createAction } from "@reduxjs/toolkit";

export const clearPlacelists = createAction(`${Namespace.Placelists}/clear`);
