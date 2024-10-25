import express from 'express';
 export const messageRouter = express.Router();

messageRouter.get('/converstions', (req, res) => {
    res.send("Converstion");
})

