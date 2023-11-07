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


// midleware routes
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  return res.status(statusCode).json({
    success: false,
    statusCode, // di es6 jika nama key dan variabel sama maka boleh di tulis satu , jadi ini mirip dengan statusCode : statusCode
    message,
  })
})