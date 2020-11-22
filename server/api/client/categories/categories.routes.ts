import express from "express";
import { defaultRouterOptions } from "../../../constants/router.options";


// ─── CONTROLLERS AND MIDDLAWARES ────────────────────────────────────────────────
// import validateRegistrationObject  from '../../../middleware/auth/registration.middleware';
// TODO: add validation to categories like in the user
import { getAllCategories } from './categories.controller';



const router = express.Router(defaultRouterOptions);

router.get('/all', getAllCategories );
// router.post('/login', postLogin);


export default router;



