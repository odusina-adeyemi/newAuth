 const express = require ("express");
 const app = express();
 const PORT = 8080;
 
 app.get("/", (req, res) => {
    console.log("Yay, I am back to backend development", req.method)
    res.sendStatus(500)
 })

 app.get("/auth", (req, res) => {
    console.log("do you want to log in?")
    res.send("Hi, do you want to log in??")
 })
 app.listen(PORT, () => {
console.log(`Server is running on port ${PORT} `)
 })