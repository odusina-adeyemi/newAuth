import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "../db.js";

const router = express.Router();

router.post("/register", (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8)
  console.log(hashedPassword);
//   console.log(username, password);
try {
    
} catch (error) {
    console.log(error.message)
    res.sendStatus(503);
    
}
  res.sendStatus(201);
});

router.post("/login", (req, res) => {
  // we get user email, and we look up the password associated with that email in the database
  // we get it back and see its encrypted, which means that we cannot compare it to the one the user just entered while trying to login,
  // so what we have to do iss to, again encrypt the password the user just entered as the same encryption algorithm can match encryption of same character that will be encoded in the same way or pattern


});

export default router;
