import express from "express";


//! ─── OWN ────────────────────────────────────────────────────────────────────────
import { defaultRouterOptions } from "../../../constants/router.options";
const router = express.Router(defaultRouterOptions);
import profileRoutes from "./profile/profile.routes";
import courseRoutes from "./courses/userCourses.routes";



//! ─── CONTROLLERS AND MIDDLAWARES ────────────────────────────────────────────────





// ─── ROUTES ─────────────────────────────────────────────────────────────────────
router.use('/profile', profileRoutes);
router.use('/course', courseRoutes);


export default router;



