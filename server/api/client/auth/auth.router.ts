import express from "express";
import { postRegistration, postLogin } from './registration.controller';
import validateRegistrationObject  from '../../../middleware/auth/registration.middleware';
const router = express.Router();


router.post('/register', validateRegistrationObject, postRegistration);
router.post('/login', postLogin);


export default router;



