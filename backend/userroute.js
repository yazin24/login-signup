import mongoose from 'mongoose';
import express from 'express';
import { userModel } from './usermodel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/signup', async (req, res) => {

    const { fullname, age, address, username, password } = req.body;

    const user = await userModel.findOne({ fullname, username })

    if (user) {
        console.log('User already exists!')
    }

    const passwordHash = await bcrypt.hash(password, 10)

    const newUser = new userModel({ fullname, age, address, username, password: passwordHash });

    await newUser.save();

    res.json({ message: 'User created successfully' });

});

router.post('/login', async (req, res) => {

    const { username, password } = req.body;

    const user = await userModel.findOne({ username });

    if (!user) {
        return res.json({ message: 'User not found' });
    }

    const passwordValid = await bcrypt.compare(password, user.password);

    if (!passwordValid) {
        return res.json({ message: 'Invalid password' });
    }

    const token = jwt.sign({ id: user.fullname }, 'secret');

    res.json({ token, userFullname: user.fullname });
})


export { router as userRouter }