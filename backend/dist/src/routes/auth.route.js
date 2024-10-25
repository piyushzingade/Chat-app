import express from 'express';
import { login, logout, signup } from '../controllers/auth.controller.js';
export const authRouter = express.Router();
authRouter.get('/login', login);
authRouter.get('/logout ', logout);
authRouter.get('/signup', signup);
