import { Router } from "express";

import { defaultRouterOptions } from "../../../constants/router.options";
const router = Router(defaultRouterOptions);





// ─── CONTROLLERS AND MIDDLAWARES ────────────────────────────────────────────────
import { getAllCategories } from './categories.controller';





// ─── ROUTES ─────────────────────────────────────────────────────────────────────
router.get('/all', getAllCategories);


export default router;



