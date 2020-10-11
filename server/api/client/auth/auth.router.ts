import express from "express";
import { registrationController } from './auth.controller';
const router = express.Router();


router.post('/register', registrationController);


export default router;



