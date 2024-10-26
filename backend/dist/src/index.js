import express from 'express';
import { authRouter } from './routes/auth.route.js';
import { messageRouter } from './routes/message.route.js';
import cookieParser from 'cookie-parser';
import dotenv from "dotenv";
import cors from 'cors';
dotenv.config();
const app = express();
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter);
app.listen(3000, () => {
    console.log("Server listening on  Port 3000!");
});
