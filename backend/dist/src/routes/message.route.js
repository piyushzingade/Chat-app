import express from 'express';
import protectRoute from '../middleware/protectedRoute.js';
import { sendMessage, getMessages, getUsersForSidebar } from '../controllers/message.auth.js';
export const messageRouter = express.Router();
messageRouter.get("/conversations", protectRoute, getUsersForSidebar);
messageRouter.get("/:id", protectRoute, getMessages);
messageRouter.post("/send/:id", protectRoute, sendMessage);
