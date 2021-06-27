import express from "express";


//! ─── OWN ────────────────────────────────────────────────────────────────────────
import { defaultRouterOptions } from "../../../constants/router.options";
import { getImage, deleteImage } from './images.controllers';
const router = express.Router(defaultRouterOptions);



//! ─── CONTROLLERS AND MIDDLAWARES ────────────────────────────────────────────────





// ─── ROUTES ─────────────────────────────────────────────────────────────────────
router.get('/:key', getImage);
router.delete('/delete/:key', deleteImage);



export default router;



