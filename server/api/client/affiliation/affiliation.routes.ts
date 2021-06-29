import express from "express";


//! ─── OWN ────────────────────────────────────────────────────────────────────────
import { defaultRouterOptions } from "../../../constants/router.options";
import { getAffiliation } from './affiliation.controllers';
const router = express.Router(defaultRouterOptions);



//! ─── CONTROLLERS AND MIDDLAWARES ────────────────────────────────────────────────




// ─── ROUTES ─────────────────────────────────────────────────────────────────────
router.get('/:token', getAffiliation);



export default router;



