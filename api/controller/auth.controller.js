import User from "../models/user.model.js";

import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  // console.log(req.body);

  const { username, email, password } = req.body; //parsing data json yang dikirim di ambil key nya dari body request.

  const hashPassword = bcryptjs.hashSync(password, 10);




  // insert to database mongo
  const newUser = new User({ username, email, password: hashPassword });

  try {
    await newUser.save();
    res.status(201).json("User created successfully")
  } catch (error) {
    // res.status(500).json(error.message);
    next(errorHandler(550, 'error from the function'));
  }

}