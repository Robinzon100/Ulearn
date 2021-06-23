import express from "express";
import { defaultRouterOptions } from "../constants/router.options";
const router = express.Router(defaultRouterOptions)


// ─── ROUTES ─────────────────────────────────────────────────────────────────────
import authRoutes from "./client/auth/auth.routes";
import userRoutes from "./client/user/user.routes";
import categoriesRoutes from "./client/categories/categories.routes";
import courseRoutes from "./client/courses/courses.routes";
import imageRoutes from "./client/images/image.routes";
import videoRoutes from "./client/videos/videos.routes";



router.use("/user", userRoutes)
router.use("/auth", authRoutes)
router.use("/categories", categoriesRoutes)
router.use("/course", courseRoutes)
router.use("/images", imageRoutes)
router.use("/videos", videoRoutes)


export default router



