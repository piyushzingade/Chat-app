import express from 'express';
import { login, logout, signup, getMe } from '../controllers/auth.controller.js';
import protectedRoute from '../middleware/protectedRoute.js';
export const authRouter = express.Router();
authRouter.get('/me', protectedRoute, getMe);
authRouter.post('/login', login);
authRouter.post('/logout ', logout);
authRouter.post('/signup', signup);
