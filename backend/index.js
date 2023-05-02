import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import { userRouter } from './userroute.js';

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`);
})

mongoose.connect(process.env.CONNECTION_STRING)
    .then(() => {
        console.log('Successfully connected to MongoDB!')
    }).catch((err) => {
        console.error(err);
    })

app.use('/users', userRouter)