import express from "express";


//! ─── OWN ────────────────────────────────────────────────────────────────────────
import { defaultRouterOptions } from "../../../constants/router.options";
import { deleteVideo, getVideoFile, getVideoStream } from "./videos.controllers";
const router = express.Router(defaultRouterOptions);



//! ─── CONTROLLERS AND MIDDLAWARES ────────────────────────────────────────────────





// ─── ROUTES ─────────────────────────────────────────────────────────────────────
router.get('/videoStream/:key', getVideoStream);
// router.get('/:key', getVideoStream);
router.delete('/delete/:key', deleteVideo);



export default router;



