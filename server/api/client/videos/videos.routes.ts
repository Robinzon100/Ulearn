import express from "express";


//! ─── OWN ────────────────────────────────────────────────────────────────────────
import { defaultRouterOptions } from "../../../constants/router.options";
import { deleteVideo, getVideo } from "./videos.controllers";
const router = express.Router(defaultRouterOptions);



//! ─── CONTROLLERS AND MIDDLAWARES ────────────────────────────────────────────────





// ─── ROUTES ─────────────────────────────────────────────────────────────────────
router.get('/:key', getVideo);
router.delete('/delete/:key', deleteVideo);



export default router;



