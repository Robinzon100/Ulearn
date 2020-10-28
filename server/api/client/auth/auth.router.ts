import express from "express";
import { postRegistration, postLogin } from './registration.controller';
const router = express.Router();


router.post('/register', postRegistration);
router.post('/login', postLogin);


export default router;



