import { createAction } from "@reduxjs/toolkit";
import { Namespace } from "@/enums/enums.ts";

export const clearFoundPacks = createAction(`${Namespace.Packs}/clearFoundPacks`);
