import express from "express";


//! ─── OWN ────────────────────────────────────────────────────────────────────────
import { defaultRouterOptions } from "../../../constants/router.options";
import { getFile, deleteFile } from './file.controllers';
const router = express.Router(defaultRouterOptions);



//! ─── CONTROLLERS AND MIDDLAWARES ────────────────────────────────────────────────





// ─── ROUTES ─────────────────────────────────────────────────────────────────────
router.get('/:key', getFile);
router.delete('/delete/:key', deleteFile);



export default router;



