import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.user.js'

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
  console.log("Connected mongo DB !");
}).catch((err) => {
  console.log(err);
})

const app = express();

app.use(express.json()); //mengijinkan json body ke route post

app.listen(3000, () => {
  console.log('Server is running on port 3000 !');
})

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);