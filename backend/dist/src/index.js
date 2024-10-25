import express from 'express';
import { authRouter } from './routes/auth.route.js';
import { messageRouter } from './routes/message.route.js';
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter);
app.listen(3000, () => {
    console.log("Server listening on  Port 3000!");
});