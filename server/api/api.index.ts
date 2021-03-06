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
import fileRoutes from "./client/files/file.routes";
import affiliateRoutes from "./client/affiliation/affiliation.routes";
import commentsRoutes from "./client/commetns/comments.routes";



router.use("/user", userRoutes)
router.use("/auth", authRoutes)
router.use("/categories", categoriesRoutes)
router.use("/course", courseRoutes)
router.use("/images", imageRoutes)
router.use("/videos", videoRoutes)
router.use("/files", fileRoutes)
router.use("/affiliate", affiliateRoutes)
router.use("/comments", commentsRoutes)


export default router



