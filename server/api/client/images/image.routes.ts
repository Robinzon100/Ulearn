import express from "express";


//! ─── OWN ────────────────────────────────────────────────────────────────────────
import { defaultRouterOptions } from "../../../constants/router.options";
import { getImage } from "./images.controllers";
const router = express.Router(defaultRouterOptions);



//! ─── CONTROLLERS AND MIDDLAWARES ────────────────────────────────────────────────





// ─── ROUTES ─────────────────────────────────────────────────────────────────────
router.get('/:key', getImage);



export default router;



